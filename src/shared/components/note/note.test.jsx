import { shallow } from 'enzyme';
import React from 'react';

import Note from './index';

test('Passes through the correct props', () => {
  const CHILDREN = <p>CHILDREN</p>;
  const wrapper = shallow(<Note>{CHILDREN}</Note>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
