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
    formType: 'updateProfile',
    formFields: ['Email', 'FirstName', 'LastName'],
    buttonTitle: 'Update',
    successMessage: 'Great, that\'s been updated!'
  };
};

var mapDispatchToProps = {
  submit: UserActions.updateProfile
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_FormView2.default);