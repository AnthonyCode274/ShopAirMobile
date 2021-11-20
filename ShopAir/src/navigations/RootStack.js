import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TextDirectory} from 'helper/TextDirectory';
import {screens} from '@screens/screens';

const RootStack = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={TextDirectory.rootStack.auth}>
        <Stack.Screen
          name={TextDirectory.rootStack.auth}
          component={screens.ROOT_STACK.AUTH}
        />
        <Stack.Screen
          name={TextDirectory.rootStack.bottomNav}
          component={screens.ROOT_STACK.BOTTOM_NAV}
        />
        <Stack.Screen
          name={TextDirectory.card.destailScreen}
          component={screens.stackScreen.DetailsItemSelected}
        />
        <Stack.Screen
          name={TextDirectory.card.shopCart}
          component={screens.stackScreen.ShopCart}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
