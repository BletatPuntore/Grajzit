Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer = require('@redux/router/reducer');

var _reducer2 = babelHelpers.interopRequireDefault(_reducer);

var _reducer3 = require('@redux/sidemenu/reducer');

var _reducer4 = babelHelpers.interopRequireDefault(_reducer3);

var _reducer5 = require('@redux/user/reducer');

var _reducer6 = babelHelpers.interopRequireDefault(_reducer5);

var _reducer7 = require('@redux/recipes/reducer');

var _reducer8 = babelHelpers.interopRequireDefault(_reducer7);

var appReducer = (0, _redux.combineReducers)({
  router: _reducer2.default,
  sideMenu: _reducer4.default,
  user: _reducer6.default,
  recipe: _reducer8.default
});

var rootReducer = function rootReducer(state, action) {
  var newState = action.type === 'RESET' ? undefined : state;
  return appReducer(newState, action);
};

exports.default = rootReducer;