Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/navigation/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _constants = require('@constants/');

var _DrawerContainer = require('@containers/ui/DrawerContainer');

var _DrawerContainer2 = babelHelpers.interopRequireDefault(_DrawerContainer);

var _LaunchContainer = require('@containers/Launch/LaunchContainer');

var _LaunchContainer2 = babelHelpers.interopRequireDefault(_LaunchContainer);

var _Placeholder = require('@components/general/Placeholder');

var _Placeholder2 = babelHelpers.interopRequireDefault(_Placeholder);

var _auth = require('./auth');

var _auth2 = babelHelpers.interopRequireDefault(_auth);

var _tabs = require('./tabs');

var _tabs2 = babelHelpers.interopRequireDefault(_tabs);

exports.default = _reactNativeRouterFlux.Actions.create(_react2.default.createElement(
  _reactNativeRouterFlux.Scene,
  babelHelpers.extends({ key: 'root' }, _constants.AppConfig.navbarProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }),
  _react2.default.createElement(_reactNativeRouterFlux.Scene, {
    hideNavBar: true,
    key: 'splash',
    component: _LaunchContainer2.default,
    analyticsDesc: 'AppLaunch: Launching App',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }),
  _auth2.default,
  _react2.default.createElement(
    _reactNativeRouterFlux.Scene,
    babelHelpers.extends({ key: 'app' }, _constants.AppConfig.navbarProps, { title: _constants.AppConfig.appName, hideNavBar: false, type: _reactNativeRouterFlux.ActionConst.RESET, __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }),
    _react2.default.createElement(
      _reactNativeRouterFlux.Scene,
      { key: 'home', component: _DrawerContainer2.default, initial: 'tabBar', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      },
      _tabs2.default
    ),
    _react2.default.createElement(_reactNativeRouterFlux.Scene, {
      clone: true,
      key: 'comingSoon',
      title: 'Coming Soon',
      component: _Placeholder2.default,
      analyticsDesc: 'Placeholder: Coming Soon',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    })
  )
));