import React from "react";
import Answer from "./Answer"
import { nanoid } from "nanoid"
function Question(props) {

    const [answers, setAnswers] = React.useState(
        props.wrong_answers.map(answer => ({
            text: answer,
            correct: false
        })).concat({
            text: props.correct_answer,
            correct: true
        }).sort((a, b) => 0.5 - Math.random())
    )

    function choose(i) {
        setAnswers((old) => {
            const updated = [...old]
            updated[i].selected = true
            return (updated)
        })
        props.answer(answers[i].correct);
    }

    const answered = answers.some(a => a.selected)

    return (
        <div className="question">
            <h3>{props.query}</h3>
            <div className="answers">
                {answers.map((a, i) =>
                    <Answer 
                        key={nanoid()}
                        answered={answered}
                        label={a.text}
                        selected={a.selected}
                        choose={() => choose(i)}
                        correct={a.correct}></Answer>)}
            </div>
        </div>
    )
}

export default Question;