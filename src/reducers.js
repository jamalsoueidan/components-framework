import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

/*
  Initialize reducer
  One reducer for every component if needed, nested component should NOT have reducer! so todo must be refactored!
 */

import filter from './components/todo/filter';
import list from './components/todo'
import navigation from './components/navigation'

export default combineReducers({
  [filter.key]: filter.reducer,
  [list.key]: list.reducer,
  [navigation.key]: navigation.reducer,
  routing: routerReducer
})
