import React from "react";
import PhotoGrid from "../images/photo-grid.png";
export default function Hero() {
    return (
        <div className="Hero">
            <img className="Hero__photos" src={PhotoGrid}/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts&mdash;all without leaving home.</p>
        </div>
    );
}