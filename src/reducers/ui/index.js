import { LOCATION_CHANGE } from 'react-router-redux';

import { UI_TOGGLE_LEFT_NAVIGATION, UI_TOOLBAR_FIXED, UI_TOOLBAR_FLEXIBLE } from './actions';

export const defaultState = {
  leftNavigationActive: false,
  toolbarFixed: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case UI_TOGGLE_LEFT_NAVIGATION:
      return {
        ...state,
        leftNavigationActive: !state.leftNavigationActive,
      };
    case UI_TOOLBAR_FIXED:
      return {
        ...state,
        toolbarFixed: true,
        toolbarFlexible: 1,
      };
    case UI_TOOLBAR_FLEXIBLE:
      return {
        ...state,
        toolbarFixed: true,
        toolbarFlexible: 4,
      };
    case LOCATION_CHANGE:
      return {
        ...state,
        leftNavigationActive: false,
        toolbarFixed: false,
        toolbarFlexible: 1,
      };
    default:
      return state;
  }
};
