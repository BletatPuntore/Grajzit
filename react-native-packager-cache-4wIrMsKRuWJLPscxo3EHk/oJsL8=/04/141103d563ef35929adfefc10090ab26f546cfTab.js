'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/node_modules/react-native-tab-navigator/Tab.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _ViewPropTypes = require('./config/ViewPropTypes');

var _ViewPropTypes2 = babelHelpers.interopRequireDefault(_ViewPropTypes);

var _Layout = require('./Layout');

var _Layout2 = babelHelpers.interopRequireDefault(_Layout);

var Tab = function (_React$Component) {
  babelHelpers.inherits(Tab, _React$Component);

  function Tab(props, context) {
    babelHelpers.classCallCheck(this, Tab);

    var _this = babelHelpers.possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props, context));

    _this._handlePress = _this._handlePress.bind(_this);
    return _this;
  }

  babelHelpers.createClass(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          badge = _props.badge;

      var icon = null;
      if (_react2.default.Children.count(this.props.children) > 0) {
        icon = _react2.default.Children.only(this.props.children);
      }

      if (title) {
        title = _react2.default.createElement(
          _reactNative.Text,
          {
            numberOfLines: 1,
            allowFontScaling: !!this.props.allowFontScaling,
            style: [styles.title, this.props.titleStyle], __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          title
        );
      }

      if (badge) {
        badge = _react2.default.cloneElement(badge, {
          style: [styles.badge, badge.props.style]
        });
      }

      var tabStyle = [styles.container, title ? null : styles.untitledContainer, this.props.style];
      if (!this.props.hidesTabTouch && _reactNative.Platform.OS === 'android' && _reactNative.Platform.Version >= 21) {
        return _react2.default.createElement(
          _reactNative.TouchableNativeFeedback,
          {
            testID: this.props.testID,
            background: _reactNative.TouchableNativeFeedback.Ripple(undefined, true),
            onPress: this._handlePress, __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: tabStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                }
              },
              icon,
              badge
            ),
            title
          )
        );
      }
      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        {
          testID: this.props.testID,
          activeOpacity: this.props.hidesTabTouch ? 1.0 : 0.8,
          onPress: this._handlePress,
          style: tabStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          },
          icon,
          badge
        ),
        title
      );
    }
  }, {
    key: '_handlePress',
    value: function _handlePress(event) {
      if (this.props.onPress) {
        this.props.onPress(event);
      }
    }
  }]);
  return Tab;
}(_react2.default.Component);

Tab.propTypes = {
  testID: _propTypes2.default.string,
  title: _propTypes2.default.string,
  titleStyle: _reactNative.Text.propTypes.style,
  badge: _propTypes2.default.element,
  onPress: _propTypes2.default.func,
  hidesTabTouch: _propTypes2.default.bool,
  allowFontScaling: _propTypes2.default.bool,
  style: _ViewPropTypes2.default.style
};
exports.default = Tab;


var styles = _reactNative.StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -6,
    right: -10
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  untitledContainer: {
    paddingBottom: 13
  },
  title: {
    color: '#929292',
    fontSize: 10,
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: 4,
    marginBottom: 1 + _Layout2.default.pixel
  }
});