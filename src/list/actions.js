import * as at from './action_types';

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

export { add, remove, toggle }
