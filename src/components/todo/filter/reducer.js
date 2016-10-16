import * as at from "./action_types.js"

const visibilityFilter = (state = "all", action) => {
  switch (action.type) {
    case at.SET_VISIBILITY_FILTER:
      return action.filterBy;
    default:
      return state;
  }
}

export default visibilityFilter
