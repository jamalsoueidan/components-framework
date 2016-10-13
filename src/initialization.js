import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { Router, Route, browserHistory   } from 'react-router';
import { ApplicationLayout, TodoLayout } from './layouts'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ApplicationLayout}>
        <Route path="/todos" component={TodoLayout} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('application')
)
