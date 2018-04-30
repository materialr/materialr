import React from 'react';
import { Route, Switch as ReactRouterSwitch } from 'react-router';

import {
  componentButton,
  componentCard,
  componentCheckbox,
  componentDialog,
  componentDrawer,
  componentFab,
  componentIconToggle,
  componentLayoutGrid,
  componentLinearProgress,
  componentList,
  componentRadio,
  componentSelect,
  componentSnackbar,
  componentSwitch,
  componentTextField,
  componentToolbar,
  componentTypography,
} from 'urls';

import Button from './button';
import Card from './card';
import Checkbox from './checkbox';
import Dialog from './dialog';
import Drawer from './drawer';
import Fab from './fab';
import IconToggle from './icon-toggle';
import LayoutGrid from './layout-grid';
import LinearProgress from './linear-progress';
import List from './list';
import Radio from './radio';
import Select from './select';
import Snackbar from './snackbar';
import Switch from './switch';
import TextField from './text-field';
import Toolbar from './toolbar';
import Typography from './typography';

export default () => (
  <ReactRouterSwitch>
    <Route component={Button} path={componentButton()} />
    <Route component={Card} path={componentCard()} />
    <Route component={Checkbox} path={componentCheckbox()} />
    <Route component={Dialog} path={componentDialog()} />
    <Route component={Drawer} path={componentDrawer()} />
    <Route component={Fab} path={componentFab()} />
    <Route component={IconToggle} path={componentIconToggle()} />
    <Route component={LayoutGrid} path={componentLayoutGrid()} />
    <Route component={LinearProgress} path={componentLinearProgress()} />
    <Route component={List} path={componentList()} />
    <Route component={Radio} path={componentRadio()} />
    <Route component={Select} path={componentSelect()} />
    <Route component={Snackbar} path={componentSnackbar()} />
    <Route component={Switch} path={componentSwitch()} />
    <Route component={TextField} path={componentTextField()} />
    <Route component={Toolbar} path={componentToolbar()} />
    <Route component={Typography} path={componentTypography()} />
  </ReactRouterSwitch>
);
