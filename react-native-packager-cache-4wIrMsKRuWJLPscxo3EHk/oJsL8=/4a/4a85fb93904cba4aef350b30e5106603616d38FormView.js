Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/containers/auth/Forms/FormView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _tcombFormNative = require('tcomb-form-native');

var _tcombFormNative2 = babelHelpers.interopRequireDefault(_tcombFormNative);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _theme = require('@theme/');

var _ui = require('@ui/');

var _TextInput = require('@components/tcomb/TextInput');

var _TextInput2 = babelHelpers.interopRequireDefault(_TextInput);

var regeneratorRuntime = require('regenerator-runtime');

var redirectTimeout = void 0;

var AuthForm = function (_Component) {
  babelHelpers.inherits(AuthForm, _Component);

  function AuthForm(props) {
    var _this2 = this;

    babelHelpers.classCallCheck(this, AuthForm);

    var _this = babelHelpers.possibleConstructorReturn(this, (AuthForm.__proto__ || Object.getPrototypeOf(AuthForm)).call(this, props));

    _this.componentDidMount = function _callee() {
      var values;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_this.getStoredCredentials());

            case 2:
              values = _context.sent;


              if (values !== null && values.email && values.password) {
                _this.setState({
                  form_values: babelHelpers.extends({}, _this.state.form_values, {
                    Email: values.email || '',
                    Password: values.password || ''
                  })
                });
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, null, _this2);
    };

    _this.componentWillUnmount = function () {
      return clearTimeout(redirectTimeout);
    };

    _this.getStoredCredentials = function _callee2() {
      var values, jsonValues;
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_reactNative.AsyncStorage.getItem('api/credentials'));

            case 2:
              values = _context2.sent;
              jsonValues = JSON.parse(values);
              return _context2.abrupt('return', jsonValues);

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, null, _this2);
    };

    _this.validEmail = _tcombFormNative2.default.refinement(_tcombFormNative2.default.String, function (email) {
      var regularExpression = /^.+@.+\..+$/i;

      return regularExpression.test(email);
    });
    _this.validPassword = _tcombFormNative2.default.refinement(_tcombFormNative2.default.String, function (password) {
      if (password.length < 8) return false;
      if (password.search(/\d/) === -1) return false;
      if (password.search(/[a-zA-Z]/) === -1) return false;
      return true;
    });

    _this.passwordsMatch = function (form) {
      var error = form.Password !== form.ConfirmPassword;

      _this.setState({
        options: _tcombFormNative2.default.update(_this.state.options, {
          fields: {
            ConfirmPassword: {
              hasError: { $set: error },
              error: { $set: error ? 'Passwords don\'t match' : '' }
            }
          }
        }),
        form_values: form
      });

      return error;
    };

    _this.handleSubmit = function () {
      var formData = _this.form.getValue();

      if (formData && formData.Password && formData.ConfirmPassword) {
        var passwordsDontMatch = _this.passwordsMatch(formData);
        if (passwordsDontMatch) return false;
      }

      if (formData) {
        _this.setState({ form_values: formData }, function () {
          _this.setState({ resultMsg: { status: 'One moment...' } });

          if (_this.scrollView) _this.scrollView.scrollTo({ y: 0 });

          if (_this.props.submit) {
            _this.props.submit(formData).then(function () {
              _this.setState({
                resultMsg: { success: _this.props.successMessage }
              }, function () {
                if (_this.props.onSuccessfulSubmit) {
                  return _this.props.onSuccessfulSubmit(formData, true).then(function () {
                    _reactNativeRouterFlux.Actions.app({ type: 'reset' });
                    _reactNativeRouterFlux.Actions.pop();
                  }).catch(function (err) {
                    return _this.setState({ resultMsg: { error: err.message } });
                  });
                }

                redirectTimeout = setTimeout(function () {
                  _reactNativeRouterFlux.Actions.app({ type: 'reset' });
                  _reactNativeRouterFlux.Actions.pop();
                }, 500);

                return true;
              });
            }).catch(function (err) {
              return _this.setState({ resultMsg: { error: err.message } });
            });
          } else {
            _this.setState({ resultMsg: { error: 'Submit function missing' } });
          }
        });
      }

      return true;
    };

    _this.render = function () {
      var Form = _tcombFormNative2.default.form.Form;

      return _react2.default.createElement(
        _reactNative.ScrollView,
        {
          automaticallyAdjustContentInsets: false,
          ref: function ref(a) {
            _this.scrollView = a;
          },
          style: [_theme.AppStyles.container],
          contentContainerStyle: [_theme.AppStyles.container],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          }
        },
        _react2.default.createElement(
          _ui.Card,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 253
            }
          },
          _react2.default.createElement(_ui.Alerts, {
            status: _this.state.resultMsg.status,
            success: _this.state.resultMsg.success,
            error: _this.state.resultMsg.error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 254
            }
          }),
          (!!_this.props.introTitle || !!_this.props.introText) && _react2.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 261
              }
            },
            !!_this.props.introTitle && _react2.default.createElement(
              _ui.Text,
              { h1: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 263
                }
              },
              _this.props.introTitle
            ),
            !!_this.props.introText && _react2.default.createElement(
              _ui.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 266
                }
              },
              _this.props.introText
            ),
            _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 269
              }
            })
          ),
          _react2.default.createElement(Form, {
            ref: function ref(b) {
              _this.form = b;
            },
            type: _this.state.form_fields,
            value: _this.state.form_values,
            options: _this.state.options,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 273
            }
          }),
          _react2.default.createElement(_ui.Spacer, { size: 20, __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            }
          }),
          _react2.default.createElement(_ui.Button, { title: _this.props.buttonTitle, onPress: _this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 282
            }
          }),
          _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
              fileName: _jsxFileName,
              lineNumber: 284
            }
          }),
          _this.props.formType === 'login' && _react2.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 287
              }
            },
            _react2.default.createElement(
              _reactNative.TouchableOpacity,
              { onPress: _reactNativeRouterFlux.Actions.passwordReset, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 288
                }
              },
              _react2.default.createElement(
                _ui.Text,
                { p: true, style: [_theme.AppStyles.textCenterAligned, _theme.AppStyles.link], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 289
                  }
                },
                'Forgot Password'
              )
            ),
            _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 294
              }
            }),
            _react2.default.createElement(
              _ui.Text,
              { p: true, style: [_theme.AppStyles.textCenterAligned], __source: {
                  fileName: _jsxFileName,
                  lineNumber: 296
                }
              },
              '- or -'
            ),
            _react2.default.createElement(_ui.Button, { outlined: true, title: 'Sign Up', onPress: _reactNativeRouterFlux.Actions.signUp, __source: {
                fileName: _jsxFileName,
                lineNumber: 300
              }
            })
          )
        ),
        _react2.default.createElement(_ui.Spacer, { size: 60, __source: {
            fileName: _jsxFileName,
            lineNumber: 305
          }
        })
      );
    };

    var formFields = {};
    if (props.formFields.indexOf('Email') > -1) formFields.Email = _this.validEmail;
    if (props.formFields.indexOf('Password') > -1) formFields.Password = _this.validPassword;
    if (props.formFields.indexOf('ConfirmPassword') > -1) formFields.ConfirmPassword = _this.validPassword;
    if (props.formFields.indexOf('FirstName') > -1) formFields.FirstName = _tcombFormNative2.default.String;
    if (props.formFields.indexOf('LastName') > -1) formFields.LastName = _tcombFormNative2.default.String;

    _this.state = {
      resultMsg: {
        status: '',
        success: '',
        error: ''
      },
      form_fields: _tcombFormNative2.default.struct(formFields),
      form_values: {
        Email: props.user && props.user.email ? props.user.email : '',
        FirstName: props.user && props.user.firstName ? props.user.firstName : '',
        LastName: props.user && props.user.lastName ? props.user.lastName : ''
      },
      options: {
        fields: {
          Email: {
            template: _TextInput2.default,
            error: 'Please enter a valid email',
            autoCapitalize: 'none',
            clearButtonMode: 'while-editing'
          },
          Password: {
            template: _TextInput2.default,
            error: 'Passwords must be more than 8 characters and contain letters and numbers',
            clearButtonMode: 'while-editing',
            secureTextEntry: true
          },
          ConfirmPassword: {
            template: _TextInput2.default,
            error: 'Your passwords must match',
            clearButtonMode: 'while-editing',
            secureTextEntry: true
          },
          FirstName: {
            template: _TextInput2.default,
            error: 'Please enter your first name',
            clearButtonMode: 'while-editing'
          },
          LastName: {
            template: _TextInput2.default,
            error: 'Please enter your first name',
            clearButtonMode: 'while-editing'
          }
        }
      }
    };
    return _this;
  }

  return AuthForm;
}(_react.Component);

AuthForm.componentName = 'Login';
AuthForm.propTypes = {
  user: _propTypes2.default.shape({
    email: _propTypes2.default.string,
    firstName: _propTypes2.default.string,
    lastName: _propTypes2.default.string
  }),
  submit: _propTypes2.default.func,
  onSuccessfulSubmit: _propTypes2.default.func,
  formType: _propTypes2.default.oneOf(['login', 'signUp', 'passwordReset', 'updateProfile']),
  formFields: _propTypes2.default.arrayOf(_propTypes2.default.string),
  buttonTitle: _propTypes2.default.string,
  successMessage: _propTypes2.default.string,
  introTitle: _propTypes2.default.string,
  introText: _propTypes2.default.string
};
AuthForm.defaultProps = {
  user: null,
  submit: null,
  onSuccessfulSubmit: null,
  formType: 'login',
  formFields: ['Email', 'Password'],
  buttonTitle: 'Login',
  successMessage: 'Awesome, you\'re now logged in',
  introTitle: null,
  introText: null
};
exports.default = AuthForm;