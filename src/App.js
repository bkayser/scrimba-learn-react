import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './style.css'


export default function App() {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className="container">
            <Navbar darkMode={darkMode}  toggleDarkMode={ () => { setDarkMode( v => !v) } }/>
            <Main darkMode={darkMode}/>
        </div>
    )
}