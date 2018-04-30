import { connect } from 'react-redux';

import { uiToggleLeftNavigationClosed } from 'reducers/ui/actions';

import Component from './component';

const mapStateToProps = ({ app: { ui: { leftNavigationActive } } }, { currentUrl }) => ({
  currentUrl,
  leftNavigationActive,
});

const mapDispatchToProps = dispatch => ({
  uiToggleLeftNavigationClosed: () => dispatch(uiToggleLeftNavigationClosed()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
