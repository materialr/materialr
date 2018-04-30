import { connect } from 'react-redux';

import { uiToggleLeftNavigationOpen } from 'reducers/ui/actions';

import Component from './component';

const mapDispatchToProps = dispatch => ({
  uiToggleLeftNavigationOpen: () => dispatch(uiToggleLeftNavigationOpen()),
});

export default connect(undefined, mapDispatchToProps)(Component);
