require('babel-register')

const { JSDOM } = require('jsdom')

global.window = new JSDOM('<body></body>', {
  beforeParse (window) {
    window.width = 200
    window.height = 400
  }
})

