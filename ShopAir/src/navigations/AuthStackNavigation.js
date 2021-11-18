import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '@screens/screens';
import {TextDirectory} from 'helper/TextDirectory';

// eslint-disable-next-line no-undef
const AuthStackScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={TextDirectory.onBroading}
      headerMode="none">
      <Stack.Screen
        name={TextDirectory.onBroading}
        component={screens.auth.ONBROADING}
      />
      <Stack.Screen name={TextDirectory.login} component={screens.auth.LOGIN} />
      <Stack.Screen
        name={TextDirectory.register}
        component={screens.auth.REGISTER}
      />
      <Stack.Screen
        name={TextDirectory.forgotPassword}
        component={screens.auth.RESET_PASSWORD}
      />
    </Stack.Navigator>
  );
};

export default AuthStackScreen;
