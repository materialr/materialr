import { List, ListGroup, ListGroupSubheader, ListItem, ListItemGraphic } from '@materialr/list';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

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
  componentTypography,
  componentToolbar,
  installation,
  root,
} from 'urls';

import './index.scss';

const listItems = [
  { graphic: 'font_download', locale: 'Button', url: componentButton() },
  { graphic: 'settings_system_daydream', locale: 'Card', url: componentCard() },
  { graphic: 'check_box', locale: 'Checkbox', url: componentCheckbox() },
  { graphic: 'chat_bubble_outline', locale: 'Dialog', url: componentDialog() },
  { graphic: 'format_indent_increase', locale: 'Drawer', url: componentDrawer() },
  { graphic: 'add_circle_outline', locale: 'Fab', url: componentFab() },
  { graphic: 'fiber_smart_record', locale: 'Icon toggle', url: componentIconToggle() },
  { graphic: 'view_compact', locale: 'Layout grid', url: componentLayoutGrid() },
  { graphic: 'more_horiz', locale: 'Linear progress', url: componentLinearProgress() },
  { graphic: 'list', locale: 'List', url: componentList() },
  { graphic: 'radio_button_checked', locale: 'Radio', url: componentRadio() },
  { graphic: 'keyboard_arrow_down', locale: 'Select', url: componentSelect() },
  { graphic: 'border_bottom', locale: 'Snackbar', url: componentSnackbar() },
  { graphic: 'power_settings_new', locale: 'Switch', url: componentSwitch() },
  { graphic: 'text_format', locale: 'Text field', url: componentTextField() },
  { graphic: 'text_fields', locale: 'Typography', url: componentTypography() },
  { graphic: 'border_top', locale: 'Toolbar', url: componentToolbar() },
];

const DrawerList = ({ currentUrl }) => (
  <List className="drawer-list">
    <ListItem
      activated={currentUrl === '/'}
      AnchorComponent={Link}
      anchorProps={{ to: root() }}
      key="home"
    >
      Home
    </ListItem>
    <ListItem
      activated={currentUrl === '/installation'}
      AnchorComponent={Link}
      anchorProps={{ to: installation() }}
      key="installation"
    >
      Installation
    </ListItem>
    <ListGroup>
      <ListGroupSubheader title="Components" />
      {listItems.map(({ graphic, locale, url }, key) => (
        <ListItem
          activated={url === currentUrl}
          AnchorComponent={Link}
          anchorProps={{ to: url }}
          // eslint-disable-next-line react/no-array-index-key
          key={key}
        >
          {graphic && <ListItemGraphic icon={graphic} />}
          {locale}
        </ListItem>
      ))}
    </ListGroup>
  </List>
);

DrawerList.propTypes = {
  currentUrl: PropTypes.string.isRequired,
};

export default DrawerList;
