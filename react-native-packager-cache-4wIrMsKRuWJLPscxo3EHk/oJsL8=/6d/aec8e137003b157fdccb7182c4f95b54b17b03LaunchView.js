Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/containers/Launch/LaunchView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _theme = require('@theme/');

var styles = _reactNative.StyleSheet.create({
  launchImage: {
    width: _theme.AppSizes.screen.width,
    height: _theme.AppSizes.screen.height
  }
});

var AppLaunch = function (_Component) {
  babelHelpers.inherits(AppLaunch, _Component);

  function AppLaunch() {
    babelHelpers.classCallCheck(this, AppLaunch);

    var _this = babelHelpers.possibleConstructorReturn(this, (AppLaunch.__proto__ || Object.getPrototypeOf(AppLaunch)).call(this));

    _this.componentDidMount = function () {
      _reactNative.StatusBar.setHidden(false, true);

      Promise.all([_this.props.getMeals(), _this.props.getRecipes()]).then(function () {
        _this.props.login().then(function () {
          return _reactNativeRouterFlux.Actions.app({ type: 'reset' });
        }).catch(function () {
          return _reactNativeRouterFlux.Actions.authenticate({ type: 'reset' });
        });
      }).catch(function (err) {
        return _reactNative.Alert.alert(err.message);
      });
    };

    _this.render = function () {
      return _react2.default.createElement(
        _reactNative.View,
        { style: [_theme.AppStyles.container], __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        },
        _react2.default.createElement(
          _reactNative.Image,
          {
            source: require('../../images/launch.jpg'),
            style: [styles.launchImage, _theme.AppStyles.containerCentered],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          },
          _react2.default.createElement(_reactNative.ActivityIndicator, {
            animating: true,
            size: 'large',
            color: '#C1C5C8',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          })
        )
      );
    };

    console.ignoredYellowBox = ['Setting a timer'];
    return _this;
  }

  return AppLaunch;
}(_react.Component);

AppLaunch.componentName = 'AppLaunch';
AppLaunch.propTypes = {
  login: _propTypes2.default.func.isRequired,
  getRecipes: _propTypes2.default.func.isRequired,
  getMeals: _propTypes2.default.func.isRequired
};
exports.default = AppLaunch;