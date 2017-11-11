Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/components/ui/Card.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNativeElements = require('react-native-elements');

var _theme = require('@theme/');

var CustomCard = function (_Component) {
  babelHelpers.inherits(CustomCard, _Component);

  function CustomCard() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, CustomCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = CustomCard.__proto__ || Object.getPrototypeOf(CustomCard)).call.apply(_ref, [this].concat(args))), _this), _this.cardProps = function () {
      var props = babelHelpers.extends({
        dividerStyle: [{
          backgroundColor: _theme.AppColors.border
        }]
      }, _this.props, {
        containerStyle: [{
          backgroundColor: _theme.AppColors.cardBackground,
          borderRadius: _theme.AppSizes.borderRadius,
          borderColor: _theme.AppColors.border
        }],
        titleStyle: [_theme.AppStyles.h2, { marginBottom: 15 }]
      });

      if (_this.props.containerStyle) {
        props.containerStyle.push(_this.props.containerStyle);
      }

      if (_this.props.titleStyle) {
        props.titleStyle.push(_this.props.titleStyle);
      }

      return props;
    }, _this.render = function () {
      return _react2.default.createElement(_reactNativeElements.Card, babelHelpers.extends({}, _this.cardProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }));
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  return CustomCard;
}(_react.Component);

CustomCard.propTypes = {
  containerStyle: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({})]),
  titleStyle: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({})])
};
CustomCard.defaultProps = {
  containerStyle: [],
  titleStyle: []
};
exports.default = CustomCard;