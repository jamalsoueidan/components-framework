import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore } from './store'
import Application from './application'

const store = configureStore()

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('application')
)
