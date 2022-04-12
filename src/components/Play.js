import React from 'react'
import Question from './Question'
import { nanoid } from "nanoid"
function Play() {

  const [qdata, setQdata] = React.useState([])
  const [score, setScore] = React.useState(
    JSON.parse(localStorage.getItem('score')) ||
    { total: 0, correct: 0 })
  const [gameCount, setGameCount] = React.useState(0)

  function answered(i, success) {
    setQdata((oldQuestions) => {
      const newQuestions = [...oldQuestions]
      newQuestions[i].answered = true;
      newQuestions[i].correct = success;
      return (newQuestions);
    })
    setScore(oldScore => {
      return (
        {
          total: (oldScore.total + 1),
          correct: (oldScore.correct + (success ? 1 : 0))
        }
      )
    })
  }
  React.useEffect(
    () => localStorage.setItem('score', JSON.stringify(score)),
    [score]
  )
  React.useEffect(
    () => {
      fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple&encode=url3986")
        .then(response => response.json())
        .then(json => {
          json.results.forEach(q => q.id = nanoid())
          setQdata(json.results)
          // console.log("Got new questions: ", json.results)
        })
    },
    [gameCount]
  )
  function restart() {
    setGameCount(c => c + 1)
  }
  function questions() {
    return (
      qdata.map((q, i) =>
        <Question
          key={q.id}
          answered={q.answered}
          answer={success => answered(i, success)}
          query={decodeURIComponent(q.question)}
          correct_answer={decodeURIComponent(q.correct_answer)}
          wrong_answers={q.incorrect_answers.map(decodeURIComponent)} />
      )
    )
  }
  const completed = qdata.every(q => q.answered)

  return (
    <div className="Play">
      {questions()}
      <div id="score">
        {score.correct} correct out of {score.total}, or {Math.round(score.correct * 100 / (score.total > 0 ? score.total : 1))}%
      </div>
      <button id="next_button"
        disabled={!completed}
        onClick={restart}>Next</button>

    </div>
  );
}

export default Play;
