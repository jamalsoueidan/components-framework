import configureRoutes from './config/routes';
import configureStore from './config/store'
import start from './config/start'

const getStore = () => {
  return configureStore();
}

export { configureRoutes, configureStore, start, getStore }
