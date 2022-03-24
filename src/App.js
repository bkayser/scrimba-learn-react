import React from "react"
import logo from './logo.svg';
import './App.css';
import Die from './Die.js'

function newDie() {
    return ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false
    })
}
function allNewDice() {
    return (Array.from({ length: 10 }, () => newDie()))
}

function App() {

    const [dice, setDice] = React.useState(allNewDice());
    const [count, setCount] = React.useState(0)
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => { }, [tenzies])

    function Dice() {
        return (
            dice.map((die, i) => <Die key={i}
                value={die.value}
                holdDie={() => holdDie(i)}
                isHeld={die.isHeld} />)
        )
    }
    function startOver() {
        setCount(0)
        setDice(allNewDice())
        setTenzies(false)
    }
    function rollDice(ev) {
        if (tenzies) {
            startOver()
        } else {
            setDice((oldDice) => oldDice.map((die) => die.isHeld ? die : newDie()))
            setCount(c => c + 1)
        }
    }

    function holdDie(i) {
        const newDice = [...dice]
        newDice[i] = {
            value: newDice[i].value,
            isHeld: !newDice[i].isHeld
        }
        setDice(newDice)
        if (newDice.every(die => die.isHeld && die.value === dice[0].value)) {
            setTenzies(true)
        }
    }

    function expectedRemaining() {
        const n = dice.reduce((count, val) => count + (val.isHeld ? 0 : 1), 0)
        const p = 1 / 6
        const iter = 500
        let sum = 0
        for (var k = 1; k <= iter; k++) {
            const prob = -n * Math.log(1 - p) * ((1 - (1 - p) ** k) ** (n - 1)) * (1 - p) ** k
            sum += k * prob
        }
        return (Math.round(sum))
    }
    function instructions() {
        if (count == 0 && dice.every(die=>!die.isHeld)) {
            return "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."
        } else if (tenzies) {
            return `Congratulations!  You got it in ${count} rolls!`
        } else {
            return `You've rolled ${count} time${count == 1 ? "" : "s"}.  Expected remaining rolls is ${expectedRemaining()}.`
        }

    }
    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <div className="instructions">
                <p className="instructions-text">{instructions()}</p>
            </div>
            <div className="table">
                {Dice()}
            </div>
            <button id="rollButton" onClick={rollDice}>{tenzies ? "Start Over" : "Roll"}</button>
        </main>
    );
}

export default App;
