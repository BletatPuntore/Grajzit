/**
 * Tabs Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import Placeholder from '@components/general/Placeholder';
import Error from '@components/general/Error';
import StyleGuide from '@containers/StyleGuideView';
import Recipes from '@containers/recipes/Browse/BrowseContainer';
import RecipeView from '@containers/recipes/RecipeView';
import Preferences from '@containers/grid/Preferences';
import BusinessList from '@containers/grid/BusinessList';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
    <Scene
      {...navbarPropsTabs}
      key={'recipes'}
      title={'TheBigOff'}
      icon={props => TabIcon({ ...props, icon: 'home' })}
    >
      <Scene
        {...navbarPropsTabs}
        key={'recipesListing'}
        component={Recipes}
        title={'TheBigOff'}
        analyticsDesc={'Recipes: Browse Recipes'}
      />
      <Scene
        {...AppConfig.navbarProps}
        key={'recipeView'}
        component={RecipeView}
        getTitle={props => ((props.title) ? props.title : 'View TheBigOff')}
        analyticsDesc={'RecipeView: View TheBigOff'}
      />
    </Scene>

    <Scene
      key={'Preferences'}
      {...navbarPropsTabs}
      title={'Lista e Preferencave'}
      component={Preferences}
      icon={props => TabIcon({ ...props, icon: 'store' })}
      analyticsDesc={'Preferences: Preferences'}
    />

    <Scene
      key={'businessList'}
      {...navbarPropsTabs}
      title={'Lista e Bizneseve'}
      component={BusinessList}
      icon={props => TabIcon({ ...props, icon: 'face' })}
      analyticsDesc={'BusinessList: Business List'}
    />  

    <Scene
      key={'error'}
      {...navbarPropsTabs}
      title={'Example Error'}
      component={Error}
      icon={props => TabIcon({ ...props, icon: 'error' })}
      analyticsDesc={'Error: Example Error'}
    />
    

    <Scene
      key={'styleGuide'}
      {...navbarPropsTabs}
      title={'Style Guide'}
      component={StyleGuide}
      icon={props => TabIcon({ ...props, icon: 'settings' })}
      analyticsDesc={'StyleGuide: Style Guide'}
    />
  </Scene>
);

export default scenes;
