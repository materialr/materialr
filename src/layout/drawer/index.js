import { connect } from 'react-redux';

import { uiToggleLeftNavigation } from 'reducers/ui/actions';

import Component from './component';

const mapStateToProps = ({ app: { ui: { leftNavigationActive } } }, { currentUrl }) => ({
  currentUrl,
  leftNavigationActive,
});

const mapDispatchToProps = dispatch => ({
  uiToggleLeftNavigation: () => dispatch(uiToggleLeftNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
