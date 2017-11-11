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
    formType: 'signUp',
    formFields: ['Email', 'Password', 'ConfirmPassword', 'FirstName', 'LastName'],
    buttonTitle: 'Sign Up',
    successMessage: 'Perfect, You\'re all Signed Up!'
  };
};

var mapDispatchToProps = {
  submit: UserActions.signUp,
  onSuccessfulSubmit: UserActions.login
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_FormView2.default);