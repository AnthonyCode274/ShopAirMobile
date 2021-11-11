import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {TextDirectory} from 'helper/TextDirectory';
import {screens} from '@screens/screens';

const AppStackScreens = () => {
  const AppStack = createStackNavigator();

  return (
    <>
      <AppStack.Navigator
        headerMode="none"
        initialRouteName={TextDirectory.appStack.auth}>
        <AppStack.Screen
          name={TextDirectory.appStack.auth}
          component={screens.appStackScreen.AUTH}
        />
        <AppStack.Screen
          name={TextDirectory.appStack.bottomNav}
          component={screens.appStackScreen.BOTTOM_NAV}
        />
      </AppStack.Navigator>
    </>
  );
};

export default AppStackScreens;
