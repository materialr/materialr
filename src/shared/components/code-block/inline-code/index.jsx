import PropTypes from 'prop-types';
import React from 'react';

import './index.scss';

const InlineCode = ({ children }) => <span className="inline-code">{children.trim()}</span>;

InlineCode.propTypes = {
  children: PropTypes.string.isRequired,
};

export default InlineCode;
