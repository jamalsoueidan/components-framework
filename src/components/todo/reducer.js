import * as at from "./action_types.js"

const listReducer = (state = [], action) => {
  switch (action.type) {
    case at.ADD:
      return [
        ...state, {id: state.length, text: action.text}
      ]
    case at.REMOVE:
      return state.filter(item => item.id !== action.id)
    case at.COMPLETE:
      return state.map(item => item.id === action.id ? { ...item, completed: !item.completed } : item )
    default:
      return state;
  }
}

export default listReducer
