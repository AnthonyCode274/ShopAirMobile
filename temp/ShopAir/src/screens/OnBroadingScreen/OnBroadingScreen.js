import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Animated, StatusBar, Image} from 'react-native';
import {Colors, images} from '@assets';
import Block from '@components/Block';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextDirectory} from 'helper/TextDirectory';

const OnBroadingScreen = () => {
  const navigation = useNavigation();
  const [timerCount, setTimer] = useState(3);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timerCount === 0) {
      navigation.navigate(TextDirectory.login)
    } else {
      navigation.navigate(TextDirectory.onBroading)
    }
  }, [timerCount]);

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
};

export default OnBroadingScreen;

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
