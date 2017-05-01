require('babel-register')

const { JSDOM } = require('jsdom')

global.window = new JSDOM('<body></body>', {
  beforeParse (window) {
    window.width = 200
    window.height = 400
  }
})
global.document = global.window.document
global.navigator = global.window.navigator

