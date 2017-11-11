Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/components/general/Loading.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _theme = require('@theme/');

var _ui = require('@ui/');

var Loading = function Loading(_ref) {
  var text = _ref.text,
      transparent = _ref.transparent;
  return _react2.default.createElement(
    _reactNative.View,
    {
      style: [_theme.AppStyles.container, _theme.AppStyles.containerCentered, transparent && { backgroundColor: 'rgba(255,255,255,0.75)' }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    },
    _react2.default.createElement(_reactNative.ActivityIndicator, {
      animating: true,
      size: 'large',
      color: transparent ? '#000' : '#AAA',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }),
    _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    }),
    !!text && _react2.default.createElement(
      _ui.Text,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      },
      text
    )
  );
};

Loading.propTypes = { text: _propTypes2.default.string, transparent: _propTypes2.default.bool };
Loading.defaultProps = { text: null, transparent: false };
Loading.componentName = 'Loading';

exports.default = Loading;