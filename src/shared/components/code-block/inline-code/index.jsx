import PropTypes from 'prop-types';
import React from 'react';

import './index.scss';

const InlineCode = ({ children }) => <span className="inline-code">{children}</span>;

InlineCode.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InlineCode;
