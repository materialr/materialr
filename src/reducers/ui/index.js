import { LOCATION_CHANGE } from 'react-router-redux';

import { UI_TOGGLE_LEFT_NAVIGATION_CLOSED, UI_TOGGLE_LEFT_NAVIGATION_OPEN } from './actions';

export const defaultState = {
  leftNavigationActive: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case UI_TOGGLE_LEFT_NAVIGATION_CLOSED:
      return {
        ...state,
        leftNavigationActive: false,
      };
    case UI_TOGGLE_LEFT_NAVIGATION_OPEN:
      return {
        ...state,
        leftNavigationActive: true,
      };
    case LOCATION_CHANGE:
      return {
        ...state,
        leftNavigationActive: false,
      };
    default:
      return state;
  }
};
