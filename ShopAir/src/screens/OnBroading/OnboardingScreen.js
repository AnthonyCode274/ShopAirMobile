import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Animated, StatusBar, Image} from 'react-native';
import {Colors, images} from '@assets';
import Block from '@components/Block';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextDirectory} from 'helper/TextDirectory';
import auth from '@react-native-firebase/auth';
import LoginScreen from '@screens/LoginScreen/LoginScreen';

const OnBroading = ({navigation}) => {
  // const navigation = useNavigation();
  // Set an initializing state whilst Firebase connects
  const [timerCount, setTimer] = useState(3);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    try {
      const value = AsyncStorage.getItem('JUST_ONE');
      if (timerCount === 0 && value !== null) {
        navigation.navigate(TextDirectory.login);
      }
    } catch (error) {}
  }, [navigation, timerCount]);

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

export default OnBroading;

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
