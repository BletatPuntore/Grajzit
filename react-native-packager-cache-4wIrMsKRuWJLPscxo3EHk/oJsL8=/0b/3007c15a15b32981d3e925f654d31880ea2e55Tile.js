Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/node_modules/react-native-elements/src/tile/Tile.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Text = require('../text/Text');

var _Text2 = babelHelpers.interopRequireDefault(_Text);

var _Icon = require('../icons/Icon');

var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

var _FeaturedTile = require('./FeaturedTile');

var _FeaturedTile2 = babelHelpers.interopRequireDefault(_FeaturedTile);

var _ViewPropTypes = require('../config/ViewPropTypes');

var _ViewPropTypes2 = babelHelpers.interopRequireDefault(_ViewPropTypes);

var _BackgroundImage = require('../config/BackgroundImage');

var _BackgroundImage2 = babelHelpers.interopRequireDefault(_BackgroundImage);

var Tile = function Tile(props) {
  var featured = props.featured,
      imageSrc = props.imageSrc,
      icon = props.icon,
      title = props.title,
      children = props.children,
      caption = props.caption,
      titleStyle = props.titleStyle,
      onPress = props.onPress,
      activeOpacity = props.activeOpacity,
      overlayContainerStyle = props.overlayContainerStyle,
      captionStyle = props.captionStyle,
      iconContainerStyle = props.iconContainerStyle,
      imageContainerStyle = props.imageContainerStyle,
      containerStyle = props.containerStyle,
      contentContainerStyle = props.contentContainerStyle,
      attributes = babelHelpers.objectWithoutProperties(props, ['featured', 'imageSrc', 'icon', 'title', 'children', 'caption', 'titleStyle', 'onPress', 'activeOpacity', 'overlayContainerStyle', 'captionStyle', 'iconContainerStyle', 'imageContainerStyle', 'containerStyle', 'contentContainerStyle']);
  var width = props.width,
      height = props.height;


  if (!width) {
    width = _reactNative.Dimensions.get('window').width;
  }

  if (!height) {
    height = width * 0.8;
  }

  var styles = _reactNative.StyleSheet.create({
    container: {
      width: width,
      height: height
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'cover',
      backgroundColor: '#ffffff',
      flex: 2
    },
    text: {
      backgroundColor: 'rgba(0,0,0,0)',
      marginBottom: 5
    },
    contentContainer: {
      paddingTop: 15,
      paddingBottom: 5,
      paddingLeft: 15,
      paddingRight: 15
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    }
  });

  if (featured) {
    var featuredProps = {
      title: title,
      icon: icon,
      caption: caption,
      imageSrc: imageSrc,
      onPress: onPress,
      activeOpacity: activeOpacity,
      containerStyle: containerStyle,
      imageContainerStyle: imageContainerStyle,
      overlayContainerStyle: overlayContainerStyle,
      titleStyle: titleStyle,
      captionStyle: captionStyle,
      width: width,
      height: height
    };
    return _react2.default.createElement(_FeaturedTile2.default, babelHelpers.extends({}, featuredProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      }
    }));
  }

  return _react2.default.createElement(
    _reactNative.TouchableOpacity,
    babelHelpers.extends({
      onPress: onPress,
      style: [styles.container, containerStyle && containerStyle]
    }, attributes, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      }
    }),
    _react2.default.createElement(
      _BackgroundImage2.default,
      {
        source: imageSrc,
        style: [styles.imageContainer, imageContainerStyle && imageContainerStyle],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      },
      _react2.default.createElement(
        _reactNative.View,
        {
          style: [styles.iconContainer, iconContainerStyle && iconContainerStyle],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        },
        icon && _react2.default.createElement(_Icon2.default, babelHelpers.extends({}, icon, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }))
      )
    ),
    _react2.default.createElement(
      _reactNative.View,
      {
        style: [styles.contentContainer, contentContainerStyle && contentContainerStyle],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      },
      _react2.default.createElement(
        _Text2.default,
        { h4: true, style: [styles.text, titleStyle && titleStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        },
        title
      ),
      children
    )
  );
};

Tile.propTypes = {
  title: _propTypes2.default.string,
  icon: _propTypes2.default.object,
  caption: _propTypes2.default.string,
  imageSrc: _reactNative.Image.propTypes.source.isRequired,
  onPress: _propTypes2.default.func,
  activeOpacity: _propTypes2.default.number,
  containerStyle: _ViewPropTypes2.default.style,
  imageContainerStyle: _ViewPropTypes2.default.style,
  iconContainerStyle: _ViewPropTypes2.default.style,
  overlayContainerStyle: _ViewPropTypes2.default.style,
  titleStyle: _reactNative.Text.propTypes.style,
  captionStyle: _reactNative.Text.propTypes.style,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  featured: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  contentContainerStyle: _ViewPropTypes2.default.style
};

exports.default = Tile;