### NOT FINISHED
* implement BEM/CSS
* figure out how to handle component state based on url id
* figure out how to split framework from react.js/redux.js

# Build your application

UI component can consist of:
  - Component
  - Data (Redux, Actions)
  - Styling

We organize our components by creating a new folder with all necessary files for every component, you can structure your component as you wish! We do it this way:

Navigation:
- /action_types.js (data)
- /actions.js (data)
- /component.js (component)
- /index.js (exports)
- /reducer.js (data)
- /style.scss (styling)

# Configure framework

Before starting your application, you might want to add your reducer to redux, the way to do it is to configure our store before starting the app.

```javascript
const Counter = (state=1, action) => (state);
const reducers = {counter: Counter}

import configureStore from './config/store'
configureStore(reducers)
```

Our framework only display all around interfaces we call Chrome, the content place is where you place whatever you want depending on the url, to configure routes you use configureRoutes as follows:

```javascript
import configureRoutes from './config/routes';

const ContentLayout = () => (<div>content</div>)

configureRoutes(<Route path="/*" component={ContentLayout} />)
```

After you finished configuring the store and routes, you are ready to start up your application:

```javascript
import start from './config/start'
start('application'); //<div id="application"></div>
```

# Webpack enviroment

We have three enviroment in our code.

### Build framework

To build the framework file, you use "npm run build" which exports the three methods so you can configureStore, configureRoutes and start the framework.

```javascript
npm run build
```

This would export the file ./src/build.js

### Developing framework

While improving the framework, you can start the project:

```javascript
npm run start // npm start
```

This would would execute the file ./src/development.js

### Testing framework

When we wish to test our framework through the ES5 exported code, we can do the following:

1. npm run build
2. copy the exported file inside /src/
3. then use the production.js to import our framework
4. npm run production
