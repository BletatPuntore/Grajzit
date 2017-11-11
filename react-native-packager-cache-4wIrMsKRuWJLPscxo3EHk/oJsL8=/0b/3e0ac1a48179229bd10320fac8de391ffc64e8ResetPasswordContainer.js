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
    formType: 'passwordReset',
    formFields: ['Email'],
    buttonTitle: 'Send Instructions',
    successMessage: 'We\'ve emailed you the instructions',
    introText: 'Please enter the email address associated to your account, and we\'ll send you instructions.'
  };
};

var mapDispatchToProps = {
  submit: UserActions.resetPassword
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_FormView2.default);