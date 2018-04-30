import { mount, shallow } from 'enzyme';
import React from 'react';

import { GoogleAnalytics } from './google-analytics';

test('Renders children as-is', () => {
  const CHILDREN = <p>CHILDREN</p>;
  const wrapper = shallow(
    <GoogleAnalytics>{CHILDREN}</GoogleAnalytics>,
    { disableLifecycleMethods: true },
  );
  const expected = true;

  const actual = wrapper.equals(CHILDREN);

  expect(actual).toBe(expected);
});

test('Calls the global \'gtag\' method with the new path if it changes', () => {
  const PATHNAME = 'PATHNAME';
  const gtag = jest.fn();
  global.gtag = gtag;
  const wrapper = mount(<GoogleAnalytics />);
  const expectedOne = 'config';
  const expectedTwo = 'UA-118471141-1';
  const expectedThree = { page_path: PATHNAME };

  wrapper.setProps({ location: { pathname: PATHNAME } });
  const mockCallProps = gtag.mock.calls[0];
  const actualOne = mockCallProps[0];
  const actualTwo = mockCallProps[1];
  const actualThree = mockCallProps[2];

  expect(actualOne).toBe(expectedOne);
  expect(actualTwo).toBe(expectedTwo);
  expect(actualThree).toEqual(expectedThree);
});

test('Does not call the global \'gtag\' method if the path does not change', () => {
  const PATHNAME = 'PATHNAME';
  const gtag = jest.fn();
  global.gtag = gtag;
  const location = { pathname: PATHNAME };
  const wrapper = mount(<GoogleAnalytics location={location} />);
  const expected = 0;

  wrapper.setProps({ location });
  const actual = gtag.mock.calls.length;

  expect(actual).toBe(expected);
});
