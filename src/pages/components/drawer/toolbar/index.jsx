import Toolbar, {
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from '@materialr/toolbar';
import PropTypes from 'prop-types';
import React from 'react';

const DrawerToolbar = ({ hasIcon, onClick }) => (
  <Toolbar onChange={() => {}}>
    <ToolbarRow>
      <ToolbarSection alignStart>
        {hasIcon && <ToolbarIcon icon="menu" onClick={onClick} title="Menu" />}
        <ToolbarTitle>MaterialR</ToolbarTitle>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);

DrawerToolbar.propTypes = {
  hasIcon: PropTypes.bool,
  onClick: PropTypes.func,
};

DrawerToolbar.defaultProps = {
  hasIcon: false,
  onClick: undefined,
};

export default DrawerToolbar;
