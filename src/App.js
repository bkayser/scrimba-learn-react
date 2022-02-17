import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Photo from "./images/zaferes.png";
import "./style.css"
export default function BodyContent() {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="cards">
                <Card photo={Photo} rating="4" reviews="6" title="Life lessons with Katie Zeferes" country="USA" price="136" />
                <Card photo={Photo} rating="3" reviews="62" title="Life lessons with Katie Zeferes" country="USA" price="236" />
                <Card photo={Photo} rating="4" reviews="6" title="Life lessons with Katie Zeferes" country="USA" price="156" />
                <Card photo={Photo} rating="4" reviews="6" title="Life lessons with Katie Zeferes" country="USA" price="199" />
                <Card photo={Photo} rating="4" reviews="6" title="Life lessons with Katie Zeferes" country="USA" price="44" />
                <Card photo={Photo} rating="4" reviews="6" title="Life lessons with Katie Zeferes" country="USA" price="1436" />
            </div>
        </>
    )
}