Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/node_modules/react-native-elements/src/card/Card.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _fonts = require('../config/fonts');

var _fonts2 = babelHelpers.interopRequireDefault(_fonts);

var _colors = require('../config/colors');

var _colors2 = babelHelpers.interopRequireDefault(_colors);

var _Text = require('../text/Text');

var _Text2 = babelHelpers.interopRequireDefault(_Text);

var _Divider = require('../divider/Divider');

var _Divider2 = babelHelpers.interopRequireDefault(_Divider);

var _normalizeText = require('../helpers/normalizeText');

var _normalizeText2 = babelHelpers.interopRequireDefault(_normalizeText);

var _ViewPropTypes = require('../config/ViewPropTypes');

var _ViewPropTypes2 = babelHelpers.interopRequireDefault(_ViewPropTypes);

var _BackgroundImage = require('../config/BackgroundImage');

var _BackgroundImage2 = babelHelpers.interopRequireDefault(_BackgroundImage);

var Card = function Card(props) {
  var children = props.children,
      flexDirection = props.flexDirection,
      containerStyle = props.containerStyle,
      wrapperStyle = props.wrapperStyle,
      imageWrapperStyle = props.imageWrapperStyle,
      title = props.title,
      titleStyle = props.titleStyle,
      featuredTitle = props.featuredTitle,
      featuredTitleStyle = props.featuredTitleStyle,
      featuredSubtitle = props.featuredSubtitle,
      featuredSubtitleStyle = props.featuredSubtitleStyle,
      dividerStyle = props.dividerStyle,
      image = props.image,
      imageStyle = props.imageStyle,
      fontFamily = props.fontFamily,
      attributes = babelHelpers.objectWithoutProperties(props, ['children', 'flexDirection', 'containerStyle', 'wrapperStyle', 'imageWrapperStyle', 'title', 'titleStyle', 'featuredTitle', 'featuredTitleStyle', 'featuredSubtitle', 'featuredSubtitleStyle', 'dividerStyle', 'image', 'imageStyle', 'fontFamily']);


  return _react2.default.createElement(
    _reactNative.View,
    babelHelpers.extends({
      style: [styles.container, image && { padding: 0 }, containerStyle && containerStyle]
    }, attributes, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }),
    _react2.default.createElement(
      _reactNative.View,
      {
        style: [styles.wrapper, wrapperStyle && wrapperStyle, flexDirection && { flexDirection: flexDirection }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      },
      title && _react2.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        _react2.default.createElement(
          _Text2.default,
          {
            style: [styles.cardTitle, image && styles.imageCardTitle, titleStyle && titleStyle, fontFamily && { fontFamily: fontFamily }],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          title
        ),
        !image && _react2.default.createElement(_Divider2.default, {
          style: [styles.divider, dividerStyle && dividerStyle],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        })
      ),
      image && _react2.default.createElement(
        _reactNative.View,
        { style: imageWrapperStyle && imageWrapperStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        },
        _react2.default.createElement(
          _BackgroundImage2.default,
          {
            resizeMode: 'cover',
            style: [{ width: null, height: 150 }, imageStyle && imageStyle],
            source: image,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.overlayContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            },
            featuredTitle && _react2.default.createElement(
              _Text2.default,
              {
                style: [styles.featuredTitle, featuredTitleStyle && featuredTitleStyle],
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              },
              featuredTitle
            ),
            featuredSubtitle && _react2.default.createElement(
              _Text2.default,
              {
                style: [styles.featuredSubtitle, featuredSubtitleStyle && featuredSubtitleStyle],
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                }
              },
              featuredSubtitle
            )
          )
        ),
        _react2.default.createElement(
          _reactNative.View,
          { style: [{ padding: 10 }, wrapperStyle && wrapperStyle], __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            }
          },
          children
        )
      ),
      !image && children
    )
  );
};

Card.propTypes = {
  children: _propTypes2.default.any,
  flexDirection: _propTypes2.default.string,
  containerStyle: _ViewPropTypes2.default.style,
  wrapperStyle: _ViewPropTypes2.default.style,
  title: _propTypes2.default.string,
  titleStyle: _reactNative.Text.propTypes.style,
  featuredTitle: _propTypes2.default.string,
  featuredTitleStyle: _Text2.default.propTypes.style,
  featuredSubtitle: _propTypes2.default.string,
  featuredSubtitleStyle: _Text2.default.propTypes.style,
  dividerStyle: _ViewPropTypes2.default.style,
  image: _reactNative.Image.propTypes.source,
  imageStyle: _ViewPropTypes2.default.style,
  imageWrapperStyle: _ViewPropTypes2.default.style,
  fontFamily: _propTypes2.default.string
};

var styles = _reactNative.StyleSheet.create({
  container: babelHelpers.extends({
    backgroundColor: 'white',
    borderColor: _colors2.default.grey5,
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginBottom: 0
  }, _reactNative.Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0, .2)',
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 1,
      shadowRadius: 1
    },
    android: {
      elevation: 1
    }
  })),
  featuredTitle: babelHelpers.extends({
    fontSize: (0, _normalizeText2.default)(18),
    marginBottom: 8,
    color: 'white'
  }, _reactNative.Platform.select({
    ios: {
      fontWeight: '800'
    },
    android: babelHelpers.extends({}, _fonts2.default.android.black)
  })),
  featuredSubtitle: babelHelpers.extends({
    fontSize: (0, _normalizeText2.default)(13),
    marginBottom: 8,
    color: 'white'
  }, _reactNative.Platform.select({
    ios: {
      fontWeight: '400'
    },
    android: babelHelpers.extends({}, _fonts2.default.android.black)
  })),
  wrapper: {
    backgroundColor: 'transparent'
  },
  divider: {
    marginBottom: 15
  },
  cardTitle: babelHelpers.extends({
    fontSize: (0, _normalizeText2.default)(14)
  }, _reactNative.Platform.select({
    ios: {
      fontWeight: 'bold'
    },
    android: babelHelpers.extends({}, _fonts2.default.android.black)
  }), {
    textAlign: 'center',
    marginBottom: 15,
    color: _colors2.default.grey1
  }),
  imageCardTitle: {
    marginTop: 15
  },
  overlayContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignSelf: 'stretch',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

exports.default = Card;