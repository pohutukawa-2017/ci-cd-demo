import React from 'react'

import { getColor } from '../color'

const Circle = props => {
  const { cx, cy, r, level } = props.circle
  const color = getColor(level)

  return (
    <circle cx={cx} cy={cy} r={r} fill={color} onMouseOver={() => props.onClick(props.circle)} />
  )
}

export default Circle

