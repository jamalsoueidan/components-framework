### NOT FINISHED
* implement BEM/CSS
* figure out how to handle component state based on url id


# Build your application or framework using components!

UI component can consist of:
  - Component
  - Data (Redux, Actions)
  - Styling

The way to create a new UI Component is to create a new folder inside components with the following.

Navigation:
- /action_types.js (data)
- /actions.js (data)
- /component.js (component)
- /index.js (data)
- /reducer.js (data)

If you want to add your reducer to redux, you must declare index.js file with all the necessary definitions.

```javascript
import reducer from './reducer';

// If you are going to use reducer, then you must specify a key for your component!
const key = "filterBy";

// Here we export all files
export default { reducer, key };
```

Also you should add your component to /components/index.js.

```javascript
import Todo from './todo/component'
import Navigation from './navigation/component'
import Counter from './counter/component'

export { Todo, Navigation, Counter };
```

Then you are done!

# Framework initialization

1. Reducer
2. createStore
3. Layouts/Components
4. Router
