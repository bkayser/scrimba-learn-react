import React from "react";

function Question(props) {
    return (
        <div className="question">
            <h3>How would one say goodbye in Spanish?</h3>
            <div className="answers">
                <button>One</button>
                <button>Two</button>
                <button>Three</button>
                <button>Four</button>
            </div>
        </div>
    )
}

export default Question;