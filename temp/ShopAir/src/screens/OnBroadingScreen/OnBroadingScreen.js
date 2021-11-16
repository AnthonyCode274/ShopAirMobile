import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Animated, StatusBar, Image} from 'react-native';
import {Colors, images} from '@assets';
import Block from '@components/Block';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextDirectory} from 'helper/TextDirectory';
import auth from '@react-native-firebase/auth';
import LoginScreen from '@screens/LoginScreen/LoginScreen';

const OnBroadingScreen = () => {
  const navigation = useNavigation();
  // Set an initializing state whilst Firebase connects
  const [timerCount, setTimer] = useState(3);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => {
      clearInterval(interval);
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    };
  }, []);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  // if (initializing) return null;
  if (timerCount === 0 && !user) {
    return <LoginScreen />
  }

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
