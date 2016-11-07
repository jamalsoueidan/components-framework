import filter from './components/todo/filter';
import list from './components/todo'

export default {
  [filter.key]: filter.reducer,
  [list.key]: list.reducer
}
