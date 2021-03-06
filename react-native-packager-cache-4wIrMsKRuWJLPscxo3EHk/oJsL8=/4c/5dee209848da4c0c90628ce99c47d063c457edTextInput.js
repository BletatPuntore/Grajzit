var _jsxFileName = '/home/qendrim/Desktop/Fin/src/components/tcomb/TextInput.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ui = require('@ui/');

function textbox(locals) {
  if (locals.hidden) {
    return null;
  }

  return _react2.default.createElement(
    _reactNative.View,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    !!locals.label && _react2.default.createElement(
      _ui.FormLabel,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      locals.label
    ),
    _react2.default.createElement(_ui.FormInput, {
      accessibilityLabel: locals.label,
      autoCapitalize: locals.autoCapitalize,
      autoCorrect: locals.autoCorrect,
      autoFocus: locals.autoFocus,
      blurOnSubmit: locals.blurOnSubmit,
      editable: locals.editable,
      keyboardType: locals.keyboardType,
      maxLength: locals.maxLength,
      multiline: locals.multiline,
      onBlur: locals.onBlur,
      onEndEditing: locals.onEndEditing,
      onFocus: locals.onFocus,
      onLayout: locals.onLayout,
      onSelectionChange: locals.onSelectionChange,
      onSubmitEditing: locals.onSubmitEditing,
      onContentSizeChange: locals.onContentSizeChange,
      placeholderTextColor: locals.placeholderTextColor,
      secureTextEntry: locals.secureTextEntry,
      selectTextOnFocus: locals.selectTextOnFocus,
      selectionColor: locals.selectionColor,
      numberOfLines: locals.numberOfLines,
      underlineColorAndroid: locals.underlineColorAndroid,
      clearButtonMode: locals.clearButtonMode,
      clearTextOnFocus: locals.clearTextOnFocus,
      enablesReturnKeyAutomatically: locals.enablesReturnKeyAutomatically,
      keyboardAppearance: locals.keyboardAppearance,
      onKeyPress: locals.onKeyPress,
      returnKeyType: locals.returnKeyType,
      selectionState: locals.selectionState,
      onChangeText: function onChangeText(value) {
        return locals.onChange(value);
      },
      onChange: locals.onChangeNative,
      placeholder: locals.placeholder,
      value: locals.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }),
    !!locals.error && _react2.default.createElement(
      _ui.FormValidationMessage,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      },
      locals.error
    )
  );
}

module.exports = textbox;