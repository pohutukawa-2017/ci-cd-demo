import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'

test('App contains an <svg> element with the correct size', t => {
  // the width and height of the window is defined in ./setup-env.js

  const wrapper = shallow(<App />)

  const props = wrapper.find('svg').props()
  t.is(props.width, window.width)
  t.is(props.height, window.height)
})

test('App contains an initial circle in the correct location', t => {
  const expectedX = 100 // half of width
  const expectedY = 200 // half of height

  const wrapper = shallow(<App width='200' height='400' />)

  const props = wrapper.find('circle').props()
  t.is(props.cx, expectedX)
  t.is(props.cy, expectedY)
})

test('App adds four circles on mouseover', t => {
  const wrapper = shallow(<App width='200' height='400' />)

  wrapper.find('circle').simulate('mouseover')

  // Finish ...
})

test.todo('App does not add more circles on subsequent clicks')

test.todo('App adds four more circles when subcircle is moused over')
