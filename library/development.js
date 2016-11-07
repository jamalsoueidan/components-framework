/* ************************************
  Important to load these packages
/************************************ */

import React from 'react';
import { Route } from 'react-router';

/* ************************************
  Configure Store : Here we add Counter reducer as example
************************************ */

const Counter = (state=1, action) => (state);

import configureStore from './config/store'
configureStore({counter: Counter})

/* ************************************
  Configure Routes : Here we add custom route place inside the application
************************************ */

import configureRoutes from './config/routes';

configureRoutes({
  name: 'content',
  path: 'content'
})

/* ************************************
  Startup the framework
************************************ */

import { connect } from "react-redux"
import { routeNodeSelector } from 'redux-router5';

import { ContentLayout } from './layouts'

import start from './config/start'
start(<ContentLayout />);
