import PropTypes from 'prop-types';
import React from 'react';
import bash from 'react-syntax-highlighter/languages/hljs/bash';
import ReactSyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/light';
import zenburn from 'react-syntax-highlighter/styles/hljs/zenburn';

registerLanguage('bash', bash);

const SyntaxHighlighter = ({ children }) => (
  <ReactSyntaxHighlighter language="bash" style={zenburn}>
    {children.trim()}
  </ReactSyntaxHighlighter>
);

SyntaxHighlighter.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SyntaxHighlighter;
