/* http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/ */
/* https://github.com/reactjs/react-router-tutorial/tree/master/lessons */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import { ApplicationLayout, ContactLayout, LoginLayout } from '../layouts'

const userIsInATeam = (nextState, replace, callback) => {
  callback();
}

let JSX;
const configureRoutes = (routes) => {
  JSX = (
      <Router history={browserHistory}>
        <Route path="/login" component={LoginLayout} />
        <Route path="/" component={ApplicationLayout} onEnter={userIsInATeam}>
          <Route path="contact" component={ContactLayout} />
          {routes}
        </Route>
      </Router>)
}

export { configureRoutes as default, JSX }
