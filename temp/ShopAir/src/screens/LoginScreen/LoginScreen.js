import React from 'react';
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  stylesSheet,
  Image,
  Alert,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import Block from '@components/Block';
import styles from './Style';
import {useNavigation} from '@react-navigation/native';
import {Colors, Fonts, icons, images, Sizes} from '@assets';
import {TextDirectory} from 'helper/TextDirectory';
import TextInputWithLabel from '@components/TextInputLable/TextInputLable';
import TextCustom from '@components/TextCustom/TextCustom';
import ButtonCustomer from '@components/ButtonCustomer/ButtonCustomer';
import ImageCustomer from '@components/Image/ImageCustomer';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [iconRight, setIconRight] = React.useState(icons.invisibility);
  const [isSecurity, setSecurity] = React.useState(true);

  const isValidData = () => {
    if (email !== '' && password !== '') {
      return true;
    } else {
      return false;
    }
  };

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
    if (!checkValid) {
      createTwoButtonAlert({
        label: 'Failed',
        mess: 'Please to check again email or password',
      });
    }
  };

  return (
    <Animated.View style={styles.container}>
      <SafeAreaView>
        <Block
          column
          alignCenter
          justifyCenter
          width={Sizes.width}
          height={Sizes.height}>
          <Block marginTop={-160}>
            <ImageCustomer
              width={Sizes.width / 2}
              height={Sizes.height / 5.5}
              source={images.logo_lare}
              resizeMode="contain"
            />
          </Block>
          <Block marginTop={60}>
            <Block column>
              <TextCustom
                label="Email"
                color={Colors.black}
                fontFamily={Fonts.Roboto_Regular}
                fontSize={14}
                marginBottom={6}
              />
              <TextInputWithLabel
                width={Sizes.width / 1.25}
                height={48}
                iconLeft={icons.email}
                sizeIcon={20}
                iconRight={icons.remove}
                onPressIconRight={() => {
                  setEmail('');
                }}
                marginBottom={16}
                paddingHorizontal={16}
                backgroundColor={Colors.gray2}
                textColor={Colors.black}
                borderRadius={5}
                placeholder="Enter your email.."
                placeholderTextColor={Colors.placeholderTextColor}
                onChangeText={(email) => setEmail({email})}
                value={email}
              />
            </Block>

            <Block column>
              <TextCustom
                label="Password"
                color={Colors.black}
                fontFamily={Fonts.Roboto_Regular}
                fontSize={14}
                marginBottom={6}
              />
              <TextInputWithLabel
                width={Sizes.width / 1.25}
                height={48}
                iconLeft={icons.lock}
                sizeIcon={20}
                iconRight={iconRight}
                onPressIconRight={() => {
                  if (iconRight === icons.visibility) {
                    setIconRight(icons.invisibility);
                  } else {
                    setIconRight(icons.visibility);
                  }
                  if (isSecurity === true) {
                    setSecurity(false);
                  } else {
                    setSecurity(true);
                  }
                }}
                marginBottom={16}
                paddingHorizontal={16}
                backgroundColor={Colors.gray2}
                textColor={Colors.black}
                borderRadius={5}
                secureTextEntry={isSecurity}
                placeholder="Enter your password.."
                placeholderTextColor={Colors.placeholderTextColor}
                onChangeText={(password) => setPassword({password})}
                value={password}
              />
            </Block>
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
          <Block row width={Sizes.width / 1.25} justifyEnd>
            <TouchableOpacity>
              <TextCustom
                label="Forgot password?"
                fontFamily={Fonts.OpenSans}
                fontSize={13}
                color={Colors.black}
                fontWeight="bold"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(TextDirectory.register);
              }}>
              <TextCustom
                marginLeft={5}
                label="Sign up"
                fontFamily={Fonts.OpenSans}
                fontSize={13}
                color={Colors.black}
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
          <Block absolute bottom={30} row width={Sizes.width} justifyCenter>
            <Block
              row
              alignCenter
              backgroundColor={Colors.blue3}
              padding={5}
              radius={5}
              shadow>
              <ImageCustomer
                marginRight={5}
                resizeMode="contain"
                width={16}
                height={16}
                source={icons.facebook}
              />
              <TextCustom
                label="Continue with Facebook"
                color={Colors.white}
                fontFamily={Fonts.OpenSans}
                fontWeight="bold"
                fontSize={13}
              />
            </Block>
            <TouchableOpacity>
              <Block
                row
                shadow
                alignCenter
                backgroundColor={Colors.white}
                paddingHorizontal={10}
                paddingVertical={5}
                radius={5}
                paddingRight={30}
                marginLeft={5}>
                <ImageCustomer
                  marginRight={5}
                  resizeMode="contain"
                  width={16}
                  height={16}
                  source={icons.google}
                />
                <TextCustom
                  label="Signin with Google"
                  color={Colors.black}
                  fontFamily={Fonts.OpenSans}
                  fontWeight="bold"
                  fontSize={13}
                />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </SafeAreaView>
    </Animated.View>
  );
};

export default LoginScreen;
