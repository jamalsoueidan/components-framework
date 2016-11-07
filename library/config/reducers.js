import { router5Reducer } from 'redux-router5';

import applicationNavigation from '../components/application_navigation'
import navigation from '../components/navigation'

/*
** These are our reducers used by our internal framework components.
 */

export default {
  [applicationNavigation.key]: applicationNavigation.reducer,
  [navigation.key]: navigation.reducer,
  router: router5Reducer
}
