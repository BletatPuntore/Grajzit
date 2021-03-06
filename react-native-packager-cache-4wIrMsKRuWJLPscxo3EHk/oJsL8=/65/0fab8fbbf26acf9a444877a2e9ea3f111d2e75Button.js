Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/node_modules/react-native-elements/src/buttons/Button.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _colors = require('../config/colors');

var _colors2 = babelHelpers.interopRequireDefault(_colors);

var _Text = require('../text/Text');

var _Text2 = babelHelpers.interopRequireDefault(_Text);

var _MaterialIcons = require('react-native-vector-icons/MaterialIcons');

var _MaterialIcons2 = babelHelpers.interopRequireDefault(_MaterialIcons);

var _getIconType = require('../helpers/getIconType');

var _getIconType2 = babelHelpers.interopRequireDefault(_getIconType);

var _normalizeText = require('../helpers/normalizeText');

var _normalizeText2 = babelHelpers.interopRequireDefault(_normalizeText);

var _ViewPropTypes = require('../config/ViewPropTypes');

var _ViewPropTypes2 = babelHelpers.interopRequireDefault(_ViewPropTypes);

var log = function log() {
  console.log('please attach method to this component');
};

var Button = function Button(props) {
  var disabled = props.disabled,
      loading = props.loading,
      loadingRight = props.loadingRight,
      activityIndicatorStyle = props.activityIndicatorStyle,
      buttonStyle = props.buttonStyle,
      borderRadius = props.borderRadius,
      title = props.title,
      onPress = props.onPress,
      icon = props.icon,
      iconComponent = props.iconComponent,
      secondary = props.secondary,
      secondary2 = props.secondary2,
      secondary3 = props.secondary3,
      primary1 = props.primary1,
      primary2 = props.primary2,
      backgroundColor = props.backgroundColor,
      color = props.color,
      fontSize = props.fontSize,
      underlayColor = props.underlayColor,
      raised = props.raised,
      textStyle = props.textStyle,
      large = props.large,
      iconRight = props.iconRight,
      fontWeight = props.fontWeight,
      disabledStyle = props.disabledStyle,
      fontFamily = props.fontFamily,
      containerViewStyle = props.containerViewStyle,
      rounded = props.rounded,
      outline = props.outline,
      transparent = props.transparent,
      textNumberOfLines = props.textNumberOfLines,
      textEllipsizeMode = props.textEllipsizeMode,
      allowFontScaling = props.allowFontScaling,
      attributes = babelHelpers.objectWithoutProperties(props, ['disabled', 'loading', 'loadingRight', 'activityIndicatorStyle', 'buttonStyle', 'borderRadius', 'title', 'onPress', 'icon', 'iconComponent', 'secondary', 'secondary2', 'secondary3', 'primary1', 'primary2', 'backgroundColor', 'color', 'fontSize', 'underlayColor', 'raised', 'textStyle', 'large', 'iconRight', 'fontWeight', 'disabledStyle', 'fontFamily', 'containerViewStyle', 'rounded', 'outline', 'transparent', 'textNumberOfLines', 'textEllipsizeMode', 'allowFontScaling']);
  var Component = props.Component;


  var iconElement = void 0;
  if (icon) {
    var Icon = void 0;
    if (iconComponent) {
      Icon = iconComponent;
    } else if (!icon.type) {
      Icon = _MaterialIcons2.default;
    } else {
      Icon = (0, _getIconType2.default)(icon.type);
    }
    iconElement = _react2.default.createElement(Icon, babelHelpers.extends({}, icon, {
      color: icon.color || 'white',
      size: icon.size || (large ? 26 : 18),
      style: [iconRight ? styles.iconRight : styles.icon, icon.style && icon.style],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      }
    }));
  }
  var loadingElement = void 0;
  if (loading) {
    loadingElement = _react2.default.createElement(_reactNative.ActivityIndicator, {
      animating: true,
      style: [styles.activityIndicatorStyle, activityIndicatorStyle],
      color: color || 'white',
      size: large && 'large' || 'small',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      }
    });
  }
  if (!Component && _reactNative.Platform.OS === 'ios') {
    Component = _reactNative.TouchableHighlight;
  }
  if (!Component && _reactNative.Platform.OS === 'android') {
    Component = _reactNative.TouchableNativeFeedback;
  }
  if (!Component) {
    Component = _reactNative.TouchableHighlight;
  }

  if (_reactNative.Platform.OS === 'android' && borderRadius && !attributes.background) {
    attributes.background = _reactNative.TouchableNativeFeedback.Ripple('ThemeAttrAndroid', true);
  }

  var baseFont = {
    color: textStyle && textStyle.color || color || stylesObject.text.color,
    size: textStyle && textStyle.fontSize || fontSize || !large && stylesObject.smallFont.fontSize || stylesObject.text.fontSize
  };

  var textOptions = {};
  if (textNumberOfLines) {
    textOptions.numberOfLines = textNumberOfLines;
    if (textEllipsizeMode) {
      textOptions.ellipsizeMode = textEllipsizeMode;
    }
  }

  return _react2.default.createElement(
    _reactNative.View,
    {
      style: [styles.container, raised && styles.raised, containerViewStyle],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      }
    },
    _react2.default.createElement(
      Component,
      babelHelpers.extends({
        underlayColor: underlayColor || 'transparent',
        onPress: onPress || log,
        disabled: disabled || false
      }, attributes, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }),
      _react2.default.createElement(
        _reactNative.View,
        {
          style: [styles.button, secondary && { backgroundColor: _colors2.default.secondary }, secondary2 && { backgroundColor: _colors2.default.secondary2 }, secondary3 && { backgroundColor: _colors2.default.secondary3 }, primary1 && { backgroundColor: _colors2.default.primary1 }, primary2 && { backgroundColor: _colors2.default.primary2 }, backgroundColor && { backgroundColor: backgroundColor }, borderRadius && { borderRadius: borderRadius }, !large && styles.small, rounded && {
            borderRadius: baseFont.size * 3.8,
            paddingHorizontal: !large ? stylesObject.small.padding * 1.5 : stylesObject.button.padding * 1.5
          }, outline && {
            borderWidth: 1,
            backgroundColor: 'transparent',
            borderColor: baseFont.color
          }, transparent && {
            borderWidth: 0,
            backgroundColor: 'transparent'
          }, buttonStyle && buttonStyle, disabled && { backgroundColor: _colors2.default.disabled }, disabled && disabledStyle && disabledStyle],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        },
        icon && !iconRight && iconElement,
        loading && !loadingRight && loadingElement,
        _react2.default.createElement(
          _Text2.default,
          babelHelpers.extends({
            style: [styles.text, color && { color: color }, !large && styles.smallFont, fontSize && { fontSize: fontSize }, textStyle && textStyle, fontWeight && { fontWeight: fontWeight }, fontFamily && { fontFamily: fontFamily }]
          }, textOptions, {
            allowFontScaling: allowFontScaling,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            }
          }),
          title
        ),
        loading && loadingRight && loadingElement,
        icon && iconRight && iconElement
      )
    )
  );
};

