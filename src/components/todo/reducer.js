import * as at from './action_types';

let id = 100;

/* Initial State of this Component */
const initialState = {
  items: [],
  filter: 'all'
}

/* The Root Reducer for this component */
const todo = (state = initialState, action) => {
  return {
    filter: filter(state.filter, action),
    items: items(state.items, action)
  }
}

/* Nested Reducer for Items */
const items = (state = [], action) => {
  switch (action.type) {
    case at.ADD:
      return add(state, action.text)
    case at.REMOVE:
      return remove(state, action.id)
    case at.TOGGLE:
      return toggle(state, action.id)
    default:
      return state;
  }
}

/* Nested Reducer for Filter */
const filter = (state = 'all', action) => {
  if(action.type === at.SET_FILTER) {
    return action.filter;
  }
  return state;
}


/* Items Reducer Methods */
const add = (items, text) => {
  id++
  return items.concat(
    { id, text, completed: false}
  )
}

const toggle = (items, id) => (
  items.map((item) => {
    if (item.id !== id) {
      return item;
    }
    return Object.assign({}, item, { completed: !item.completed})
  })
)

const remove = (items, id) => (
  items.filter((item) => {
    return item.id !== id
  })
)



export default todo;
