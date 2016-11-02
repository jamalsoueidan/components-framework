import * as at from "./action_types"

const addToNavigation = (state = [], action) => {
  if ( action === at.ADD ) {
    return [
      ...state, {name: state.name, link: action.link}
    ]
  }
  return state
}

export default addToNavigation