Button.propTypes = {
  buttonStyle: _ViewPropTypes2.default.style,
  title: _propTypes2.default.string,
  onPress: _propTypes2.default.any,
  icon: _propTypes2.default.object,
  iconComponent: _propTypes2.default.any,
  secondary: _propTypes2.default.bool,
  secondary2: _propTypes2.default.bool,
  secondary3: _propTypes2.default.bool,
  primary1: _propTypes2.default.bool,
  primary2: _propTypes2.default.bool,
  backgroundColor: _propTypes2.default.string,
  color: _propTypes2.default.string,
  fontSize: _propTypes2.default.any,
  underlayColor: _propTypes2.default.string,
  raised: _propTypes2.default.bool,
  textStyle: _reactNative.Text.propTypes.style,
  disabled: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  activityIndicatorStyle: _ViewPropTypes2.default.style,
  loadingRight: _propTypes2.default.bool,
  Component: _propTypes2.default.any,
  borderRadius: _propTypes2.default.number,
  large: _propTypes2.default.bool,
  iconRight: _propTypes2.default.bool,
  fontWeight: _propTypes2.default.string,
  disabledStyle: _ViewPropTypes2.default.style,
  fontFamily: _propTypes2.default.string,
  containerViewStyle: _ViewPropTypes2.default.style,
  rounded: _propTypes2.default.bool,
  outline: _propTypes2.default.bool,
  transparent: _propTypes2.default.bool,
  allowFontScaling: _propTypes2.default.bool,
  textNumberOfLines: _propTypes2.default.number,
  textEllipsizeMode: _propTypes2.default.string
};

var stylesObject = {
  container: {
    backgroundColor: 'transparent',
    marginLeft: 15,
    marginRight: 15
  },
  button: {
    padding: 19,
    backgroundColor: _colors2.default.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontSize: (0, _normalizeText2.default)(16)
  },
  icon: {
    marginRight: 10
  },
  iconRight: {
    marginLeft: 10
  },
  small: {
    padding: 12
  },
  smallFont: {
    fontSize: (0, _normalizeText2.default)(14)
  },
  activityIndicatorStyle: {
    marginHorizontal: 10,
    height: 0
  },
  raised: babelHelpers.extends({}, _reactNative.Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 1,
      shadowRadius: 1
    },
    android: {
      backgroundColor: '#fff',
      elevation: 2
    }
  }))
};

var styles = _reactNative.StyleSheet.create(stylesObject);

exports.default = Button;