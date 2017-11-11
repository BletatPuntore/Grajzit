Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/navigation/tabs.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _constants = require('@constants/');

var _theme = require('@theme/');

var _ui = require('@ui/');

var _NavbarMenuButtonContainer = require('@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer');

var _Placeholder = require('@components/general/Placeholder');

var _Placeholder2 = babelHelpers.interopRequireDefault(_Placeholder);

var _Error = require('@components/general/Error');

var _Error2 = babelHelpers.interopRequireDefault(_Error);

var _StyleGuideView = require('@containers/StyleGuideView');

var _StyleGuideView2 = babelHelpers.interopRequireDefault(_StyleGuideView);

var _BrowseContainer = require('@containers/recipes/Browse/BrowseContainer');

var _BrowseContainer2 = babelHelpers.interopRequireDefault(_BrowseContainer);

var _RecipeView = require('@containers/recipes/RecipeView');

var _RecipeView2 = babelHelpers.interopRequireDefault(_RecipeView);

var navbarPropsTabs = babelHelpers.extends({}, _constants.AppConfig.navbarProps, {
  renderLeftButton: function renderLeftButton() {
    return _react2.default.createElement(_NavbarMenuButtonContainer.NavbarMenuButton, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    });
  },
  sceneStyle: babelHelpers.extends({}, _constants.AppConfig.navbarProps.sceneStyle, {
    paddingBottom: _theme.AppSizes.tabbarHeight
  })
});

var scenes = _react2.default.createElement(
  _reactNativeRouterFlux.Scene,
  { key: 'tabBar', tabs: true, tabBarIconContainerStyle: _theme.AppStyles.tabbar, pressOpacity: 0.95, __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  },
  _react2.default.createElement(
    _reactNativeRouterFlux.Scene,
    babelHelpers.extends({}, navbarPropsTabs, {
      key: 'recipes',
      title: 'TheBigOff',
      icon: function icon(props) {
        return (0, _ui.TabIcon)(babelHelpers.extends({}, props, { icon: 'search' }));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }),
    _react2.default.createElement(_reactNativeRouterFlux.Scene, babelHelpers.extends({}, navbarPropsTabs, {
      key: 'recipesListing',
      component: _BrowseContainer2.default,
      title: 'TheBigOff',
      analyticsDesc: 'Recipes: Browse Recipes',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    })),
    _react2.default.createElement(_reactNativeRouterFlux.Scene, babelHelpers.extends({}, _constants.AppConfig.navbarProps, {
      key: 'recipeView',
      component: _RecipeView2.default,
      getTitle: function getTitle(props) {
        return props.title ? props.title : 'View TheBigOff';
      },
      analyticsDesc: 'RecipeView: View TheBigOff',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }))
  ),
  _react2.default.createElement(_reactNativeRouterFlux.Scene, babelHelpers.extends({
    key: 'timeline'
  }, navbarPropsTabs, {
    title: 'Coming Soon',
    component: _Placeholder2.default,
    icon: function icon(props) {
      return (0, _ui.TabIcon)(babelHelpers.extends({}, props, { icon: 'timeline' }));
    },
    analyticsDesc: 'Placeholder: Coming Soon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  })),
  _react2.default.createElement(_reactNativeRouterFlux.Scene, babelHelpers.extends({
    key: 'error'
  }, navbarPropsTabs, {
    title: 'Example Error',
    component: _Error2.default,
    icon: function icon(props) {
      return (0, _ui.TabIcon)(babelHelpers.extends({}, props, { icon: 'error' }));
    },
    analyticsDesc: 'Error: Example Error',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  })),
  _react2.default.createElement(_reactNativeRouterFlux.Scene, babelHelpers.extends({
    key: 'styleGuide'
  }, navbarPropsTabs, {
    title: 'Style Guide',
    component: _StyleGuideView2.default,
    icon: function icon(props) {
      return (0, _ui.TabIcon)(babelHelpers.extends({}, props, { icon: 'speaker-notes' }));
    },
    analyticsDesc: 'StyleGuide: Style Guide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }))
);

exports.default = scenes;