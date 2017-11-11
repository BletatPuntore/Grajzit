Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/navigation/auth.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _constants = require('@constants/');

var _AuthenticateView = require('@containers/auth/AuthenticateView');

var _AuthenticateView2 = babelHelpers.interopRequireDefault(_AuthenticateView);

var _LoginContainer = require('@containers/auth/Forms/LoginContainer');

var _LoginContainer2 = babelHelpers.interopRequireDefault(_LoginContainer);

var _SignUpContainer = require('@containers/auth/Forms/SignUpContainer');

var _SignUpContainer2 = babelHelpers.interopRequireDefault(_SignUpContainer);

var _ResetPasswordContainer = require('@containers/auth/Forms/ResetPasswordContainer');

var _ResetPasswordContainer2 = babelHelpers.interopRequireDefault(_ResetPasswordContainer);

var _UpdateProfileContainer = require('@containers/auth/Forms/UpdateProfileContainer');

var _UpdateProfileContainer2 = babelHelpers.interopRequireDefault(_UpdateProfileContainer);

var scenes = _react2.default.createElement(
  _reactNativeRouterFlux.Scene,
  { key: 'authenticate', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  },
  _react2.default.createElement(_reactNativeRouterFlux.Scene, {
    hideNavBar: true,
    key: 'authLanding',
    component: _AuthenticateView2.default,
    type: _reactNativeRouterFlux.ActionConst.RESET,
    analyticsDesc: 'Authentication',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }),
  _react2.default.createElement(_reactNativeRouterFlux.Scene, babelHelpers.extends({}, _constants.AppConfig.navbarProps, {
    key: 'login',
    title: 'Login',
    clone: true,
    component: _LoginContainer2.default,
    analyticsDesc: 'Login',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })),
  _react2.default.createElement(_reactNativeRouterFlux.Scene, babelHelpers.extends({}, _constants.AppConfig.navbarProps, {
    key: 'signUp',
    title: 'Sign Up',
    clone: true,
    component: _SignUpContainer2.default,
    analyticsDesc: 'Sign Up',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  })),
  _react2.default.createElement(_reactNativeRouterFlux.Scene, babelHelpers.extends({}, _constants.AppConfig.navbarProps, {
    key: 'passwordReset',
    title: 'Password Reset',
    clone: true,
    component: _ResetPasswordContainer2.default,
    analyticsDesc: 'Password Reset',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  })),
  _react2.default.createElement(_reactNativeRouterFlux.Scene, babelHelpers.extends({}, _constants.AppConfig.navbarProps, {
    key: 'updateProfile',
    title: 'Update Profile',
    clone: true,
    component: _UpdateProfileContainer2.default,
    analyticsDesc: 'Update Profile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }))
);

exports.default = scenes;