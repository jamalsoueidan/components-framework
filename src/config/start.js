import React from 'react'
import { render } from 'react-dom'

import configureRoutes, { JSX } from './routes'
import configureStore, { store } from './store'
import { Provider } from 'react-redux'

require("./general.css")

const start = (tag='application') => {
  // configureStore if developer didn't use Redux
  if( store === undefined ) {
    configureStore();
  }

  // configureRoutes if developer didn't add any routes
  if ( JSX === undefined ) {
    configureRoutes();
  }

  // render to screen
  render(<Provider store={store}>{JSX}</Provider>, document.getElementById(tag))
}

export default start;
