import React from 'react'

import { getColor } from '../color'

class Circle extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      circle: props.circle,
      children: []
    }

    this.handleClick = this.handleClick.bind(this, props.circle)
  }

  handleClick (eventedCircle) {
    if (eventedCircle.isOn) return

    const children = []
    const { cx, cy, r } = eventedCircle
    const level = eventedCircle.level + 1
    const circle = Object.assign({}, eventedCircle)
    circle.isOn = true

    children.push(
      { cx: cx, cy: cy - r, r: r / 2, level, isOn: false }, // north
      { cx: cx, cy: cy + r, r: r / 2, level, isOn: false }, // south
      { cx: cx + r, cy: cy, r: r / 2, level, isOn: false }, // east
      { cx: cx - r, cy: cy, r: r / 2, level, isOn: false }  // west
    )

    this.setState({ circle, children })
  }

  render () {
    const { cx, cy, r, level } = this.state.circle
    const color = getColor(level)

    return (
      <g>
        <circle cx={cx} cy={cy} r={r} fill={color} onMouseOver={this.handleClick} />
        {this.state.children.map((circle, i) => {
          return <Circle key={i} circle={circle} />
        })}
      </g>
    )
  }
}

export default Circle

