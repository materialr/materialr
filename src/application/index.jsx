import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from 'reducers/store';

import Routes from './routes';

import './index.scss';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer>
        <Routes />
      </AppContainer>
    </ConnectedRouter>
  </Provider>
);
