import { router5Reducer } from 'redux-router5';

import filter from '../components/todo/filter';
import list from '../components/todo'
import applicationNavigation from '../components/application_navigation'

export default {
  [filter.key]: filter.reducer,
  [list.key]: list.reducer,
  [applicationNavigation.key]: applicationNavigation.reducer,
  router: router5Reducer
}
