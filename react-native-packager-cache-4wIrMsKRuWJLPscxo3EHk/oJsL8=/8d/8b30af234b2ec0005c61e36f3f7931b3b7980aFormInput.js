Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/components/ui/FormInput.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNativeElements = require('react-native-elements');

var _theme = require('@theme/');

var CustomFormInput = function (_Component) {
  babelHelpers.inherits(CustomFormInput, _Component);

  function CustomFormInput() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, CustomFormInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = CustomFormInput.__proto__ || Object.getPrototypeOf(CustomFormInput)).call.apply(_ref, [this].concat(args))), _this), _this.inputProps = function () {
      var props = babelHelpers.extends({}, _this.props, {
        containerStyle: [{
          borderBottomColor: _theme.AppColors.border,
          borderBottomWidth: 1,
          backgroundColor: 'rgba(255,255,255,0.05)',
          marginTop: 10,
          marginLeft: 0,
          marginRight: 0
        }],
        inputStyle: [{
          color: _theme.AppColors.textPrimary,
          fontFamily: _theme.AppFonts.base.family,
          paddingHorizontal: 0,
          paddingVertical: 3
        }]
      });

      if (_this.props.containerStyle) {
        props.containerStyle.push(_this.props.containerStyle);
      }

      if (_this.props.inputStyle) {
        props.inputStyle.push(_this.props.inputStyle);
      }

      return props;
    }, _this.render = function () {
      return _react2.default.createElement(_reactNativeElements.FormInput, babelHelpers.extends({}, _this.inputProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }));
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  return CustomFormInput;
}(_react.Component);

CustomFormInput.propTypes = {
  containerStyle: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({})]),
  inputStyle: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({})])
};
CustomFormInput.defaultProps = {
  containerStyle: [],
  inputStyle: []
};
exports.default = CustomFormInput;