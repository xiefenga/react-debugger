## the step to debug react

1. git clone https://github.com/facebook/react.git --depth 1
2. modify files
   - react/packages/react-reconciler/src/Scheduler.js
   - react/packages/shared/ReactSharedInternals.js
   - react/packages/react-reconciler/src/ReactFiberHostConfig.js
3. change react and react-dom default import to `import * as` 

```javascript
/***** react/packages/shared/ReactSharedInternals.js *****/
// import * as React from 'react';
// const ReactSharedInternals =
//   React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
import ReactSharedInternals from '../react/src/ReactSharedInternals'

/***** react/packages/react-reconciler/src/ReactFiberHostConfig.js *****/
// throw new Error('This module must be shimmed by a specific renderer.');
export * from './forks/ReactFiberHostConfig.dom'


/***** react/packages/react-reconciler/src/Scheduler.js *****/
// export const unstable_yieldValue = Scheduler.unstable_yieldValue;
// export const unstable_setDisableYieldValue =
//   Scheduler.unstable_setDisableYieldValue;
export const unstable_yieldValue = () => {};
export const unstable_setDisableYieldValue = () => {};
```

reference: https://www.chenzujie.com/react-source-map
