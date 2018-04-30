import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

export class GoogleAnalytics extends React.Component {
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

GoogleAnalytics.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

GoogleAnalytics.defaultProps = {
  children: null,
  location: {},
};

export default withRouter(GoogleAnalytics);
