/* ************************************
  Important to load these packages
/************************************ */

import React from 'react';
import { Route } from 'react-router';

import { configureRoutes, configureStore, start } from 'KAF.js'

/* ************************************
  Configure Routes : Here we add custom route place inside the application
************************************ */

import { constants } from 'router5';

configureRoutes([{
  name: "todos",
  path: "todos"}
])

/* ************************************
  Configure Store : Here we add Counter reducer as example
************************************ */

import reducers from './reducers'
configureStore(reducers, {
  todo: {
    filter: 'all',
    items: []
  }
})


/* ************************************
  Startup the framework
************************************ */

import { ContentLayout } from './layouts'
start(<ContentLayout />);
