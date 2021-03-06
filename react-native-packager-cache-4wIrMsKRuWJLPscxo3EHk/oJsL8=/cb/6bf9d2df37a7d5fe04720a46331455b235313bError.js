Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/components/general/Error.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var _theme = require('@theme/');

var _ui = require('@ui/');

var Error = function Error(_ref) {
  var text = _ref.text,
      tryAgain = _ref.tryAgain;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [_theme.AppStyles.container, _theme.AppStyles.containerCentered], __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    },
    _react2.default.createElement(_Ionicons2.default, { name: 'ios-alert-outline', size: 50, color: '#CCC', __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }),
    _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }),
    _react2.default.createElement(
      _ui.Text,
      { style: _theme.AppStyles.textCenterAligned, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      },
      text
    ),
    _react2.default.createElement(_ui.Spacer, { size: 20, __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }),
    !!tryAgain && _react2.default.createElement(_ui.Button, {
      small: true,
      outlined: true,
      title: 'Try again',
      onPress: tryAgain,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    })
  );
};

Error.propTypes = { text: _propTypes2.default.string, tryAgain: _propTypes2.default.func };
Error.defaultProps = { text: 'Woops, Something went wrong.', tryAgain: null };
Error.componentName = 'Error';

exports.default = Error;