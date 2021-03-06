Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/index.js';
exports.default = AppContainer;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxLogger = require('redux-logger');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = babelHelpers.interopRequireDefault(_reduxThunk);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _theme = require('@theme/');

var _navigation = require('@navigation/');

var _navigation2 = babelHelpers.interopRequireDefault(_navigation);

var _analytics = require('@lib/analytics');

var _analytics2 = babelHelpers.interopRequireDefault(_analytics);

var _index = require('@redux/index');

var _index2 = babelHelpers.interopRequireDefault(_index);

var RouterWithRedux = (0, _reactRedux.connect)()(_reactNativeRouterFlux.Router);

var middleware = [_analytics2.default, _reduxThunk2.default];

if (__DEV__) {
  middleware = [].concat(babelHelpers.toConsumableArray(middleware), [(0, _reduxLogger.createLogger)()]);
}

var store = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, babelHelpers.toConsumableArray(middleware)))(_redux.createStore)(_index2.default);

function AppContainer() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store, __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    },
    _react2.default.createElement(RouterWithRedux, { scenes: _navigation2.default, style: _theme.AppStyles.appContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    })
  );
}