import * as at from './action_types.js'

export const setVisibilityFilter = (filterBy) => ({
  type: at.SET_VISIBILITY_FILTER,
  filterBy
})
