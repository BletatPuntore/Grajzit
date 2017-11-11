Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _actions = require('@redux/user/actions');

var UserActions = babelHelpers.interopRequireWildcard(_actions);

var _FormView = require('./FormView');

var _FormView2 = babelHelpers.interopRequireDefault(_FormView);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    formType: 'login',
    formFields: ['Email', 'Password'],
    buttonTitle: 'Login',
    successMessage: 'Awesome, you\'re now logged in'
  };
};

var mapDispatchToProps = {
  submit: UserActions.login
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_FormView2.default);