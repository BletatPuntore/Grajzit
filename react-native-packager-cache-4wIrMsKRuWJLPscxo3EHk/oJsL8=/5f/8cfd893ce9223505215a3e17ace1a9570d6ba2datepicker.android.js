var _jsxFileName = "/home/qendrim/Desktop/Fin/node_modules/tcomb-form-native/lib/templates/bootstrap/datepicker.android.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

function datepicker(locals) {
  if (locals.hidden) {
    return null;
  }

  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var datepickerStyle = stylesheet.datepicker.normal;
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;
  var dateValueStyle = stylesheet.dateValue.normal;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    datepickerStyle = stylesheet.datepicker.error;
    helpBlockStyle = stylesheet.helpBlock.error;
    dateValueStyle = stylesheet.dateValue.error;
  }

  var datePickerMode = locals.mode;
  if (datePickerMode !== "date" && datePickerMode !== "time" && datePickerMode !== "datetime") {
    throw new Error("Unrecognized date picker format " + datePickerMode);
  }

  var formattedValue = String(locals.value);
  var background = _reactNative.TouchableNativeFeedback.SelectableBackground();
  var dialogMode = "default";
  var formattedDateValue = locals.value.toDateString();
  var formattedTimeValue = locals.value.toTimeString();
  if (locals.config) {
    if (locals.config.format) {
      formattedValue = locals.config.format(locals.value);
    }
    if (locals.config.background) {
      background = locals.config.background;
    }
    if (locals.config.dialogMode) {
      dialogMode = locals.config.dialogMode;
    }
    if (locals.config.dateFormat) {
      formattedDateValue = locals.config.dateFormat(locals.value);
    }
    if (locals.config.timeFormat) {
      formattedTimeValue = locals.config.timeFormat(locals.value);
    }
  }

  var label = locals.label ? _react2.default.createElement(
    _reactNative.Text,
    { style: controlLabelStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      }
    },
    locals.label
  ) : null;
  var help = locals.help ? _react2.default.createElement(
    _reactNative.Text,
    { style: helpBlockStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      }
    },
    locals.help
  ) : null;
  var error = locals.hasError && locals.error ? _react2.default.createElement(
    _reactNative.Text,
    { accessibilityLiveRegion: "polite", style: errorBlockStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      }
    },
    locals.error
  ) : null;
  var value = locals.value ? _react2.default.createElement(
    _reactNative.Text,
    { style: dateValueStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      }
    },
    formattedValue
  ) : null;

  return _react2.default.createElement(
    _reactNative.View,
    { style: formGroupStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      }
    },
    datePickerMode === "datetime" ? _react2.default.createElement(
      _reactNative.View,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      },
      label,
      _react2.default.createElement(
        _reactNative.TouchableNativeFeedback,
        {
          accessible: true,
          disabled: locals.disabled,
          ref: "input",
          background: background,
          onPress: function onPress() {
            var config = {
              date: locals.value || new Date(),
              mode: dialogMode
            };
            if (locals.minimumDate) {
              config.minDate = locals.minimumDate;
            }
            if (locals.maximumDate) {
              config.maxDate = locals.maximumDate;
            }
            _reactNative.DatePickerAndroid.open(config).then(function (date) {
              if (date.action !== _reactNative.DatePickerAndroid.dismissedAction) {
                var newDate = new Date(locals.value);
                newDate.setFullYear(date.year, date.month, date.day);
                locals.onChange(newDate);
              }
            });
            if (typeof locals.onPress === "function") {
              locals.onPress();
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            }
          },
          _react2.default.createElement(
            _reactNative.Text,
            { style: dateValueStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              }
            },
            formattedDateValue
          )
        )
      ),
      _react2.default.createElement(
        _reactNative.TouchableNativeFeedback,
        {
          accessible: true,
          disabled: locals.disabled,
          ref: "input",
          background: background,
          onPress: function onPress() {
            var now = new Date();
            var isDate = locals.value && locals.value instanceof Date;
            var setTime = {
              hour: isDate ? locals.value.getHours() : now.getHours(),
              minute: isDate ? locals.value.getMinutes() : now.getMinutes()
            };
            _reactNative.TimePickerAndroid.open({
              is24Hour: true,
              hour: setTime.hour,
              minute: setTime.minute
            }).then(function (time) {
              if (time.action !== _reactNative.TimePickerAndroid.dismissedAction) {
                var newTime = new Date(locals.value);
                newTime.setHours(time.hour);
                newTime.setMinutes(time.minute);
                locals.onChange(newTime);
              }
            });
            if (typeof locals.onPress === "function") {
              locals.onPress();
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            }
          },
          _react2.default.createElement(
            _reactNative.Text,
            { style: dateValueStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              }
            },
            formattedTimeValue
          )
        )
      )
    ) : _react2.default.createElement(
      _reactNative.TouchableNativeFeedback,
      {
        accessible: true,
        disabled: locals.disabled,
        ref: "input",
        background: background,
        onPress: function onPress() {
          if (datePickerMode === "time") {
            var now = new Date();
            var isDate = locals.value && locals.value instanceof Date;
            var setTime = {
              hour: isDate ? locals.value.getHours() : now.getHours(),
              minute: isDate ? locals.value.getMinutes() : now.getMinutes()
            };
            _reactNative.TimePickerAndroid.open({
              is24Hour: true,
              hour: setTime.hour,
              minute: setTime.minute
            }).then(function (time) {
              if (time.action !== _reactNative.TimePickerAndroid.dismissedAction) {
                var newTime = new Date();
                newTime.setHours(time.hour);
                newTime.setMinutes(time.minute);
                locals.onChange(newTime);
              }
            });
          } else if (datePickerMode === "date") {
            var config = {
              date: locals.value || new Date(),
              mode: dialogMode
            };
            if (locals.minimumDate) {
              config.minDate = locals.minimumDate;
            }
            if (locals.maximumDate) {
              config.maxDate = locals.maximumDate;
            }
            _reactNative.DatePickerAndroid.open(config).then(function (date) {
              if (date.action !== _reactNative.DatePickerAndroid.dismissedAction) {
                var newDate = new Date(date.year, date.month, date.day);
                locals.onChange(newDate);
              }
            });
          }
          if (typeof locals.onPress === "function") {
            locals.onPress();
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      },
      _react2.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          }
        },
        label,
        value
      )
    ),
    help,
    error
  );
}

module.exports = datepicker;