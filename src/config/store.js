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
  applicationNavigation: [{
    name: "Home",
    link: "/"
  }, {
    name: "Todo",
    link: "/todos"
  }, {
    name: "Contact us",
    link: "/contact"
  }]
}

const createStoreWithMiddleware = applyMiddleware(router5Middleware(router), logger(), apiMiddleware)(createStore);

let store;
const configureStore = (reducers={}) => {
  if ( store !== undefined ) return store;
  extend(initReducers, reducers)
  store = createStoreWithMiddleware(combineReducers(initReducers), testState)
  return store;
}

export { configureStore as default, store }
