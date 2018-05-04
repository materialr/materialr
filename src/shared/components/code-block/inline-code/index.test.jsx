import { shallow } from 'enzyme';
import React from 'react';

import InlineCode from './index';

test('Passes through the correct props', () => {
  const CHILDREN = 'CHILDREN ';
  const wrapper = shallow(<InlineCode>{CHILDREN}</InlineCode>, { disableLifecycleMethods: true });
  const expected = CHILDREN.trim();

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
