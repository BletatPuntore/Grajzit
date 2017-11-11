Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/containers/recipes/Browse/BrowseView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _reactNativeTabView = require('react-native-tab-view');

var _theme = require('@theme/');

var _ListingContainer = require('@containers/recipes/Listing/ListingContainer');

var _ListingContainer2 = babelHelpers.interopRequireDefault(_ListingContainer);

var _ui = require('@ui/');

var _Loading = require('@components/general/Loading');

var _Loading2 = babelHelpers.interopRequireDefault(_Loading);

var styles = _reactNative.StyleSheet.create({
  tabContainer: {
    flex: 1
  },
  tabbar: {
    backgroundColor: _theme.AppColors.brand.primary
  },
  tabbarIndicator: {
    backgroundColor: '#FFF'
  },
  tabbarText: {
    color: '#FFF'
  }
});

var loadingTimeout = void 0;

var RecipeTabs = function (_Component) {
  babelHelpers.inherits(RecipeTabs, _Component);

  function RecipeTabs(props) {
    babelHelpers.classCallCheck(this, RecipeTabs);

    var _this = babelHelpers.possibleConstructorReturn(this, (RecipeTabs.__proto__ || Object.getPrototypeOf(RecipeTabs)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      loading: true,
      visitedRoutes: []
    };
    return _this;
  }

  return RecipeTabs;
}(_react.Component);

RecipeTabs.componentName = 'RecipeTabs';
RecipeTabs.propTypes = {
  meals: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};
RecipeTabs.defaultProps = {
  meals: []
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.componentDidMount = function () {
    _reactNative.InteractionManager.runAfterInteractions(function () {
      _this2.setTabs();
    });
  };

  this.componentWillUnmount = function () {
    return clearTimeout(loadingTimeout);
  };

  this.setTabs = function () {
    var routes = [];
    var idx = 0;
    _this2.props.meals.forEach(function (meal) {
      routes.push({
        key: idx.toString(),
        id: meal.id.toString(),
        title: meal.title
      });

      idx += 1;
    });

    _this2.setState({
      navigation: {
        index: 0,
        routes: routes
      }
    }, function () {
      loadingTimeout = setTimeout(function () {
        _this2.setState({ loading: false });
      }, 100);
    });
  };

  this.handleChangeTab = function (index) {
    _this2.setState({
      navigation: babelHelpers.extends({}, _this2.state.navigation, { index: index })
    });
  };

  this.renderHeader = function (props) {
    return _react2.default.createElement(_reactNativeTabView.TabBar, babelHelpers.extends({}, props, {
      style: styles.tabbar,
      indicatorStyle: styles.tabbarIndicator,
      renderLabel: function renderLabel(scene) {
        return _react2.default.createElement(
          _ui.Text,
          { style: [styles.tabbarText], __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            }
          },
          scene.route.title
        );
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      }
    }));
  };

  this.renderScene = function (_ref) {
    var route = _ref.route;

    if (parseInt(route.key, 0) !== parseInt(_this2.state.navigation.index, 0) && _this2.state.visitedRoutes.indexOf(route.key) < 0) {
      return null;
    }

    if (_this2.state.visitedRoutes.indexOf(_this2.state.navigation.index) < 0) {
      _this2.state.visitedRoutes.push(route.key);
    }

    return _react2.default.createElement(
      _reactNative.View,
      { style: styles.tabContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      },
      _react2.default.createElement(_ListingContainer2.default, {
        meal: route.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      })
    );
  };

  this.render = function () {
    if (_this2.state.loading || !_this2.state.navigation) return _react2.default.createElement(_Loading2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      }
    });

    return _react2.default.createElement(_reactNativeTabView.TabViewAnimated, {
      style: [styles.tabContainer],
      renderScene: _this2.renderScene,
      renderHeader: _this2.renderHeader,
      navigationState: _this2.state.navigation,
      onRequestChangeTab: _this2.handleChangeTab,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      }
    });
  };
};

exports.default = RecipeTabs;