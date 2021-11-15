import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated, StatusBar, Image} from 'react-native';
import {Colors, images, useEffect} from '@assets';
import Block from '@components/Block';
import {useNavigation} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextDirectory} from 'helper/TextDirectory';

export default class OnBroadingScreen extends Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('JUST_ONE');
      if (value !== null) {
        this.props.navigation.navigate(TextDirectory.rootStack.bottom_navigation);
        // let's go
      } else {
        this.props.navigation.navigate(TextDirectory.login);
      }
    } catch (error) {
      // Error retrieving data
      console.log('Error:' + error.message);
    }
  }

  render() {
    return (
      <Animated.View style={styles.container}>
        <StatusBar />
        <Block flex alignCenter justifyCenter>
          <Block row alignEnd>
            <Image
              style={styles.logo}
              source={images.logo}
              resizeMode="contain"
            />
            <Image
              style={styles.ball}
              source={images.ball}
              resizeMode="contain"
            />
          </Block>
        </Block>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    width: 20,
    height: 20,
    marginLeft: -25,
  },
  logo: {
    width: 142,
    height: 142,
  },
});
