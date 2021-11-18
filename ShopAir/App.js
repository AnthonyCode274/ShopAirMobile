import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from '@navigations/RootStack';
// import {screens} from '@screens/screens';
import NetWork from '@components/NetWork';
import Block from '@components/Block';

export default class App extends Component {
  render() {
    return (
      <Block flex>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
        <NetWork />
      </Block>
    );
  }
}
