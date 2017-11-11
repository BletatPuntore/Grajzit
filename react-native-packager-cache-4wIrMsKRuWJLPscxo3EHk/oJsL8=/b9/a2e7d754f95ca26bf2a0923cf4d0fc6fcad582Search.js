Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/node_modules/react-native-elements/src/input/Search.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _MaterialIcons = require('react-native-vector-icons/MaterialIcons');

var _MaterialIcons2 = babelHelpers.interopRequireDefault(_MaterialIcons);

var _colors = require('../config/colors');

var _colors2 = babelHelpers.interopRequireDefault(_colors);

var _normalizeText = require('../helpers/normalizeText');

var _normalizeText2 = babelHelpers.interopRequireDefault(_normalizeText);

var _ViewPropTypes = require('../config/ViewPropTypes');

var _ViewPropTypes2 = babelHelpers.interopRequireDefault(_ViewPropTypes);

var Search = function (_Component) {
  babelHelpers.inherits(Search, _Component);

  function Search() {
    babelHelpers.classCallCheck(this, Search);
    return babelHelpers.possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  babelHelpers.createClass(Search, [{
    key: 'focus',
    value: function focus() {
      var ref = this.props.textInputRef;
      this.refs[ref].focus();
    }
  }, {
    key: 'clearText',
    value: function clearText() {
      if (this.props.onChangeText) {
        this.props.onChangeText('');
      }
      try {
        var ref = this.props.textInputRef;
        this.refs[ref].clear();
      } catch (e) {
        if (__DEV__) console.warn('Could not access textInput reference, make sure you supplied the textInputRef');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          containerStyle = _props.containerStyle,
          inputStyle = _props.inputStyle,
          icon = _props.icon,
          noIcon = _props.noIcon,
          lightTheme = _props.lightTheme,
          round = _props.round,
          showLoadingIcon = _props.showLoadingIcon,
          loadingIcon = _props.loadingIcon,
          clearIcon = _props.clearIcon,
          containerRef = _props.containerRef,
          textInputRef = _props.textInputRef,
          underlineColorAndroid = _props.underlineColorAndroid,
          attributes = babelHelpers.objectWithoutProperties(_props, ['containerStyle', 'inputStyle', 'icon', 'noIcon', 'lightTheme', 'round', 'showLoadingIcon', 'loadingIcon', 'clearIcon', 'containerRef', 'textInputRef', 'underlineColorAndroid']);

      return _react2.default.createElement(
        _reactNative.View,
        {
          ref: containerRef,
          style: [styles.container, lightTheme && styles.containerLight, containerStyle && containerStyle],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        },
        _react2.default.createElement(_reactNative.TextInput, babelHelpers.extends({
          ref: textInputRef,
          underlineColorAndroid: underlineColorAndroid ? underlineColorAndroid : 'transparent',
          style: [styles.input, lightTheme && styles.inputLight, noIcon && { paddingLeft: 9 }, round && { borderRadius: _reactNative.Platform.OS === 'ios' ? 15 : 20 }, inputStyle && inputStyle, clearIcon && showLoadingIcon && { paddingRight: 50 }, (clearIcon && !showLoadingIcon || !clearIcon && showLoadingIcon) && { paddingRight: 30 }]
        }, attributes, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        })),
        !noIcon && _react2.default.createElement(_MaterialIcons2.default, {
          size: 16,
          style: [styles.icon, styles.searchIcon, icon.style && icon.style],
          name: icon.name || 'search',
          color: icon.color || _colors2.default.grey3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }),
        clearIcon && _react2.default.createElement(_MaterialIcons2.default, {
          size: 16,
          style: [styles.icon, styles.clearIcon, clearIcon.style && clearIcon.style],
          name: clearIcon.name || 'close',
          onPress: this.clearText.bind(this),
          color: clearIcon.color || _colors2.default.grey3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }),
        showLoadingIcon && _react2.default.createElement(_reactNative.ActivityIndicator, {
          style: [styles.loadingIcon, loadingIcon.style && loadingIcon.style, clearIcon && { right: 35 }],
          color: icon.color || _colors2.default.grey3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        })
      );
    }
  }]);
  return Search;
}(_react.Component);

Search.propTypes = {
  icon: _propTypes2.default.object,
  noIcon: _propTypes2.default.bool,
  lightTheme: _propTypes2.default.bool,
  containerStyle: _ViewPropTypes2.default.style,
  inputStyle: _reactNative.Text.propTypes.style,
  round: _propTypes2.default.bool,
  showLoadingIcon: _propTypes2.default.bool,
  loadingIcon: _propTypes2.default.object,
  clearIcon: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  textInputRef: _propTypes2.default.string,
  containerRef: _propTypes2.default.string,
  underlineColorAndroid: _propTypes2.default.string,
  onChangeText: _propTypes2.default.func
};

Search.defaultProps = {
  placeholderTextColor: _colors2.default.grey3,
  lightTheme: false,
  noIcon: false,
  round: false,
  icon: {},
  showLoadingIcon: false,
  loadingIcon: {}
};

var styles = _reactNative.StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderTopColor: '#000',
    backgroundColor: _colors2.default.grey0
  },
  containerLight: {
    backgroundColor: _colors2.default.grey5,
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1'
  },
  icon: babelHelpers.extends({
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 15.5
  }, _reactNative.Platform.select({
    android: {
      top: 20
    }
  })),
  loadingIcon: babelHelpers.extends({
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 16,
    top: 13
  }, _reactNative.Platform.select({
    android: {
      top: 18
    }
  })),
  input: babelHelpers.extends({
    paddingLeft: 26,
    paddingRight: 19,
    margin: 8,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: _colors2.default.searchBg,
    fontSize: (0, _normalizeText2.default)(14),
    color: _colors2.default.grey3,
    height: 40
  }, _reactNative.Platform.select({
    ios: {
      height: 30
    },
    android: {
      borderWidth: 0
    }
  })),
  inputLight: {
    backgroundColor: _colors2.default.grey4
  },
  searchIcon: {
    left: 16
  },
  clearIcon: {
    right: 16
  }
});

exports.default = Search;