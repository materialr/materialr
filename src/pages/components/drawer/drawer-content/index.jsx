import { Header, ToolbarSpacer } from '@materialr/drawer';
import { List, ListItem, ListItemGraphic } from '@materialr/list';
import PropTypes from 'prop-types';
import React from 'react';

const DrawerContent = ({ className, hasHeader, hasToolbarSpacer }) => (
  <React.Fragment>
    {hasHeader && <Header>Header conent</Header>}
    {hasToolbarSpacer && <ToolbarSpacer />}
    <List className={className}>
      <ListItem activated><ListItemGraphic icon="format_bold" /> Bold</ListItem>
      <ListItem><ListItemGraphic icon="format_italic" /> Italic</ListItem>
      <ListItem><ListItemGraphic icon="format_underlined" /> Underlined</ListItem>
    </List>
  </React.Fragment>
);

DrawerContent.propTypes = {
  className: PropTypes.string,
  hasHeader: PropTypes.bool,
  hasToolbarSpacer: PropTypes.bool,
};

DrawerContent.defaultProps = {
  className: undefined,
  hasHeader: false,
  hasToolbarSpacer: false,
};

export default DrawerContent;
