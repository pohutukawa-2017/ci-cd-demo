import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app.jsx!'

const main = () => {
  const app = document.createElement('div')

  document.body.appendChild(app)

  ReactDOM.render(<App/>, app)
}

main()
