import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from 'reducers/store';

import Analytics from './google-analytics';
import Routes from './routes';
import Scroll from './scroll-restoration';

import './index.scss';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer>
        <Scroll>
          <Analytics>
            <Routes />
          </Analytics>
        </Scroll>
      </AppContainer>
    </ConnectedRouter>
  </Provider>
);
