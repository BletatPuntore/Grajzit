Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = require('@theme/');

exports.default = {
  appName: 'Starter Kit',

  DEV: __DEV__,

  gaTrackingId: __DEV__ ? 'UA-84284256-2' : 'UA-84284256-1',

  urls: {},

  navbarProps: {
    hideNavBar: false,
    titleStyle: _theme.AppStyles.navbarTitle,
    navigationBarStyle: _theme.AppStyles.navbar,
    leftButtonIconStyle: _theme.AppStyles.navbarButton,
    rightButtonIconStyle: _theme.AppStyles.navbarButton,
    sceneStyle: {
      backgroundColor: _theme.AppColors.background,
      paddingTop: _theme.AppSizes.navbarHeight
    }
  }
};