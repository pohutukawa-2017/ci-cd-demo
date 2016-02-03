import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { expect } from 'chai'
import { beforeEach, describe, it } from 'mocha'

import App from '../src/components/app.jsx'

const {
  isCompositeComponent,
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} = TestUtils

describe('App', () => {
  let app

  beforeEach(() => {
    app = renderIntoDocument(<App/>)
  })

  it('is a composite component', () => {
    expect(isCompositeComponent(app)).to.be.ok
  })

  it('has a base circle of the right size and shape', () => {
    const circles = scryRenderedDOMComponentsWithTag(app, 'circle')

    expect(circles.length).to.equal(1)

    const circle = circles[0]

    expect(circle.getAttribute('r')).to.equal('256')
    expect(circle.getAttribute('cx')).to.equal('400')
    expect(circle.getAttribute('cy')).to.equal('400')
    expect(circle.getAttribute('class')).to.equal('r256')
  })

  it('adds four circles on click', () => {
    const circle = scryRenderedDOMComponentsWithTag(app, 'circle')[0]

    Simulate.click(circle)

    const circles = scryRenderedDOMComponentsWithTag(app, 'circle')

    expect(circles.length).to.equal(5)
  })

  it('does not add more circles on subsequent clicks', () => {
    const circle = scryRenderedDOMComponentsWithTag(app, 'circle')[0]

    Simulate.click(circle)
    Simulate.click(circle)

    const circles = scryRenderedDOMComponentsWithTag(app, 'circle')

    expect(circles.length).to.equal(5)
  })

  it('adds four more circles when subcircle clicked', () => {
    Simulate.click(scryRenderedDOMComponentsWithTag(app, 'circle')[0])

    const circle = scryRenderedDOMComponentsWithClass(app, 'r128')[0]

    Simulate.click(circle)

    const circles = scryRenderedDOMComponentsWithTag(app, 'circle')

    expect(circles.length).to.equal(9)
  })
})
