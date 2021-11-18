import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TextDirectory} from 'helper/TextDirectory';
import {screens} from '@screens/screens';

import {MyBottomTab} from './MyBottomTab';
import {StatusBar} from 'react-native';

const Tab = createBottomTabNavigator();

const MyBottomNav = () => {
  return (
    <>
      <StatusBar
        hidden={false}
        translucent={false}
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <Tab.Navigator tabBar={(props) => <MyBottomTab {...props} />}>
        <Tab.Screen
          name={TextDirectory.bottomScreen.homeScreen}
          component={screens.bottom.HOME_SCREEN}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name={TextDirectory.bottomScreen.trademark}
          component={screens.bottom.TRADEMARK_SCREEN}
          options={{
            tabBarLabel: 'TradeMark',
          }}
        />
        <Tab.Screen
          name={TextDirectory.bottomScreen.favorite}
          component={screens.bottom.FAVORITE_SCREEN}
          options={{
            tabBarLabel: 'Favorite',
          }}
        />

        <Tab.Screen
          name={TextDirectory.bottomScreen.notification}
          component={screens.bottom.NOTIFICATION_SCREEN}
          options={{
            tabBarLabel: 'Notification',
          }}
        />

        <Tab.Screen
          name={TextDirectory.bottomScreen.user}
          component={screens.bottom.USER_SCREEN}
          options={{
            tabBarLabel: 'User',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MyBottomNav;
