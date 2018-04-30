import { LOCATION_CHANGE } from 'react-router-redux';

import { UI_TOGGLE_LEFT_NAVIGATION } from './actions';

export const defaultState = {
  leftNavigationActive: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case UI_TOGGLE_LEFT_NAVIGATION:
      return {
        ...state,
        leftNavigationActive: !state.leftNavigationActive,
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
