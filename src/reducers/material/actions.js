export const CHANGE_PROPERTY_VALUE = 'CHANGE_PROPERTY_VALUE';

export const changePropertyValue = (property, value) => ({
  payload: { property, value },
  type: CHANGE_PROPERTY_VALUE,
});
