import { createStore, combineReducers, applyMiddleware } from 'redux'
import { router5Middleware, router5Reducer } from 'redux-router5';
import { apiMiddleware } from 'redux-api-middleware';
import { router } from './routes'

import logger from 'redux-logger';
import initReducers from './reducers';

const extend = (object, source) => {
  Object.keys(source).forEach(key => object[key] = source[key]);
}

const testState = {
  navigation: [{
    name: "Home",
    link: "application.home"
  }, {
    name: "Todo",
    link: "application.todos"
  }, {
    name: "Contact us",
    link: "application.contact"
  }, {
    name: "Log out",
    link: "logout"
  }]
}

const createStoreWithMiddleware = applyMiddleware(router5Middleware(router), apiMiddleware)(createStore);

let store;
const configureStore = (reducers={}) => {
  if ( store !== undefined ) return store;
  extend(initReducers, reducers)
  store = createStoreWithMiddleware(combineReducers(initReducers), testState)
  window.store = store;
  return store;
}

export { configureStore as default, store }
