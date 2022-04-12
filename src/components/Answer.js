import React from "react"

export default function Answer(props) {
    let classes = "answer"
    if (props.answered) {
        if (!props.correct) {
            if (props.selected) {
                classes += " incorrect"
            }
        } else {
            classes += " correct"
        }
    }

    return (
        <button
            className={classes}
            disabled={props.answered}
            onClick={!props.answered ? props.choose : undefined}>
            {props.label}
        </button>
    )
}