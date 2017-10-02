import React from 'react'
import './FlagAnswer.css'

const FlagAnswer = ({options, answerState, setOptions}) => {
  const answer = (answerState ? 'Correct answer!': 'Wrong Answer!')
  return (
    <div>
      {answer}
      <button onClick={setOptions}>Try Again!</button>
    </div>
  )
}

export default FlagAnswer