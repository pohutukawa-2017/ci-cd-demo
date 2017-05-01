import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'

test('App contains an <svg> element', t => {
  const wrapper = shallow(<App />)

  t.is(wrapper.find('svg').props().width, window.width)
  t.is(wrapper.find('svg').props().height, window.height)
})

test.todo('App has a base circle of the right size and shape')

test.todo('App adds four circles on mouseover')

test.todo('App does not add more circles on subsequent clicks')

test.todo('App adds four more circles when subcircle is moused over')
