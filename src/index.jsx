import React from 'react';
import { render } from 'react-dom';

import Application from './application';

const root = document.getElementById('root');

render(<Application />, root);

if (module.hot) {
  module.hot.accept();
  module.hot.accept('./application', () => {
    // eslint-disable-next-line global-require
    const NextApplication = require('./application').default;

    render(<NextApplication />, root);
  });
}
