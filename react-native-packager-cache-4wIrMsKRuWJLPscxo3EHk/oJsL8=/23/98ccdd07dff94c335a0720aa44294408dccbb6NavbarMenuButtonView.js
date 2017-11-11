Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/containers/ui/NavbarMenuButton/NavbarMenuButtonView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var NavbarMenuButton = function NavbarMenuButton(_ref) {
  var toggleSideMenu = _ref.toggleSideMenu,
      user = _ref.user;
  return _react2.default.createElement(
    _reactNative.TouchableOpacity,
    {
      onPress: toggleSideMenu,
      activeOpacity: 0.7,
      style: { top: -2 },
      hitSlop: { top: 7, right: 7, bottom: 7, left: 7 },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    _react2.default.createElement(_Ionicons2.default, { name: user && user.email ? 'ios-contact' : 'ios-contact-outline', size: 30, color: '#FFF', __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    })
  );
};

NavbarMenuButton.propTypes = {
  toggleSideMenu: _propTypes2.default.func.isRequired,
  user: _propTypes2.default.shape({
    email: _propTypes2.default.String
  })
};

NavbarMenuButton.defaultProps = {
  user: null
};

exports.default = NavbarMenuButton;