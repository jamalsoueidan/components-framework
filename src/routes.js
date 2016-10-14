// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
//
import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { ApplicationLayout } from './layouts'
import { configureStore } from './store'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const boot = (container, customRoute) => {
  console.log(customRoute)
  return render(<Provider store={store}>
      <Router history={history}>
        <Route path="/" component={ApplicationLayout}>
          {customRoute}
        </Route>
      </Router>
    </Provider>, document.getElementById(container))
}

export { boot }
