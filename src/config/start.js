import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5';
import { FrameworkLayout, ApplicationLayout } from '../layouts'

import configureRoutes, { startRoutes, router } from './routes'
import configureStore, { startStore, store } from './store'

//handle JSX is empty!
const start = (jsx, tag='application') => {

  // startRoutes
  // startStore
  startStore(startRoutes());

  // render to screen
  router.start((err, state) => {
    render(
      <Provider store={store}>
        <RouterProvider router={ router }>
          <FrameworkLayout>
            <ApplicationLayout>
              {jsx}
            </ApplicationLayout>
          </FrameworkLayout>
        </RouterProvider>
      </Provider>,
      document.getElementById(tag)
    )
  });
}

export default start;
