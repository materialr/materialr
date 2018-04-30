import PropTypes from 'prop-types';
import React from 'react';
import markup from 'react-syntax-highlighter/languages/prism/markup';
import ReactSyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import prism from 'react-syntax-highlighter/styles/prism/prism';

import './index.scss';

registerLanguage('markup', markup);

const SyntaxHighlighter = ({ children }) => (
  <ReactSyntaxHighlighter className="markup" language="markup" style={prism}>
    {children.trim()}
  </ReactSyntaxHighlighter>
);

SyntaxHighlighter.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SyntaxHighlighter;
