import React from 'react'
import './FlagQuestion.css'


const FlagQuestion = ({countries, options, correctOption, checkAnswer, questionState}) => {
  const choices = options.map((option) => (
    <label key={option}>
      <input type="radio" value={option} name='answer'/>
      {countries[option].name}
    </label>
  ))

  return (
    <div>
      <img src={countries[correctOption].flag} alt='flag' />
      {questionState ?
      <form onSubmit={checkAnswer}>
        {choices}
        <button>CHECK</button>
      </form>
      : '' }
    </div>
  )
}


export default FlagQuestion