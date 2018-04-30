import React from 'react';
import { Route, Switch } from 'react-router';

import Components from 'pages/components';
import Home from 'pages/home';
import Installation from 'pages/installation';
import { components, installation, root } from 'urls';

export default () => (
  <Switch>
    <Route component={Home} exact path={root()} />
    <Route component={Installation} path={installation()} />
    <Route component={Components} path={components()} />
  </Switch>
);
