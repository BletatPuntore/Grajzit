Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userReducer;

var initialState = {};

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'USER_LOGIN':
      {
        if (action.data) {
          var input = action.data;
          return babelHelpers.extends({}, state, {
            uid: input.uid,
            email: input.email,
            emailVerified: input.emailVerified
          });
        }
        return {};
      }
    case 'USER_DETAILS_UPDATE':
      {
        if (action.data) {
          var _input = action.data;
          return babelHelpers.extends({}, state, {
            firstName: _input.firstName,
            lastName: _input.lastName,
            signedUp: _input.signedUp,
            role: _input.role
          });
        }
        return {};
      }
    case 'USER_LOGOUT':
      {
        return {};
      }
    default:
      return state;
  }
}