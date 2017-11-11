Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/components/ui/TabIcon.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNativeElements = require('react-native-elements');

var _theme = require('@theme/');

var TabIcon = function TabIcon(_ref) {
  var icon = _ref.icon,
      selected = _ref.selected;
  return _react2.default.createElement(_reactNativeElements.Icon, {
    name: icon,
    size: 26,
    color: selected ? _theme.AppColors.tabbar.iconSelected : _theme.AppColors.tabbar.iconDefault,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  });
};

TabIcon.propTypes = { icon: _propTypes2.default.string.isRequired, selected: _propTypes2.default.bool };
TabIcon.defaultProps = { icon: 'search', selected: false };

exports.default = TabIcon;