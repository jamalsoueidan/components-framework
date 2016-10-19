import React from 'react'
import { Route } from 'react-router';

import { configureRoutes, configureStore, start } from '../public/KAF.js'

const ContentLayout = () => (<div>content</div>)

configureRoutes(<Route path="/*" component={ContentLayout} />)

/* ************************************
  Configure Store : Here we add Counter reducer as example
************************************ */

const Counter = (state=1, action) => (state);
const reducers = {counter: Counter}


configureStore(reducers)

/* ************************************
  Startup the framework
************************************ */


start('application');
