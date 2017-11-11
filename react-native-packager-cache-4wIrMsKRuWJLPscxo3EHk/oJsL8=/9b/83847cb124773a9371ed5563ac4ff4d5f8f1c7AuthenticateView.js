Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/containers/auth/AuthenticateView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _theme = require('@theme/');

var _ui = require('@ui/');

var styles = _reactNative.StyleSheet.create({
  background: {
    backgroundColor: _theme.AppColors.brand.primary,
    height: _theme.AppSizes.screen.height,
    width: _theme.AppSizes.screen.width
  },
  logo: {
    width: _theme.AppSizes.screen.width * 0.85,
    resizeMode: 'contain'
  },
  whiteText: {
    color: '#FFF'
  }
});

var Authenticate = function (_Component) {
  babelHelpers.inherits(Authenticate, _Component);

  function Authenticate() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, Authenticate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Authenticate.__proto__ || Object.getPrototypeOf(Authenticate)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        _reactNative.View,
        { style: [_theme.AppStyles.containerCentered, _theme.AppStyles.container, styles.background], __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        },
        _react2.default.createElement(_reactNative.Image, {
          source: require('../../images/bg.png'),
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '110%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }),
        _react2.default.createElement(
          _reactNative.View,
          { style: [_theme.AppStyles.row, _theme.AppStyles.paddingHorizontal], __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: [_theme.AppStyles.flex1], __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            _react2.default.createElement(_ui.Button, {
              title: 'Login',
              icon: { name: 'lock' },
              onPress: _reactNativeRouterFlux.Actions.login,
              backgroundColor: '#00BF9A',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            })
          )
        ),
        _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }),
        _react2.default.createElement(
          _reactNative.View,
          { style: [_theme.AppStyles.row, _theme.AppStyles.paddingHorizontal], __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: [_theme.AppStyles.flex1], __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            _react2.default.createElement(_ui.Button, {
              title: 'Sign up',
              icon: { name: 'face' },
              onPress: _reactNativeRouterFlux.Actions.signUp,
              backgroundColor: '#00BF9A',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            })
          )
        ),
        _react2.default.createElement(_ui.Spacer, { size: 15, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }),
        _react2.default.createElement(
          _ui.Text,
          { p: true, style: [_theme.AppStyles.textCenterAligned, styles.whiteText], __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          },
          '- or -'
        ),
        _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }),
        _react2.default.createElement(
          _reactNative.View,
          { style: [_theme.AppStyles.row, _theme.AppStyles.paddingHorizontal], __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          },
          _react2.default.createElement(_reactNative.View, { style: [_theme.AppStyles.flex1], __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          }),
          _react2.default.createElement(
            _reactNative.View,
            { style: [_theme.AppStyles.flex2], __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              }
            },
            _react2.default.createElement(_ui.Button, {
              small: true,
              title: 'Skip',
              onPress: _reactNativeRouterFlux.Actions.app,
              raised: false,
              backgroundColor: 'rgba(255,255,255,0.2)',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              }
            })
          ),
          _react2.default.createElement(_reactNative.View, { style: [_theme.AppStyles.flex1], __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            }
          })
        ),
        _react2.default.createElement(_ui.Spacer, { size: 40, __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        })
      );
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  return Authenticate;
}(_react.Component);

Authenticate.componentName = 'Authenticate';
exports.default = Authenticate;