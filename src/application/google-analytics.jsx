import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

class ScrollRestoration extends React.Component {
  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    if (pathname !== prevProps.location.pathname) {
      window.gtag('config', 'UA-118471141-1', { page_path: pathname });
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
