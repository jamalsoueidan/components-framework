import { createStore, combineReducers, applyMiddleware } from 'redux'
import { router5Middleware, router5Reducer } from 'redux-router5';
import { apiMiddleware } from 'redux-api-middleware';

import logger from 'redux-logger';
import initReducers from './reducers';

const extend = (object, source) => {
  Object.keys(source).forEach(key => object[key] = source[key]);
}

const testState = {
  navigation: [{
    name: "Home",
    link: "application"
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

let store;
const configureStore = (reducers={}) => {
  extend(initReducers, reducers)
}

// except the router instance
const startStore = (router) => {
  if ( store !== undefined ) return store;
  const createStoreWithMiddleware = applyMiddleware(router5Middleware(router), apiMiddleware)(createStore);
  store = createStoreWithMiddleware(combineReducers(initReducers), testState)
  window.store = store;
  return store;
}

export { configureStore as default, startStore, store }
