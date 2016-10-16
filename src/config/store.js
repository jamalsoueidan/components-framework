import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import privateReducers from './reducers';

const extend = (object, source) => {
  Object.keys(source).forEach(key => object[key] = source[key]);
}

const testState = {
  list: [{
    id: 0,
    text: "Jamal",
    completed: false
  }, {
    id: 1,
    text: "Sten",
    completed: true
  }],
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

let store;
const configureStore = (reducers={}) => {
  extend(privateReducers, reducers)
  store = createStore(combineReducers(privateReducers), testState)
}

export { configureStore as default, store }
