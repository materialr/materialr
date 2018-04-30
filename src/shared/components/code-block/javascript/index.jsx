import PropTypes from 'prop-types';
import React from 'react';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import ReactSyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import prism from 'react-syntax-highlighter/styles/prism/prism';

import './index.scss';

registerLanguage('jsx', jsx);

const SyntaxHighlighter = ({ children }) => (
  <ReactSyntaxHighlighter className="javascript" language="jsx" style={prism}>
    {children.trim()}
  </ReactSyntaxHighlighter>
);

SyntaxHighlighter.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SyntaxHighlighter;
