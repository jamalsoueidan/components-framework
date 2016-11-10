/* http://router5.github.io/docs/configuring-routes.html */

import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';
import { constants } from 'router5';

const routes = [
  { name: 'application', path: '/', children: [{
    name: constants.UNKNOWN_ROUTE,
    params: { path: '/route-not-found' },
    path: '/route-not-found'
  }]},
  { name: 'login',   path: '/login' },
  { name: 'logout',  path: '/logout' },
];

let router;

const configureRoutes = (additionalRoutes) => {
  routes[0].children = routes[0].children.concat(additionalRoutes);
}

const startRoutes = () => {
  if(router !== undefined) return router;
  router = createRouter(routes, {
    defaultRoutes: 'application',
    autoCleanUp: true,
    strictQueryParams: false,
    allowNotFound: true
  })

  router.usePlugin(loggerPlugin);
  router.usePlugin(browserPlugin());

  router.canActivate('application', (router) => (toState, fromState) => {
    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn")
    if (isUserLoggedIn !== "true") {
      router.navigate('login')
      return false;
    } else {
      return true;
    }
  });

  router.canActivate('logout', (router) => (toState, fromState) => {
    localStorage.setItem("isUserLoggedIn", false)
    router.navigate('login')
    return false;
  });

  window.router = router;

  return router;
}

export { configureRoutes as default, startRoutes, router }
