import React from 'react'

class App extends React.Component {

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    console.log('You clicked on the circle.')
  }

  render () {
    return (
      <svg>
        <circle cx={50} cy={50} r={10} onClick={this.handleClick} />
      </svg>
    )
  }
}

export default App
