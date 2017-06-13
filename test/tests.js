import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../client/components/App'

test('App contains an <svg> element with the correct size', (t) => {
  // the innerWidth and innerHeight of the window is defined in ./setup-env.js

  const wrapper = shallow(<App />)

  const props = wrapper.find('svg').props()
  t.is(props.width, window.innerWidth)
  t.is(props.height, window.innerHeight)
})

test('App contains an initial circle in the correct location', (t) => {
  const expectedX = 100 // half of width
  const expectedY = 200 // half of height

  const wrapper = shallow(<App width='200' height='400' />)

  const props = wrapper.find('Circle').props()
  t.is(props.circle.cx, expectedX)
  t.is(props.circle.cy, expectedY)
})

test('App adds four circles on mouseover', (t) => {
  const app = mount(<App width='200' height='400' />)

  app.find('circle').first().simulate('mouseover')

  const actual = app.find('circle').length
  t.is(actual, 5, 'added 4 circles')
})

test('App does not add more circles on subsequent clicks', (t) => {
  const app = mount(<App width='200' height='400' />)

  app.find('circle').first().simulate('mouseover')
  app.find('circle').first().simulate('mouseover')

  const actual = app.find('circle').length
  t.is(actual, 5, 'added 4 circles')
})

test('App adds four more circles when subcircle is moused over', (t) => {
  const app = mount(<App width='200' height='400' />)

  app.find('circle').first().simulate('mouseover')
  app.find('circle').last().simulate('mouseover')

  const actual = app.find('circle').length
  t.is(actual, 9, 'added 4 circles')
})

