import React from 'react';
import {TextDirectory} from 'helper/TextDirectory';
import {screens} from '@screens/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={TextDirectory.onBroading}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TextDirectory.onBroading}
        component={screens.OnBroadingScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={TextDirectory.login}
        component={screens.LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={TextDirectory.register}
        component={screens.RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
