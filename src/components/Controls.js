import React, { useState, useEffect } from "react"
import "./Controls.css"
import MemeData from "../memeData"

export default function Controls(props) {

    const [meme, setMeme] = useState({
        imageURL: 'https://miro.medium.com/max/1176/0*FIrgbyL6VCO4jUmG',
        topText: '',
        bottomText: ''
    })

    const [allMemeImages, updateMemeImages] = useState([])

    React.useEffect(function() {
        console.log("use effect")
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(json => { console.log("got data: ", json)
                updateMemeImages(json.data.memes)
            })
    }, [])

    function updateCaption(event) {
        const { name, value } = event.target
        setMeme(oldMeme => ({
            ...oldMeme,
            [name]: value
        }))
    }
    function updateMeme() {
        if (allMemeImages.length == 0) return;
        const nextMeme = Math.floor(Math.random() * allMemeImages.length)
        setMeme(oldMeme => ({
            ...oldMeme,
            imageURL: allMemeImages[nextMeme].url,
        }))
    }
    console.log(`New caption: ${meme.topText} => ${meme.bottomText}`)

    return (
        <main className="controls">
            <input id="line1"
                name="topText"
                onChange={updateCaption}
                placeholder="Top Text"
                type="text"
                value={meme.topText} />
            <input id="line2"
                name="bottomText"
                onChange={updateCaption}
                placeholder="Bottom Text"
                type="text"
                value={meme.bottomText} />
            <button onClick={updateMeme}>Get a new meme image&nbsp;&nbsp;🖼</button>
            <div className="meme">
                <img className="meme__image" src={meme.imageURL} />
                <h2 className="meme__toptext memetext">{meme.topText || "Top Line Here"}</h2>
                <h2 className="meme__bottomtext memetext">{meme.bottomText || "Bottom Line Here"}</h2>
            </div>
        </main>
    )
}




