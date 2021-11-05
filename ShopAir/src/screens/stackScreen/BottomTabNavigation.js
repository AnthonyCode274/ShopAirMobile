import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  DevSettings,
  Image,
} from 'react-native';

// import colors from Colors
import {Colors, Sizes} from '@assets';
import {TextDirectory} from 'helper/TextDirectory';
import {screens} from '@screens/screens';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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

      <Tab.Navigator
        initialRouteName={TextDirectory.bottomScreen.homescreen}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: Colors.lightGray,
          inactiveTintColor: Colors.colors.silver,
        }}>
        <Tab.Screen
          name={TextDirectory.bottomScreen.homescreen}
          component={screens.bottom.HOME_SCREEN}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={Sizes.iconBottom} />
              // <Image source={images_.default.shoesIcon} style={{width: 42, height: 42}} />
            ),
          }}
        />
        <Tab.Screen
          name={TextDirectory.bottomScreen.favorite}
          component={screens.bottom.FAVORITE_SCREEN}
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({color}) => (
              <FontAwesome5
                name="user-alt"
                color={color}
                size={Sizes.iconBottom}
              />
            ),
          }}
        />
        <Tab.Screen
          name={TextDirectory.bottomScreen.trademark}
          component={screens.bottom.TRADEMARK_SCREEN}
          options={{
            tabBarLabel: 'TradeMark',
            tabBarIcon: ({color}) => (
              <FontAwesome
                name="search"
                color={color}
                size={Sizes.iconBottom}
              />
            ),
          }}
        />

        <Tab.Screen
          name={TextDirectory.bottomScreen.notification}
          component={screens.bottom.NOTIFICATION_SCREEN}
          options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({color}) => (
              <FontAwesome5
                name="user-alt"
                color={color}
                size={Sizes.iconBottom}
              />
            ),
          }}
        />

        <Tab.Screen
          name={TextDirectory.bottomScreen.user}
          component={screens.bottom.USER_SCREEN}
          options={{
            tabBarLabel: 'User',
            tabBarIcon: ({color}) => (
              <FontAwesome5
                name="user-alt"
                color={color}
                size={Sizes.iconBottom}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MyBottomNav;
