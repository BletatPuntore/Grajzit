Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/components/ui/FormValidationMessage.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNativeElements = require('react-native-elements');

var _theme = require('@theme/');

var CustomFormValidationMessage = function (_Component) {
  babelHelpers.inherits(CustomFormValidationMessage, _Component);

  function CustomFormValidationMessage() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, CustomFormValidationMessage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = CustomFormValidationMessage.__proto__ || Object.getPrototypeOf(CustomFormValidationMessage)).call.apply(_ref, [this].concat(args))), _this), _this.inputProps = function () {
      var props = babelHelpers.extends({}, _this.props, {
        containerStyle: [],
        labelStyle: [{
          marginLeft: 0,
          marginRight: 0,
          fontFamily: _theme.AppFonts.base.family
        }]
      });

      if (_this.props.containerStyle) {
        props.containerStyle.push(_this.props.containerStyle);
      }

      if (_this.props.labelStyle) {
        props.labelStyle.push(_this.props.labelStyle);
      }

      return props;
    }, _this.render = function () {
      return _react2.default.createElement(_reactNativeElements.FormValidationMessage, babelHelpers.extends({}, _this.inputProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }));
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  return CustomFormValidationMessage;
}(_react.Component);

CustomFormValidationMessage.propTypes = {
  containerStyle: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.shape({})]),
  labelStyle: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.shape({})])
};
CustomFormValidationMessage.defaultProps = {
  containerStyle: [],
  labelStyle: []
};
exports.default = CustomFormValidationMessage;