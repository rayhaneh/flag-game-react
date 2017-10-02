import React, { Component } from 'react'
import FlagQuestion from './FlagQuestion'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      currentCountry: ''
    }
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(data => data.json())
    .then(countries => this.setState({countries, currentCountry: Math.floor(Math.random() * countries.length)}))

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

export default App;
