import { combineReducers } from 'redux'

import filter from './components/filter';
import list from './components/list'

export default combineReducers({
  [filter.key]: filter.reducer,
  [list.key]: list.reducer
})
