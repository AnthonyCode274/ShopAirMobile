import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '@screens/screens';
import {TextDirectory} from 'helper/TextDirectory';

// eslint-disable-next-line no-undef
export default AuthStackScreen = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      initialRouteName={TextDirectory.onBroading}
      headerMode="none">
      <AuthStack.Screen
        name={TextDirectory.onBroading}
        component={screens.auth.ONBROADING}
      />
      <AuthStack.Screen
        name={TextDirectory.login}
        component={screens.auth.LOGIN}
      />
      <AuthStack.Screen
        name={TextDirectory.register}
        component={screens.auth.REGISTER}
      />
    </AuthStack.Navigator>
  );
};
