import React from "react"
import "./Controls.css"
export default function Controls(props) {
    return (
        <div className="controls">
            <div className="controls__textinputs">
                <input id="line1" type="text"/>
                <input id="line2" type="text"/>
            </div>
            <button className="controls__generate">Get a new meme image </button>
        </div>
    )
}