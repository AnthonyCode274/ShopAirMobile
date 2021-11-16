import React, {useState} from 'react';
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import Block from '@components/Block';
import styles from './Style';
import {Colors, Fonts, images, Sizes} from '@assets';
import Style from './Style';
import {TextDirectory} from 'helper/TextDirectory';
import TextInputCustomer from '@components/TextInputCustomer/TextInputCustomer';
import TextCustom from '@components/TextCustom/TextCustom';
import ButtonCustomer from '@components/ButtonCustomer/ButtonCustomer';

const LoginScreen = () => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true,
  });
  const {isLoading, email, password, isSecure} = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validator({
      email,
      password,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const onLogin = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      updateState({isLoading: true});
      try {
        const res = await actions.login({
          email,
          password,
        });
        console.log('res==>>>>>', res);
        if (!res.data.emailVerified) {
          alert('Please verify your email');
        }
        updateState({isLoading: false});
      } catch (error) {
        console.log('error raised');
        showError(error.message);
        updateState({isLoading: false});
      }
    }
  };

  return (
    <Animated.View style={Style.container}>
      <SafeAreaView style={Style.safeAreaView}>
        <Block column alignCenter justifyCenter>
          <Block>
            <Image
              style={styles.logo}
              source={images.logo_lare}
              resizeMode="contain"
            />
          </Block>
          <Block marginTop={80}>
            <TextInputCustomer
              width={Sizes.width / 1.25}
              height={48}
              marginBottom={16}
              paddingHorizontal={16}
              backgroundColor={Colors.gray2}
              borderRadius={5}
              textColor={Colors.black}
              placeholder="Enter your email.."
              placeholderTextColor={Colors.placeholderTextColor}
              onChangeText={email => updateState({email})}
            />
            <TextInputCustomer
              width={Sizes.width / 1.25}
              height={48}
              marginBottom={16}
              paddingHorizontal={16}
              backgroundColor={Colors.gray2}
              textColor={Colors.black}
              borderRadius={5}
              placeholder="Enter your password.."
              placeholderTextColor={Colors.placeholderTextColor}
              onChangeText={password => updateState({password})}
            />
          </Block>

          <Block row width={Sizes.width / 1.25} justifyEnd>
            <TouchableOpacity>
              <TextCustom
                children="Forgot password?"
                fontFamily={Fonts.OpenSans}
                fontSize={13}
                fontWeight="bold"
                marginRight={6}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <TextCustom
                children="Sign up"
                fontFamily={Fonts.OpenSans}
                fontSize={13}
                fontWeight="bold"
              />
            </TouchableOpacity>
          </Block>
          <ButtonCustomer
            onPress={() => console.log("login")}
            text="Login"
            textColor={Colors.white}
            fontSize={16}
            fontFamily={Fonts.Roboto_Bold}
            textTransform="uppercase"
            width={Sizes.width / 2}
            height={52}
            backgroundColor={Colors.black}
            borderRadius={5}
            marginTop={80}
          />
        </Block>
      </SafeAreaView>
    </Animated.View>
  );
};

export default LoginScreen;
