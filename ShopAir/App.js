import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStackScreens from '@screens/stackScreen/AppStackNavigation';
// import {screens} from '@screens/screens';
import NetWork from '@components/NetWork';
import Block from '@components/Block';
import apiCall from '@utils/apiCall';

export default class App extends Component {
  render() {
    return (
      <Block flex>
        <NavigationContainer>
          <AppStackScreens />
        </NavigationContainer>
        <NetWork />
      </Block>
    );
  }
}
