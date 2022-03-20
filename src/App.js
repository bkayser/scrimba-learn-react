import React, { useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import { nanoid } from "nanoid"

/**
    * Challenge: Try to figure out a way to display only the 
    * first line of note.body as the note summary in the
    * sidebar.
    * 
    * Hint 1: note.body has "invisible" newline characters
    * in the text every time there's a new line shown. E.g.
    * the text in Note 1 is:
    * "# Note summary\n\nBeginning of the note"
    * 
    * Hint 2: See if you can split the string into an array
    * using the "\n" newline character as the divider
    */

export default function App() {
    const [notes, setNotes] = React.useState(() => {
        return (JSON.parse(localStorage.getItem("notes") || '[]'))
    })

    useEffect(
        () => {
            localStorage.setItem("notes", JSON.stringify(notes))
        },
        [notes]
    )

    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setCurrentNoteId(newNote.id)
        setNotes(prevNotes => [...prevNotes, newNote])
    }

    function updateNote(text) {
        setNotes(oldNotes => {
            const newNotes = [...oldNotes]
            newNotes[findNoteIndex(currentNoteId)].body = text;
            /*
            const currentNoteIndex = findNoteIndex(currentNoteId);
            newNotes.splice(currentNoteIndex, 1)
            newNotes.unshift({
                id: currentNoteId,
                body: text
            })
            */
            return newNotes;
        })
    }
    function findNoteIndex(noteId) {
        return (notes.map((n) => n.id).indexOf(noteId))
    }
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    /**
      * Challenge: complete and implement the deleteNote function
      * 
      * Hints: 
      * 1. What array method can be used to return a new
      *    array that has filtered out an item based 
      *    on a condition?
      * 2. Notice the parameters being based to the function
      *    and think about how both of those parameters
      *    can be passed in during the onClick event handler
      */

    function deleteNote(event, noteId) {
        event.stopPropagation();
        const i = findNoteIndex(noteId);
        const newNoteList = [...notes]
        newNoteList.splice(i, 1)
        setNotes(newNoteList)
        /**
         * Change selected note if necessary
         */
        if (noteId == currentNoteId && newNoteList.length > 0) {
            setCurrentNoteId(newNoteList[Math.min(newNoteList.length - 1, i)].id)
        }
    }

    function swapNotes(fromId, toId) {
        if (fromId == toId) return;
        const fromIndex = findNoteIndex(fromId);
        setNotes((oldNotes) => {
            const newNotes = [ ...oldNotes ]
            const target = newNotes[fromIndex]
            newNotes.splice(fromIndex, 1)
            newNotes.splice(findNoteIndex(toId), 0, target)
            return(newNotes)
        })
    }
    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            currentNote={findCurrentNote()}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                            swapAction={swapNotes}
                        />
                        {
                            currentNoteId &&
                            notes.length > 0 &&
                            <Editor
                                currentNote={findCurrentNote()}
                                updateNote={updateNote}
                            />
                        }
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                        </button>
                    </div>

            }
        </main>
    )
}
