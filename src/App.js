import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cards from "./data"
import "./style.css"
export default function BodyContent() {

    const cardElements = cards.map((c) => <Card
        key={c.id}
        {...c} />)

    return (
        <>
            <Navbar />
            <Hero />
            <div className="cards">
                {cardElements}
            </div>
        </>
    )
}