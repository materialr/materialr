import { mount, shallow } from 'enzyme';
import React from 'react';

import { ScrollRestoration } from './scroll-restoration';

test('Renders children as-is', () => {
  const CHILDREN = <p>CHILDREN</p>;
  const wrapper = shallow(
    <ScrollRestoration>{CHILDREN}</ScrollRestoration>,
    { disableLifecycleMethods: true },
  );
  const expected = true;

  const actual = wrapper.equals(CHILDREN);

  expect(actual).toBe(expected);
});

test('Calls the global \'scrollTo\' method with the new path if it changes', () => {
  const PATHNAME = 'PATHNAME';
  const scrollTo = jest.fn();
  global.scrollTo = scrollTo;
  const wrapper = mount(<ScrollRestoration />);
  const expectedOne = 0;
  const expectedTwo = 0;

  wrapper.setProps({ location: { pathname: PATHNAME } });
  const mockCallProps = scrollTo.mock.calls[0];
  const actualOne = mockCallProps[0];
  const actualTwo = mockCallProps[1];

  expect(actualOne).toBe(expectedOne);
  expect(actualTwo).toBe(expectedTwo);
});

test('Does not call the global \'scrollTo\' method if the path does not change', () => {
  const PATHNAME = 'PATHNAME';
  const scrollTo = jest.fn();
  global.scrollTo = scrollTo;
  const location = { pathname: PATHNAME };
  const wrapper = mount(<ScrollRestoration location={location} />);
  const expected = 0;

  wrapper.setProps({ location });
  const actual = scrollTo.mock.calls.length;

  expect(actual).toBe(expected);
});
