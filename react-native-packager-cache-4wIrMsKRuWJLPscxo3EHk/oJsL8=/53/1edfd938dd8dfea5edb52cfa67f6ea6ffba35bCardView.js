Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/containers/recipes/Card/CardView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _reactNativeElements = require('react-native-elements');

var _theme = require('@theme/');

var _ui = require('@ui/');

var styles = _reactNative.StyleSheet.create({
  favourite: {
    position: 'absolute',
    top: -45,
    right: 0
  }
});

var RecipeCard = function (_Component) {
  babelHelpers.inherits(RecipeCard, _Component);

  function RecipeCard() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, RecipeCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = RecipeCard.__proto__ || Object.getPrototypeOf(RecipeCard)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          title = _this$props.title,
          body = _this$props.body,
          image = _this$props.image,
          onPress = _this$props.onPress,
          onPressFavourite = _this$props.onPressFavourite,
          isFavourite = _this$props.isFavourite;


      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        { activeOpacity: 0.8, onPress: onPress, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        },
        _react2.default.createElement(
          _ui.Card,
          { image: image && { uri: image }, __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: [_theme.AppStyles.paddingBottomSml], __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            _react2.default.createElement(
              _ui.Text,
              { h3: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              },
              title
            ),
            _react2.default.createElement(
              _ui.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              body
            ),
            !!onPressFavourite && _react2.default.createElement(
              _reactNative.TouchableOpacity,
              {
                activeOpacity: 0.8,
                onPress: onPressFavourite,
                style: [styles.favourite],
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                }
              },
              _react2.default.createElement(_reactNativeElements.Icon, {
                raised: true,
                name: 'star-border',
                color: isFavourite ? '#FFFFFF' : '#FDC12D',
                containerStyle: {
                  backgroundColor: isFavourite ? '#FDC12D' : '#FFFFFF'
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                }
              })
            )
          )
        )
      );
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  return RecipeCard;
}(_react.Component);

RecipeCard.componentName = 'RecipeCard';
RecipeCard.propTypes = {
  image: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  body: _propTypes2.default.string.isRequired,
  onPress: _propTypes2.default.func,
  onPressFavourite: _propTypes2.default.func,
  isFavourite: _propTypes2.default.bool
};
RecipeCard.defaultProps = {
  onPress: null,
  onPressFavourite: null,
  isFavourite: null
};
exports.default = RecipeCard;