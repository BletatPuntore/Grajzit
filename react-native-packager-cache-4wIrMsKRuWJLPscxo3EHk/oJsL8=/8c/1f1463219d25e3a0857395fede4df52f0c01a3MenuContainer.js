Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _actions = require('@redux/user/actions');

var UserActions = babelHelpers.interopRequireWildcard(_actions);

var _MenuView = require('./MenuView');

var _MenuView2 = babelHelpers.interopRequireDefault(_MenuView);

var authMenu = [{ title: 'Update Profile', onPress: function onPress() {
    _reactNativeRouterFlux.Actions.updateProfile();
  } }, { title: 'Change Password', onPress: function onPress() {
    _reactNativeRouterFlux.Actions.passwordReset();
  } }];

var unauthMenu = [{ title: 'Login', onPress: function onPress() {
    _reactNativeRouterFlux.Actions.login();
  } }, { title: 'Sign Up', onPress: function onPress() {
    _reactNativeRouterFlux.Actions.signUp();
  } }];

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    unauthMenu: unauthMenu,
    authMenu: authMenu
  };
};

var mapDispatchToProps = {
  logout: UserActions.logout
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_MenuView2.default);