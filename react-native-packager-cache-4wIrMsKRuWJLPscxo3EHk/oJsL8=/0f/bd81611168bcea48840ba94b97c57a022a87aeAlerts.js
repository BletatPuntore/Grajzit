Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/components/ui/Alerts.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _ui = require('@ui/');

var styles = _reactNative.StyleSheet.create({
  alerts: {
    left: 0,
    right: 0
  },

  msg: {
    right: 0,
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderLeftWidth: 3,
    borderColor: '#1C854C',
    backgroundColor: '#59DC9A'
  },
  msg_text: {
    textAlign: 'center',
    color: '#16693c',
    fontWeight: '500'
  },

  msgError: {
    borderColor: '#C02827',
    backgroundColor: '#FB6567'
  },
  msgError_text: {
    color: '#7f1a1a'
  },

  msgStatus: {
    borderColor: '#408491',
    backgroundColor: '#8EDBE5'
  },
  msgStatus_text: {
    color: '#2f606a'
  }
});

var Alerts = function Alerts(_ref) {
  var status = _ref.status,
      success = _ref.success,
      error = _ref.error;
  return _react2.default.createElement(
    _reactNative.View,
    { style: styles.alerts, __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      }
    },
    !!success && _react2.default.createElement(
      _reactNative.View,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      },
      _react2.default.createElement(
        _reactNative.View,
        { style: [styles.msg], __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        },
        _react2.default.createElement(
          _ui.Text,
          { style: [styles.msg_text], __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          },
          success
        )
      ),
      _react2.default.createElement(_ui.Spacer, { size: 20, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })
    ),
    !!status && _react2.default.createElement(
      _reactNative.View,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      },
      _react2.default.createElement(
        _reactNative.View,
        { style: [styles.msg, styles.msgStatus], __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        },
        _react2.default.createElement(
          _ui.Text,
          { style: [styles.msg_text, styles.msgStatus_text], __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          },
          status
        )
      ),
      _react2.default.createElement(_ui.Spacer, { size: 20, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })
    ),
    !!error && _react2.default.createElement(
      _reactNative.View,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      },
      _react2.default.createElement(
        _reactNative.View,
        { style: [styles.msg, styles.msgError], __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        },
        _react2.default.createElement(
          _ui.Text,
          {
            style: [styles.msg_text, styles.msgError_text],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          },
          error
        )
      ),
      _react2.default.createElement(_ui.Spacer, { size: 20, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      })
    )
  );
};

Alerts.propTypes = {
  status: _propTypes2.default.string,
  success: _propTypes2.default.string,
  error: _propTypes2.default.string
};

Alerts.defaultProps = {
  status: '',
  success: '',
  error: ''
};

Alerts.componentName = 'Alerts';

exports.default = Alerts;