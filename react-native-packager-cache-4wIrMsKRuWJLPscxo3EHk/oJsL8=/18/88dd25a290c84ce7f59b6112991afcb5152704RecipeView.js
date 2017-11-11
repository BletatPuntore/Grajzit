Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/containers/recipes/RecipeView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _theme = require('@theme/');

var _ui = require('@ui/');

var styles = _reactNative.StyleSheet.create({
  featuredImage: {
    left: 0,
    right: 0,
    height: _theme.AppSizes.screen.height * 0.2,
    resizeMode: 'cover'
  }
});

var RecipeView = function (_Component) {
  babelHelpers.inherits(RecipeView, _Component);

  function RecipeView() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, RecipeView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = RecipeView.__proto__ || Object.getPrototypeOf(RecipeView)).call.apply(_ref, [this].concat(args))), _this), _this.renderIngredients = function (ingredients) {
      var jsx = [];
      var iterator = 1;

      ingredients.forEach(function (item) {
        jsx.push(_react2.default.createElement(
          _reactNative.View,
          { key: 'ingredient-' + iterator, style: [_theme.AppStyles.row], __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            _react2.default.createElement(
              _ui.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              },
              ' - '
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: [_theme.AppStyles.paddingLeftSml, _theme.AppStyles.flex1], __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            _react2.default.createElement(
              _ui.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              },
              item.toString()
            )
          )
        ));
        iterator += 1;
      });

      return jsx;
    }, _this.renderMethod = function (method) {
      var jsx = [];
      var iterator = 1;

      method.forEach(function (item) {
        jsx.push(_react2.default.createElement(
          _reactNative.View,
          { key: 'method-' + iterator, style: [_theme.AppStyles.row], __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              }
            },
            _react2.default.createElement(
              _ui.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 81
                }
              },
              ' ',
              iterator,
              '. '
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: [_theme.AppStyles.paddingBottomSml, _theme.AppStyles.paddingLeftSml, _theme.AppStyles.flex1], __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            },
            _react2.default.createElement(
              _ui.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                }
              },
              item.toString()
            )
          )
        ));
        iterator += 1;
      });

      return jsx;
    }, _this.render = function () {
      var _this$props$recipe = _this.props.recipe,
          title = _this$props$recipe.title,
          body = _this$props$recipe.body,
          image = _this$props$recipe.image,
          ingredients = _this$props$recipe.ingredients,
          method = _this$props$recipe.method;


      return _react2.default.createElement(
        _reactNative.ScrollView,
        { style: [_theme.AppStyles.container], __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        },
        image !== '' && _react2.default.createElement(_reactNative.Image, {
          source: { uri: image },
          style: [styles.featuredImage],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }),
        _react2.default.createElement(
          _ui.Card,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            }
          },
          _react2.default.createElement(
            _ui.Text,
            { h2: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 106
              }
            },
            title.rendered
          ),
          _react2.default.createElement(
            _ui.Text,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            },
            body
          )
        ),
        ingredients ? _react2.default.createElement(
          _ui.Card,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            }
          },
          _react2.default.createElement(
            _ui.Text,
            { h2: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              }
            },
            'Ingredients'
          ),
          _this.renderIngredients(ingredients)
        ) : null,
        method ? _react2.default.createElement(
          _ui.Card,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            }
          },
          _react2.default.createElement(
            _ui.Text,
            { h2: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              }
            },
            'Method'
          ),
          _this.renderMethod(method)
        ) : null,
        _react2.default.createElement(_ui.Spacer, { size: 20, __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        })
      );
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  return RecipeView;
}(_react.Component);

RecipeView.componentName = 'RecipeView';
RecipeView.propTypes = {
  recipe: _propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    title: _propTypes2.default.string.isRequired,
    body: _propTypes2.default.string.isRequired,
    image: _propTypes2.default.string,
    ingredients: _propTypes2.default.arrayOf(_propTypes2.default.string),
    method: _propTypes2.default.arrayOf(_propTypes2.default.string)
  }).isRequired
};
exports.default = RecipeView;