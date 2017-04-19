import React from 'react'

import Circle from './Circle'

class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      circles: [{ cx: 400, cy: 400, r: 256, level: 0, isOn: false }]
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (circleClicked) {
    if (circleClicked.isOn) return

    const { cx, cy, r } = circleClicked
    const level = circleClicked.level + 1

    const newCircle = Object.assign({}, circleClicked)
    newCircle.isOn = true

    const circles = this.state.circles.map(circle => {
      return circleClicked.cx === circle.cx && circleClicked.cy === circle.cy ? newCircle : circle
    })

    circles.push(
      { cx: cx, cy: cy - r, r: r / 2, level, isOn: false }, // north
      { cx: cx, cy: cy + r, r: r / 2, level, isOn: false }, // south
      { cx: cx + r, cy: cy, r: r / 2, level, isOn: false }, // east
      { cx: cx - r, cy: cy, r: r / 2, level, isOn: false }  // west
    )

    this.setState({ circles })
  }

  render () {
    return (
      <svg width='800' height='800'>
        {this.state.circles.map((circle, i) => {
          return <Circle key={i} circle={circle} onClick={this.handleClick} />
        })}
      </svg>
    )
  }
}

export default App
