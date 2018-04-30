import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './index.scss';

const getClassNames = (block, className, column) => classnames({
  showcase: true,
  'showcase--block': block,
  'showcase--column': column,
  [className]: !!className,
});

const Showcase = ({ block, children, className, column }) =>
  <div className={getClassNames(block, className, column)}>{children}</div>;

Showcase.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  column: PropTypes.bool,
};

Showcase.defaultProps = {
  block: false,
  className: undefined,
  column: false,
};

export default Showcase;
