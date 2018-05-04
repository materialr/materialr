import { shallow } from 'enzyme';
import React from 'react';

import Bash from './index';

test('Passes through the correct props', () => {
  const CHILDREN = 'CHILDREN ';
  const wrapper = shallow(<Bash>{CHILDREN}</Bash>, { disableLifecycleMethods: true });
  const expected = CHILDREN.trim();

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
