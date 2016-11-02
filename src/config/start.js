import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5';
import { ApplicationLayout } from '../layouts'

import configureRoutes, { router } from './routes'
import configureStore, { store } from './store'

//handle JSX is empty! 
const start = (jsx, tag='application') => {
  // configureStore if developer didn't use Redux
  if( store === undefined ) {
    configureStore();
  }

  // configureRoutes if developer didn't add any routes
  if ( router === undefined ) {
    configureRoutes();
  }

  // render to screen
  router.start((err, state) => {
    render(
      <Provider store={store}>
        <RouterProvider router={ router }>
          <ApplicationLayout>
            {jsx}
          </ApplicationLayout>
        </RouterProvider>
      </Provider>,
      document.getElementById(tag)
    )
  });
}

export default start;
