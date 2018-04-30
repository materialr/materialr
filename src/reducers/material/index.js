import { combineReducers } from 'redux';

import button from './button';
import dialog from './dialog';
import fab from './fab';
import iconToggle from './icon-toggle';

export default combineReducers({ button, dialog, fab, iconToggle });
