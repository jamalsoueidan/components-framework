import * as at from './action_types';

const add = (text) => ({
  type: at.ADD,
  text
})

const remove = (id) => ({
  type: at.REMOVE,
  id
})

const toggle = (id) => ({
  type: at.TOGGLE,
  id
})

const setFilter = (filter) => ({
  type: at.SET_FILTER,
  filter
})

export { add, remove, toggle, setFilter }
