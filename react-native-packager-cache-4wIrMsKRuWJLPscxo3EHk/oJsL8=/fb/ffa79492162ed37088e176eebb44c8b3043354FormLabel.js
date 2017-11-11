Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/components/ui/FormLabel.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNativeElements = require('react-native-elements');

var _theme = require('@theme/');

var CustomFormLabel = function (_Component) {
  babelHelpers.inherits(CustomFormLabel, _Component);

  function CustomFormLabel() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, CustomFormLabel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = CustomFormLabel.__proto__ || Object.getPrototypeOf(CustomFormLabel)).call.apply(_ref, [this].concat(args))), _this), _this.labelProps = function () {
      var props = babelHelpers.extends({}, _this.props, {
        labelStyle: [{
          color: _theme.AppColors.textPrimary,
          fontFamily: _theme.AppFonts.base.family,
          marginLeft: 0,
          marginRight: 0
        }]
      });

      if (_this.props.labelStyle) {
        props.labelStyle.push(_this.props.labelStyle);
      }

      return props;
    }, _this.render = function () {
      return _react2.default.createElement(
        _reactNativeElements.FormLabel,
        babelHelpers.extends({}, _this.labelProps(), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }),
        _this.props.children
      );
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  return CustomFormLabel;
}(_react.Component);

CustomFormLabel.propTypes = {
  labelStyle: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({})]),
  children: _propTypes2.default.node
};
CustomFormLabel.defaultProps = {
  containerStyle: [],
  labelStyle: [],
  children: null
};
exports.default = CustomFormLabel;