import React from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router';

import { configureRoutes } from './config/routes'


/*import { Store } from './core/store';
console.log(Store);*/

import { ContentLayout } from './layouts'

const routes = configureRoutes(
  <Route path="/*" component={ContentLayout} />
)
