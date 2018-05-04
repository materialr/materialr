import { shallow } from 'enzyme';
import React from 'react';

import Markup from './index';

test('Passes through the correct props', () => {
  const CHILDREN = 'CHILDREN ';
  const wrapper = shallow(<Markup>{CHILDREN}</Markup>, { disableLifecycleMethods: true });
  const expected = CHILDREN.trim();

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
