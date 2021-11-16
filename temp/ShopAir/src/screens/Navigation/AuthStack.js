import React from 'react';
import {TextDirectory} from 'helper/TextDirectory';
import {screens} from '@screens/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={TextDirectory.login}>
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

// async setBroading() {
//   try {
//     const value = await AsyncStorage.setItem('LOGGED', this.setState({value: 'LOGGED_VALUE'}));
//     if (value !== null) {
//       // let's go
//       console.log('Login');
//     } else {
//       console.log('Failed');
//     }
//   } catch (error) {
//     // Error retrieving data
//     console.log('Error:' + error.message);
//   }
// }

export default AuthStack;
