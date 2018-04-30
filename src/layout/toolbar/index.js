import { connect } from 'react-redux';

import { uiToggleLeftNavigation } from 'reducers/ui/actions';

import Component from './component';

const mapDispatchToProps = dispatch => ({
  uiToggleLeftNavigation: () => dispatch(uiToggleLeftNavigation()),
});

export default connect(undefined, mapDispatchToProps)(Component);
