import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from 'reducers/store';

import GoogleAnalytics from './google-analytics';
import Routes from './routes';
import ScrollRestoration from './scroll-restoration';

import './index.scss';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer>
        <ScrollRestoration>
          <GoogleAnalytics>
            <Routes />
          </GoogleAnalytics>
        </ScrollRestoration>
      </AppContainer>
    </ConnectedRouter>
  </Provider>
);
