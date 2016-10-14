import React from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router';
import { configureRoutes } from './routes'
import { ContentLayout } from './layouts'

const routes = configureRoutes(
  <Route path="/*" component={ContentLayout} />
)

render(routes, document.getElementById("application"));
