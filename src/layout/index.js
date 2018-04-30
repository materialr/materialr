import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = (state, { location: { pathname } }) => ({
  currentUrl: pathname,
});

export default connect(mapStateToProps)(Component);
