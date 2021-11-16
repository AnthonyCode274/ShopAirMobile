import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TextDirectory} from 'helper/TextDirectory';
import AuthStack from './AuthStack';
import BottomNavigation from './BottomNavigation/BottomNavigation';

export default RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={TextDirectory.rootStack.authentication}>
        <Stack.Screen
          options={{headerShown: false}}
          name={TextDirectory.rootStack.authentication}
          component={AuthStack}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={TextDirectory.rootStack.bottom_navigation}
          component={BottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
