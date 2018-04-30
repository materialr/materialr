import { LOCATION_CHANGE } from 'react-router-redux';

import { UI_TOGGLE_LEFT_NAVIGATION, uiToggleLeftNavigation } from './actions';
import reducer, { defaultState } from './index';

const locationChange = () => ({
  type: LOCATION_CHANGE,
});

test('Reducers / UI / default', () => {
  expect(reducer()).toEqual(defaultState);
});

test(`Reducers / UI / ${UI_TOGGLE_LEFT_NAVIGATION} - Activates`, () => {
  const expected = { ...defaultState, leftNavigationActive: true };
  expect(reducer(undefined, uiToggleLeftNavigation())).toEqual(expected);
});

test(`Reducers / UI / ${UI_TOGGLE_LEFT_NAVIGATION} - Deactivates`, () => {
  const initial = { ...defaultState, leftNavigationActive: true };
  expect(reducer(initial, uiToggleLeftNavigation())).toEqual(defaultState);
});

test(`Reducers / UI / ${LOCATION_CHANGE} - Deactivates`, () => {
  const expected = { leftNavigationActive: false };
  expect(reducer(undefined, locationChange())).toEqual(expected);
});

test(`Reducers / UI / ${LOCATION_CHANGE} - Deactivates`, () => {
  const initial = { leftNavigationActive: true };
  const expected = { leftNavigationActive: false };
  expect(reducer(initial, locationChange())).toEqual(expected);
});
