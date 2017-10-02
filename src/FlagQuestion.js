import React, { Component } from 'react'



class FlagQuestion extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { flag } = this.props
    return (
      <div>
        <img src={flag} alt='flag' />
      </div>
    )
  }
}


export default FlagQuestion