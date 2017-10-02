import React, { Component } from 'react'
import FlagQuestion from './FlagQuestion'
import FlagAnswer from './FlagAnswer'
import './CountryGame.css'

class CountryGame extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      options: [],
      correctOption: undefined,
      questionState: 'loading',
      answerState: undefined,
    }

    this.setOptions = this.setOptions.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countries => {
      this.setState({countries})
      this.setOptions(countries.length)
    })
    .catch(console.warn)

  }


  setOptions() {
    const options = []
    while (options.length < 4) {
      const n = Math.floor(Math.random() * this.state.countries.length)
      if (options.indexOf(n) === -1) {
        options.push(n)
        console.log(options)
      }
    }
    const correctOption = options[Math.floor(Math.random() * 4)]
    this.setState({options, correctOption, questionState: true, answerState: undefined})
  }


  checkAnswer(event) {
    event.preventDefault()
    this.setState({
      questionState: false,
      answerState: (Number(event.target.answer.value) === this.state.correctOption)
    }, () => console.log(this.state.answerState))
  }

  render() {
    let views = <div>Loading ...</div>
    const { countries, options, correctOption, questionState, answerState } = this.state
    return (
      <div className="App">
        {(questionState !== 'loading' ?
          <FlagQuestion
            countries={countries}
            options={options}
            correctOption={correctOption}
            questionState={questionState}
            checkAnswer={this.checkAnswer}
          />
        : views)}
        {(!questionState ?
          <FlagAnswer
            options={options}
            answerState={answerState}
            setOptions={this.setOptions}
          />
        : '')}
      </div>
    );
  }
}

export default CountryGame
