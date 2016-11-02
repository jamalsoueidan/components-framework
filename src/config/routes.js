/* http://router5.github.io/docs/configuring-routes.html */

import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';
import { constants } from 'router5';

const routes = [
  { name: 'home',    path: '/' },
  { name: 'todos',   path: '/todos' },
  { name: 'contact', path: '/contact' }
];

const router = createRouter(routes, {
  defaultRoutes: 'home'
})
router.usePlugin(loggerPlugin)
router.usePlugin(browserPlugin());

const defaultRoutes = () => (routes)

const configureRoutes = (additionalRoutes) => {
  if (additionalRoutes !== undefined) {
    router.add(additionalRoutes)
  }
  return router;
}

export { configureRoutes as default, defaultRoutes, router }
