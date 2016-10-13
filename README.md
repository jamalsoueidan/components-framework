### NOT FINISHED
* implement BEM/CSS 
* figure out how to handle component state based on url id


# Build your application or framework using components!

UI component can consist of:
  - Component
  - Data (Redux, Actions)
  - Styling

The way to create a new UI Component is to create a new folder inside components:

Navigation:
- /action_types.js
- /actions.js
- /component.js
- /index.js
- /reducer.js

To render the new component you must place it somewhere in the Application component, if you are going to use any data inside the component, you must connect the component with redux, the way to do it is to create index.js file with all the necessary definitions.

```javascript
import * as actions from './actions';
import * as component from './component';
import reducer from './reducer';

// If you are going to use reducer, then you must specify a key for your component!
const key = "filterBy";

// Here we export all files
export default { actions, component, reducer, key };
```

