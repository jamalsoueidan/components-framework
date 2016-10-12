import { createStore } from 'redux'
import reducer from './reducers.js'

const testState = {
  list: [{
    id: 0,
    text: "Jamal",
    completed: false
  }, {
    id: 1,
    text: "Sten",
    completed: true
  }]
}

const configureStore = () => {
  return createStore(reducer, testState)
}

export { configureStore }
