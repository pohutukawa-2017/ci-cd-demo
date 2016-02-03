import React, { Component } from 'react'

class App extends Component {

  handleClick (event) {
    console.log("You clicked on the circle.")
  }

  render () {
    return <svg>
      <circle cx={50} cy={50} r={10} onClick={this.handleClick.bind(this)} />
    </svg>
  }
}

export default App
