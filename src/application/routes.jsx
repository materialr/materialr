import React from 'react';
import { Route } from 'react-router';

import Layout from 'layout';
import { root } from 'urls';

export default () => <Route component={Layout} path={root()} />;
