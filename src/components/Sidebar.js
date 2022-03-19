import React from "react"

export default function Sidebar(props) {

    function dragestartHandler(event, noteId) {
        event.dataTransfer.setData("text/plain", event.target.id)
        event.dataTransfer.effectAllowed = "move";
        console.log(`Start drag of "${event.target.id}"`)
    }
    function dropHandler(event) {
        event.preventDefault();

        const sourceId = event.dataTransfer.getData("text/plain");
        let dropTarget = event.target;
        let dropId = dropTarget.id;

        while (dropId == "") {
            dropTarget = dropTarget.parentElement;
            dropId = dropTarget.id;
        }
        console.log(`Dropped ${sourceId} onto: ${dropId}`);
        props.swapAction(sourceId, dropId);
    }
    function dragoverHandler(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }
    function extractTitle(body) {
        const m = body.match(/^#*\s*(\S[^\n]*)/)
        return m ? m[1] : null;
    }
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div className={`drag-me title ${note.id === props.currentNote.id ? "selected-note" : ""}`}
                id={note.id}
                onClick={() => props.setCurrentNoteId(note.id)} draggable="true" 
                onDragStart={(ev)=>dragestartHandler(ev, note.id)}>
                <div className="text-snippet">{extractTitle(note.body) || "Note " + (index + 1)}</div>
                <button className="delete-btn" onClick={(event) => props.deleteNote(event, note.id)}>
                  <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar" onDragOver={dragoverHandler} onDrop={dropHandler}>
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
