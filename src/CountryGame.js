import React, { Component } from 'react'
import FlagQuestion from './FlagQuestion'
import './CountryGame.css'

class CountryGame extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      options: [],
      correctOption: undefined,
      questionState: undefined
    }
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countries => {
      this.setState({countries})
      this.setState(this.getOptions(countries.length))
    })
    .catch(console.warn)

  }


  getOptions(countryNum) {
    const options = []
    while (options.length < 4) {
      const n = Math.floor(Math.random() * countryNum)
      if (options.indexOf(n) === -1) {
        options.push(n)
        console.log(options)
      }
    }
    const correctOption = Math.floor(Math.random() * 4)
    return {options, correctOption}
  }



  render() {
    let views = <div>Loading ...</div>
    const { countries, currentCountry } = this.state
    if (currentCountry) {
      views = <FlagQuestion flag={countries[currentCountry].flag}/>
    }
    return (
      <div className="App">
        {views}
      </div>
    );
  }
}

export default CountryGame
