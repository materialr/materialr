import { Body1 } from '@materialr/typography';
import PropTypes from 'prop-types';
import React from 'react';

import './index.scss';

const Note = ({ children }) => <Body1 className="note">{children}</Body1>;

Note.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Note;
