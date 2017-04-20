import React from 'react'

import Circle from './Circle'

const circle = {
  cx: 400,
  cy: 400,
  r: 256,
  level: 0
}

const App = () => {
  return (
    <svg width='800' height='800'>
      <Circle circle={circle} />
    </svg>
  )
}

export default App
