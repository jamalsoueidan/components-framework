import { combineReducers } from 'redux'

import filter from './todo/filter';
import list from './todo/list'
import navigation from './navigation'

export default combineReducers({
  [filter.key]: filter.reducer,
  [list.key]: list.reducer,
  [navigation.key]: navigation.reducer
})
