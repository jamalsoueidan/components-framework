import React from 'react'
import { ContentLayout, TodoLayout, ContactLayout } from './layouts/content_layout'
import { Route } from 'react-router';

import { boot } from './routes'
boot('application',
  <Route path="/*" component={ContentLayout}>
    <Route path="/todos" component={TodoLayout} />
    <Route path="/contact" component={ContactLayout} />
  </Route>
)
