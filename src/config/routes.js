/* http://router5.github.io/docs/configuring-routes.html */

import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';

const routes = [
  { name: 'application',   path: '/' },
  { name: 'todos',         path: '/todos' },
  { name: 'todos.message', path: '/todos/:id' }
];

const router = createRouter(routes, {  defaultRoute: 'application' })
router.usePlugin(loggerPlugin)
router.usePlugin(browserPlugin({useHash: true}));

const defaultRoutes = () => (routes)

const configureRoutes = (additionalRoutes) => {
  if (additionalRoutes !== undefined) {
    router.add(additionalRoutes)
  }
  return router;
}

export { configureRoutes as default, defaultRoutes, router }
