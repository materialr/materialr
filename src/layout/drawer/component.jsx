import { PermanentDrawer, TemporaryDrawer } from '@materialr/drawer';
import PropTypes from 'prop-types';
import React from 'react';

import List from './list';

import './component.scss';

const Drawer = ({ currentUrl, leftNavigationActive, uiToggleLeftNavigationClosed }) => (
  <React.Fragment>
    <PermanentDrawer className="drawer-permanent">
      <List currentUrl={currentUrl} />
    </PermanentDrawer>
    <TemporaryDrawer
      className="drawer-temporary"
      onClose={uiToggleLeftNavigationClosed}
      open={leftNavigationActive}
    >
      <List currentUrl={currentUrl} />
    </TemporaryDrawer>
  </React.Fragment>
);

Drawer.propTypes = {
  currentUrl: PropTypes.string.isRequired,
  leftNavigationActive: PropTypes.bool,
  uiToggleLeftNavigationClosed: PropTypes.func.isRequired,
};

Drawer.defaultProps = {
  leftNavigationActive: false,
};

export default Drawer;
