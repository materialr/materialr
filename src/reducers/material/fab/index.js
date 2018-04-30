import { CHANGE_PROPERTY_VALUE } from '../actions';

const defaultState = {
  exited: false,
  mini: false,
  rippleCentered: false,
  rippleEnabled: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROPERTY_VALUE:
      return { ...state, [action.payload.property]: action.payload.value };
    default:
      return state;
  }
};
