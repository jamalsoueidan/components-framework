import { createStore, combineReducers, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import { routerReducer } from 'react-router-redux'

import initReducers from './reducers';

const extend = (object, source) => {
  Object.keys(source).forEach(key => object[key] = source[key]);
}

const testState = {
  navigation: [{
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

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

let store;
const configureStore = (reducers={}) => {
  if ( store !== undefined ) return store;
  extend(initReducers, reducers)
  return store = createStoreWithMiddleware(combineReducers(initReducers), testState)
}

export { configureStore as default, store }
