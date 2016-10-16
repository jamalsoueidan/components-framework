/*************************************
  Important to load these packages
/*************************************/

import React from 'react'
import { Route } from 'react-router';

/*************************************
  Configure Routes : Here we add custom route place inside the application
*************************************/

import configureRoutes from './config/routes';

const ContentLayout = () => (<div>content</div>)

configureRoutes(<Route path="/*" component={ContentLayout} />)

/*************************************
  Configure Store : Here we add Counter reducer as example
*************************************/

const Counter = (state=1, action) => (state);
const reducers = {counter: Counter}

import configureStore from './config/store'
configureStore(reducers)

/*************************************
  Startup the framework
*************************************/

import start from './config/start'
start('application');
