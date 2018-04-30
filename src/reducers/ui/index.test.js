import { LOCATION_CHANGE } from 'react-router-redux';

import {
  UI_TOGGLE_LEFT_NAVIGATION_CLOSED,
  UI_TOGGLE_LEFT_NAVIGATION_OPEN,
  uiToggleLeftNavigationClosed,
  uiToggleLeftNavigationOpen,
} from './actions';
import reducer, { defaultState } from './index';

const locationChange = () => ({
  type: LOCATION_CHANGE,
});

test('Reducers / UI / default', () => {
  expect(reducer()).toEqual(defaultState);
});

test(`Reducers / UI / ${UI_TOGGLE_LEFT_NAVIGATION_OPEN} - Activates`, () => {
  const expected = { leftNavigationActive: true };
  expect(reducer({}, uiToggleLeftNavigationOpen())).toEqual(expected);
});

test(`Reducers / UI / ${UI_TOGGLE_LEFT_NAVIGATION_CLOSED} - Deactivates`, () => {
  const expected = { leftNavigationActive: false };
  expect(reducer({}, uiToggleLeftNavigationClosed())).toEqual(expected);
});

test(`Reducers / UI / ${LOCATION_CHANGE} - Deactivates`, () => {
  const expected = { leftNavigationActive: false };
  expect(reducer({}, locationChange())).toEqual(expected);
});
