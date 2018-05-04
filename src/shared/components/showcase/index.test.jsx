import { shallow } from 'enzyme';
import React from 'react';

import Showcase from './index';

const CHILDREN = <p>CHILDREN</p>;

test('Renders the default classNames', () => {
  const wrapper = shallow(<Showcase>{CHILDREN}</Showcase>, { disableLifecycleMethods: true });
  const expected = 'showcase';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders a display block showcase', () => {
  const wrapper = shallow(<Showcase block>{CHILDREN}</Showcase>, { disableLifecycleMethods: true });
  const expected = 'showcase showcase--block';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders a column layout showcase', () => {
  const wrapper = shallow(
    <Showcase column>{CHILDREN}</Showcase>,
    { disableLifecycleMethods: true },
  );
  const expected = 'showcase showcase--column';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Passes through the correct props', () => {
  const wrapper = shallow(<Showcase>{CHILDREN}</Showcase>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
