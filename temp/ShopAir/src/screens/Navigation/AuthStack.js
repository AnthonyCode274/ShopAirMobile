import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextDirectory} from 'helper/TextDirectory';
import {screens} from '@screens/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class AuthStack extends Component {
  state = {
    routeName: '',
  };

  render() {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator
        headerMode="none"
        initialRouteName={this.state.routeName}>
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
  }
}

const styles = StyleSheet.create({});
