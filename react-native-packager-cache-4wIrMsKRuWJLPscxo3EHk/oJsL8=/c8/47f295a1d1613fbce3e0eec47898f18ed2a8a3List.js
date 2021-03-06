Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/components/ui/List.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNativeElements = require('react-native-elements');

var _theme = require('@theme/');

var CustomList = function (_Component) {
  babelHelpers.inherits(CustomList, _Component);

  function CustomList() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, CustomList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = CustomList.__proto__ || Object.getPrototypeOf(CustomList)).call.apply(_ref, [this].concat(args))), _this), _this.listProps = function () {
      var props = babelHelpers.extends({}, _this.props, {
        containerStyle: [{
          margin: 0,
          backgroundColor: _theme.AppColors.background,
          borderTopColor: _theme.AppColors.border,
          borderBottomWidth: 0
        }]
      });

      if (_this.props.containerStyle) {
        props.containerStyle.push(_this.props.containerStyle);
      }

      return props;
    }, _this.render = function () {
      return _react2.default.createElement(_reactNativeElements.List, babelHelpers.extends({}, _this.listProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }));
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  return CustomList;
}(_react.Component);

CustomList.propTypes = {
  containerStyle: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({})])
};
CustomList.defaultProps = {
  containerStyle: []
};
exports.default = CustomList;