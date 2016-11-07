/* ************************************
  Important to load these packages
/************************************ */

import React from 'react';
import { Route } from 'react-router';

import { configureRoutes, configureStore, start } from 'KAF.js'

/* ************************************
  Configure Store : Here we add Counter reducer as example
************************************ */

import reducers from './reducers'
configureStore(reducers)

/* ************************************
  Configure Routes : Here we add custom route place inside the application
************************************ */

configureRoutes({
  name: 'content',
  path: 'content'
})

/* ************************************
  Startup the framework
************************************ */

import { ContentLayout } from './layouts'
start(<ContentLayout />);
