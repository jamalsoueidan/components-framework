import * as at from './action_types';
import { CALL_API } from 'redux-api-middleware';

/*
  Api, other components must understand what every action does!
 */
const add = (text) => ({
  type: at.ADD,
  text
})

const remove = (id) => ({
  type: at.REMOVE,
  id
})

const toggle = (id) => ({
  type: at.COMPLETE,
  id
})

const fetch = () =>  ({
  [CALL_API]: {
    endpoint: 'http://localhost:8080/public/todos.json',
    method: 'GET',
    types: [at.LOADING, at.SUCCESS, at.FAILURE]
  }
})

export { add, remove, toggle, fetch }
