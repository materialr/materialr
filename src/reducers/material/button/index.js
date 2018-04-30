import { CHANGE_PROPERTY_VALUE } from '../actions';

const defaultState = {
  compact: false,
  dense: false,
  disabled: false,
  raised: false,
  rippleCentered: false,
  rippleEnabled: false,
  stroked: false,
  unelevated: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROPERTY_VALUE:
      return { ...state, [action.payload.property]: action.payload.value };
    default:
      return state;
  }
};
