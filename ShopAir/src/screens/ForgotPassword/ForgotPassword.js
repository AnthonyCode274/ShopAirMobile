/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  Alert,
  Platform,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './Style';
import {Colors, Fonts, images} from '@assets/index';
import auth from '@react-native-firebase/auth';
// import GoogleSignin from '@react-native-google-signin/google-signin';
import {TextDirectory} from 'helper/TextDirectory';
import AlertMessage from '@components/AlertMessage/AlertMessage';
import Block from '@components/Block';
import TextCustom from '@components/TextCustom/TextCustom';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [showLoading, setShowLoading] = useState(false);

  const resetPasswordWithEmail = async () => {
    if (email !== '') {
      await auth()
        .sendPasswordResetEmail(email)
        .then(function (user) {
          AlertMessage({
            label: 'Successful',
            mess: 'Please check your email inbox',
            onPressOk: navigation.goBack(),
          });
          console.log(user);
        })
        .catch(function (e) {
          console.log(e);
        });
    } else {
      AlertMessage({
        label: 'Unsuccessful',
        mess: 'Please fill in your email completely',
      });
    }
  };

  return (
    <Animated.View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={styles.loginTitle}>
        <Text style={styles.title}>Reset Password</Text>
        <Image
          style={{
            maxWidth: 120,
            width: 120,
            height: 120,
          }}
          width={50}
          height={50}
          resizeMode="contain"
          source={images.logo_lare}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputUsername}>
          <MaterialCommunityIcons style={styles.icon} name="email" size={20} />
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            onChangeText={(email_) => setEmail(email_)}
            value={email}
          />
          <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setEmail('')}>
            <Fontisto name="close" size={18} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.styleButton}>
          <TouchableOpacity
            onPress={() => resetPasswordWithEmail()}
            style={styles.styleLogin}>
            <Text style={styles.titleLogin}>Send</Text>
            {showLoading && (
              <View
                style={{
                  position: 'absolute',
                }}>
                <ActivityIndicator size="large" color="#fff" />
              </View>
            )}
          </TouchableOpacity>
        </View>

        <Block row bottom={30}>
          <TextCustom
            label="Back to"
            fontSize={16}
            fontFamily={Fonts.Roboto_Regular}
            color={Colors.black}
            marginRight={5}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#ff2234', fontSize: 16, fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
        </Block>
      </View>
    </Animated.View>
  );
};

export default ForgotPassword;
