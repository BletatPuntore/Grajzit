Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/components/ui/Spacer.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var Spacer = function Spacer(_ref) {
  var size = _ref.size;
  return _react2.default.createElement(_reactNative.View, {
    style: {
      left: 0,
      right: 0,
      height: 1,
      marginTop: size - 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  });
};

Spacer.propTypes = { size: _propTypes2.default.number };
Spacer.defaultProps = { size: 10 };
Spacer.componentName = 'Spacer';

exports.default = Spacer;