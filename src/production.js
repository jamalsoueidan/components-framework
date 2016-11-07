/* ************************************
  Important to load these packages
/************************************ */

import React from 'react';
import { Route } from 'react-router';

import { configureRoutes, configureStore, start } from 'KAF.js'

/* ************************************
  Configure Store : Here we add Counter reducer as example
************************************ */

const Counter = (state=1, action) => (state);
configureStore({counter: Counter})

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

const ContentLayout = () => (<div>content</div>)
start(<ContentLayout />);
