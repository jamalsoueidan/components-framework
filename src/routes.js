// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
// https://github.com/reactjs/react-router-tutorial/tree/master/lessons
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import { configureStore } from './store'
import { ApplicationLayout } from './layouts'

const store = configureStore()

const configureRoutes = (routes) => (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={ApplicationLayout}>
          {routes}
        </Route>
      </Router>
    </Provider>
)

export { configureRoutes }
