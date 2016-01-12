# Enspiraled

Let's learn some basic React using JavaScript 2015-style classes and a few other JS2015 tricks.

For this challenge, you'll be making a basic fractal generator that starts with a single large circle. Click on the circle and four new circles of half the original circle's radius will appear at the cardinal compass points, N, E, S, and W. Click on any of those circles and the process is repeated.

Here is the base state at load:

![Base case](./images/base-circle.png)

And here is what it should look like after a few clicks:

![Enspiraled](./images/enspiral.png)

Colors are unimportant; choose your own. The initial size of the canvas should be 800 by 800, and the radius of the initial, centered circle should be 256 pixels, if you want it to look like the above images. Or choose your own.

Here you'll find a JSPM app all set up and ready to get started. Just clone this repo, then run:

```sh
npm install
jspm install
jspm-server
```

You may need to install `jspm` and `jspm-server` locally. Make sure you're running a recent version of node.

From the `index.html` file you'll see that we load a file called `main.jsx`. Note the `!`:

```html
<script>
  System.import('app/main.jsx!')
</script>
```

This tells JSPM to transpile the JSX using the JSX loader. Don't forget the `!`!

The `app/main.jsx` file looks like this:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app.jsx!'

const main = () => {
  const app = document.createElement('div')

  document.body.appendChild(app)

  ReactDOM.render(<App/>, app)
}

main()
```

This imports React and the ReactDOM. The latter is used to render the application into a `<div>` element appended to the body. We create a `main` function here that renders the app, and then call it immediately. Note that we import our App component and then use it as if it were an HTML element: `<App/>` (that closing slash is important&mdash;use it on any JSX tag that doesn't have a closing tag).

Here is the `app/components/app.jsx` file:

```jsx
import React, { Component } from 'react'

class App extends Component {

  render () {
    return <svg>
      <circle cx={50} cy={50} r={10} fill="red" />
    </svg>
  }
}

export default App
```

We import `Component` from React using destructuring assignment (Google it), then we extend the React Component to create our own App component. This gives us React superpowers. Then we write our own `render` method. React will call this automatically whenever it wants to render this component, and whatever we return will be processed into HTML and rendered to the window.

Here we're rendering some SVG (Scalable Vector Graphics). It draws a circle with the center 50px from the top and 50px from the left of the parent element. The circle has a radius of 10px and is filled with red.

Your job is to create a new Circle component in `app/components/circle.jsx` that wraps this SVG element and adds some new features. The most important of these is an onClick property. You'll want to pass a click handling method into your Circles and then pass the center and radius back to the App, which will use that information to add the four new circles *if they don't already exist*.

We've also included some tests. You can see them in `test/tests.js` and you can run them by running:

```sh
jspm-server
```

And then going to [http://localhost:8080/test.html](http://localhost:8080/test.html). You should see some failing tests.

Your task: make these tests pass and create an output that looks something like the ones in the images above.

