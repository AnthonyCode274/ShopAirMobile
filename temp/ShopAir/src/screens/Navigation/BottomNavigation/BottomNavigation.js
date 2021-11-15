import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TextDirectory} from 'helper/TextDirectory';
import {screens} from '@screens/screens';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      headerMode="none"
      initialRouteName={TextDirectory.bottomScreen.homeScreen}>
      <Tab.Screen
        name={TextDirectory.bottomScreen.homeScreen}
        component={screens.bottom_screen.HomeScreen}
      />
      <Tab.Screen
        name={TextDirectory.bottomScreen.trademark}
        component={screens.bottom_screen.TradeMarkScreen}
      />
      <Tab.Screen
        name={TextDirectory.bottomScreen.favorite}
        component={screens.bottom_screen.FavoriteScreen}
      />
      <Tab.Screen
        name={TextDirectory.bottomScreen.notification}
        component={screens.bottom_screen.NotificationScreen}
      />
      <Tab.Screen
        name={TextDirectory.bottomScreen.user}
        component={screens.bottom_screen.UserScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
