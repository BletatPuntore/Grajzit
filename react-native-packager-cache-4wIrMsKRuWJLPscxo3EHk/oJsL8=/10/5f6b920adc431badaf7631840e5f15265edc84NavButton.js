Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/node_modules/react-native-elements/src/header/NavButton.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _Icon = require('../icons/Icon');

var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

var NavButton = function NavButton(props) {
  var icon = props.icon,
      attributes = babelHelpers.objectWithoutProperties(props, ['icon']);


  return _react2.default.createElement(_Icon2.default, babelHelpers.extends({
    name: icon
  }, attributes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

exports.default = NavButton;