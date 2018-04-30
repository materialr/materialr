import PropTypes from 'prop-types';
import React from 'react';
import scss from 'react-syntax-highlighter/languages/prism/scss';
import ReactSyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import prism from 'react-syntax-highlighter/styles/prism/prism';

import './index.scss';

registerLanguage('scss', scss);

const SyntaxHighlighter = ({ children }) => (
  <ReactSyntaxHighlighter className="scss" language="scss" style={prism}>
    {children.trim()}
  </ReactSyntaxHighlighter>
);

SyntaxHighlighter.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SyntaxHighlighter;
