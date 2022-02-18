import React from "react"
import './Header.css'
import Troll from "../images/TrollFace.png"
export default function Header(props) {
   return (
       <header className="header">
           <img className="header__troll" src={Troll}/>
           <div className="header__title">Meme Generator</div>
           <div className="header__course">React Course - Project 3</div>
       </header>
   )
}