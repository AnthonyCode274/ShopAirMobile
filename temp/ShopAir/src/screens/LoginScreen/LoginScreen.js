import React from 'react';
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
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
import auth from '@react-native-firebase/auth';
import {validator} from 'helper/validator';
import SimpleAlert from '@components/AlertCustomer/SimpleAlert';

const LoginScreen = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const isValidData = () => {
    if (email !== '' && password !== '') {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    console.log(email);
    console.log(password);
  }, [{email, password}])

  const createTwoButtonAlert = ({label, mess}) =>
    Alert.alert(label, mess, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const onLogin = () => {
    const checkValid = isValidData();
    if (checkValid) {
      createTwoButtonAlert({label: 'Success', mess: 'Cus'});
    } else {
      createTwoButtonAlert({label: 'Failed', mess: 'Fus'});
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
              onChangeText={email => setEmail({email})}
            />
            <TextInputCustomer
              width={Sizes.width / 1.25}
              height={48}
              marginBottom={16}
              paddingHorizontal={16}
              backgroundColor={Colors.gray2}
              textColor={Colors.black}
              borderRadius={5}
              secureTextEntry={true}
              placeholder="Enter your password.."
              placeholderTextColor={Colors.placeholderTextColor}
              onChangeText={password => setPassword({password})}
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
            onPress={onLogin}
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
