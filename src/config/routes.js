/* http://router5.github.io/docs/configuring-routes.html */

import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';
import { constants } from 'router5';

const routes = [
  { name: 'home',    path: '/' },
  { name: 'todos',   path: '/todos' },
  { name: 'contact', path: '/contact' },
  { name: 'login',   path: '/login' },
  { name: 'logout',  path: '/logout' },
  { name: 'my_account', path: '/my_account'}
];

const router = createRouter(routes, {
  defaultRoutes: 'home',
  autoCleanUp: true
})
//router.usePlugin(loggerPlugin);
router.usePlugin(browserPlugin());

router.canActivate('home', (router) => (toState, fromState) => {
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

const defaultRoutes = () => (routes)

const configureRoutes = (additionalRoutes) => {
  if (additionalRoutes !== undefined) {
    router.add(additionalRoutes)
  }
  return router;
}

export { configureRoutes as default, defaultRoutes, router }
