Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/components/general/Placeholder.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _theme = require('@theme/');

var _ui = require('@ui/');

var Placeholder = function Placeholder(_ref) {
  var text = _ref.text;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [_theme.AppStyles.container, _theme.AppStyles.containerCentered], __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    },
    _react2.default.createElement(
      _ui.Text,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      },
      text
    )
  );
};

Placeholder.propTypes = { text: _propTypes2.default.string };
Placeholder.defaultProps = { text: 'Coming soon...' };
Placeholder.componentName = 'Placeholder';

exports.default = Placeholder;