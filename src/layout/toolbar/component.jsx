import Toolbar, { ToolbarIcon, ToolbarRow, ToolbarSection, ToolbarTitle } from '@materialr/toolbar';
import PropTypes from 'prop-types';
import React from 'react';

import './component.scss';

const LayoutToolbar = ({ uiToggleLeftNavigationOpen }) => (
  <Toolbar>
    <ToolbarRow>
      <ToolbarSection alignStart shrinkToFit>
        <ToolbarIcon
          className="toolbar__icon"
          icon="menu"
          onClick={uiToggleLeftNavigationOpen}
          title="Menu"
        />
      </ToolbarSection>
      <ToolbarSection alignStart>
        <img alt="MaterialR" className="toolbar__logo" src="/assets/favicon-inverted.png" />
        <ToolbarTitle>MaterialR</ToolbarTitle>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);

LayoutToolbar.propTypes = {
  uiToggleLeftNavigationOpen: PropTypes.func.isRequired,
};

export default LayoutToolbar;
