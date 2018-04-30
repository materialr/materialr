import { CHANGE_PROPERTY_VALUE } from '../actions';

const defaultState = {
  dark: false,
  rippleCentered: false,
  rippleEnabled: false,
  scrollable: false,
  visible: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROPERTY_VALUE:
      return { ...state, [action.payload.property]: action.payload.value };
    default:
      return state;
  }
};
