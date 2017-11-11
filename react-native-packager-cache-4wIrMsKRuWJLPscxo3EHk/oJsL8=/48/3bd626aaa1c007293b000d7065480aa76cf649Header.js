Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/node_modules/react-native-elements/src/header/Header.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _lodash = require('lodash.isempty');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _DummyNavButton = require('./DummyNavButton');

var _DummyNavButton2 = babelHelpers.interopRequireDefault(_DummyNavButton);

var _NavButton = require('./NavButton');

var _NavButton2 = babelHelpers.interopRequireDefault(_NavButton);

var _Title = require('./Title');

var _Title2 = babelHelpers.interopRequireDefault(_Title);

function generateChild(value, type) {
  if (_react2.default.isValidElement(value)) {
    return _react2.default.createElement(
      _reactNative.View,
      { key: type, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      value
    );
  } else if (typeof value === 'object' && !(0, _lodash2.default)(value)) {
    return type === 'center' ? _react2.default.createElement(_Title2.default, babelHelpers.extends({}, value, { key: type, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    })) : _react2.default.createElement(_NavButton2.default, babelHelpers.extends({}, value, { key: type, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }));
  }
  return type === 'center' ? null : _react2.default.createElement(_DummyNavButton2.default, { key: type, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  });
}

function populateChildren(propChildren) {
  var childrenArray = [];

  var leftComponent = generateChild(propChildren.leftComponent, 'left');
  var centerComponent = generateChild(propChildren.centerComponent, 'center');
  var rightComponent = generateChild(propChildren.rightComponent, 'right');

  childrenArray.push(leftComponent, centerComponent, rightComponent);

  return childrenArray;
}

var Header = function Header(props) {
  var children = props.children,
      statusBarProps = props.statusBarProps,
      leftComponent = props.leftComponent,
      centerComponent = props.centerComponent,
      rightComponent = props.rightComponent,
      backgroundColor = props.backgroundColor,
      outerContainerStyles = props.outerContainerStyles,
      innerContainerStyles = props.innerContainerStyles,
      attributes = babelHelpers.objectWithoutProperties(props, ['children', 'statusBarProps', 'leftComponent', 'centerComponent', 'rightComponent', 'backgroundColor', 'outerContainerStyles', 'innerContainerStyles']);


  var propChildren = [];

  if (leftComponent || centerComponent || rightComponent) {
    propChildren = populateChildren({
      leftComponent: leftComponent,
      centerComponent: centerComponent,
      rightComponent: rightComponent
    });
  }

  return _react2.default.createElement(
    _reactNative.View,
    babelHelpers.extends({
      style: [styles.outerContainer, { backgroundColor: backgroundColor }, outerContainerStyles]
    }, attributes, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    }),
    _react2.default.createElement(_reactNative.StatusBar, babelHelpers.extends({}, statusBarProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      }
    })),
    _react2.default.createElement(
      _reactNative.View,
      { style: [styles.innerContainer, innerContainerStyles], __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      },
      propChildren.length > 0 ? propChildren : children
    )
  );
};

var styles = _reactNative.StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  outerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    padding: 15,
    height: 70
  }
});

exports.default = Header;