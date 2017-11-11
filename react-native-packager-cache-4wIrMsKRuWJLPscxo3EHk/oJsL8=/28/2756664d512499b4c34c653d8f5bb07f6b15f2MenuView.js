Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/containers/ui/Menu/MenuView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _theme = require('@theme/');

var _ui = require('@ui/');

var MENU_BG_COLOR = '#263137';

var styles = _reactNative.StyleSheet.create({
  backgroundFill: {
    backgroundColor: MENU_BG_COLOR,
    height: _theme.AppSizes.screen.height,
    width: _theme.AppSizes.screen.width,
    position: 'absolute',
    top: 0,
    left: 0
  },
  container: {
    position: 'relative',
    flex: 1
  },
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: MENU_BG_COLOR
  },

  menu: {
    flex: 3,
    left: 0,
    right: 0,
    backgroundColor: MENU_BG_COLOR,
    padding: 20,
    paddingTop: _theme.AppSizes.statusBarHeight + 20
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    paddingBottom: 10
  },
  menuItem_text: {
    fontSize: 16,
    lineHeight: parseInt(16 + 16 * 0.5, 10),
    fontWeight: '500',
    marginTop: 14,
    marginBottom: 8,
    color: '#EEEFF0'
  },

  menuBottom: {
    flex: 1,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  menuBottom_text: {
    color: '#EEEFF0'
  }
});

var Menu = function (_Component) {
  babelHelpers.inherits(Menu, _Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.onPress = function (action) {
      _this.props.closeSideMenu();
      if (action) action();
    }, _this.logout = function () {
      if (_this.props.logout) {
        _this.props.logout().then(function () {
          _this.props.closeSideMenu();
          _reactNativeRouterFlux.Actions.login();
        }).catch(function () {
          _reactNative.Alert.alert('Oh uh!', 'Something went wrong.');
        });
      }
    }, _this.menuItem = function (item) {
      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        {
          key: 'menu-item-' + item.title,
          onPress: function onPress() {
            return _this.onPress(item.onPress);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: [styles.menuItem], __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            }
          },
          _react2.default.createElement(
            _ui.Text,
            { style: [styles.menuItem_text], __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              }
            },
            item.title
          )
        )
      );
    }, _this.menuList = function () {
      var menu = _this.props.unauthMenu;
      if (_this.props.user && _this.props.user.email) menu = _this.props.authMenu;

      return menu.map(function (item) {
        return _this.menuItem(item);
      });
    }, _this.render = function () {
      return _react2.default.createElement(
        _reactNative.View,
        { style: [styles.container], __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        },
        _react2.default.createElement(_reactNative.View, { style: [styles.backgroundFill], __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }),
        _react2.default.createElement(
          _reactNative.View,
          { style: [styles.menuContainer], __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: [styles.menu], __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              }
            },
            _this.menuList()
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: [styles.menuBottom], __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              }
            },
            _this.props.user && _this.props.user.email ? _react2.default.createElement(
              _reactNative.View,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 159
                }
              },
              _react2.default.createElement(
                _ui.Text,
                {
                  style: [styles.menuBottom_text, _theme.AppStyles.textCenterAligned],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                  }
                },
                'Logged in as:',
                '\n',
                _this.props.user.email
              ),
              _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 170
                }
              }),
              _react2.default.createElement(
                _reactNative.View,
                { style: [_theme.AppStyles.paddingHorizontal, _theme.AppStyles.paddingVerticalSml], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                  }
                },
                _react2.default.createElement(_ui.Button, { small: true, title: 'Log Out', onPress: _this.logout, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                  }
                })
              )
            ) : _react2.default.createElement(
              _reactNative.View,
              { style: [_theme.AppStyles.paddingHorizontal, _theme.AppStyles.paddingVerticalSml], __source: {
                  fileName: _jsxFileName,
                  lineNumber: 177
                }
              },
              _react2.default.createElement(_ui.Button, { small: true, title: 'Log In', onPress: function onPress() {
                  return _this.onPress(_reactNativeRouterFlux.Actions.login);
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 178
                }
              })
            )
          )
        )
      );
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  return Menu;
}(_react.Component);

Menu.propTypes = {
  logout: _propTypes2.default.func.isRequired,
  closeSideMenu: _propTypes2.default.func.isRequired,
  user: _propTypes2.default.shape({
    email: _propTypes2.default.string
  }),
  unauthMenu: _propTypes2.default.arrayOf(_propTypes2.default.shape({})),
  authMenu: _propTypes2.default.arrayOf(_propTypes2.default.shape({}))
};
Menu.defaultProps = {
  user: null,
  unauthMenu: [],
  authMenu: []
};
exports.default = Menu;