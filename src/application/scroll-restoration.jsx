import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

class ScrollRestoration extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

ScrollRestoration.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

ScrollRestoration.defaultProps = {
  children: undefined,
  location: {},
};

export default withRouter(ScrollRestoration);
