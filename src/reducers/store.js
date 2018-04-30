import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './index';

export const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware)));
if (module.hot) {
  module.hot.accept('./index', () => {
    // eslint-disable-next-line global-require
    const nextReducers = require('./index');

    store.replaceReducer(nextReducers);
  });
}

export default store;
