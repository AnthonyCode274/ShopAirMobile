import React, {Component} from 'react';
import {Text, View, Animated, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class LoginScreen extends Component {
  state = {
    value: 'Passed value',
  };

  componentDidMount() {}

  login() {
    this.setBroading();
  }

  render() {
    return (
      <Animated.View>
        <SafeAreaView>
          <TouchableOpacity onPress={() => this.login()}>
            <Text> Login </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Animated.View>
    );
  }

  async setBroading() {
    try {
      const value = await AsyncStorage.setItem('JUST_ONE', this.state.value);
      if (value !== null) {
        // let's go
        console.log('1');
      } else {
        console.log('2');
      }
    } catch (error) {
      // Error retrieving data
      console.log('Error:' + error.message);
    }
  }
}
