/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {TextDirectory} from 'helper/TextDirectory';

// import firebase
import auth from '@react-native-firebase/auth';

import {images} from '@assets';
import styles from './Style';
import Block from '@components/Block';

const RegisterScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const Register = (email, password) => {
    setShowLoading(true);
    try {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          console.log(email, '   ', password);
          navigation.navigate(TextDirectory.LoginScreen);
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } catch (e) {
      setShowLoading(false);
      Alert.alert(e.message);
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
        <Text style={styles.title}>Register</Text>
        <Image
          style={{
            maxWidth: 120,
            width: 120,
            height: 120,
          }}
          width={50}
          height={50}
          resizeMode="contain"
          source={images.logo_small}
        />
      </View>
      <View style={styles.inputContainer}>
        {/* <View style={styles.inputUsername}>
          <FontAwesome style={styles.icon} name="user" size={20} />
          <TextInput
            style={styles.inputText}
            placeholder="Full name"
            onChangeText={(fullName) => setFullName(fullName)}
            value={fullName}
          />
          <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setEmail('')}>
            <Fontisto name="close" size={18} color="grey" />
          </TouchableOpacity>
        </View> */}

        <View style={styles.inputUsername}>
          <MaterialCommunityIcons style={styles.icon} name="email" size={20} />
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#666666"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
          <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setEmail('')}>
            <Fontisto name="close" size={18} color="grey" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputPassword}>
          <FontAwesome5 style={styles.icon} name="lock" size={20} />
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            autoCompleteType="password"
            placeholderTextColor="#666666"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            onChangeText={(password) => setPassword(password)}
            value={password}
            secureTextEntry={hidePass ? true : false}
          />
          <FontAwesome5
            style={{padding: 8}}
            name={hidePass ? 'eye-slash' : 'eye'}
            size={15}
            color="grey"
            onPress={() => setHidePass(!hidePass)}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.styleButton}>
          <TouchableOpacity
            onPress={() => Register(email, password)}
            style={styles.styleLogin}>
            <Text style={styles.titleLogin}>Register</Text>
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

        <View style={styles.loginContainer}>
          <Block row alignCenter>
            <Text style={{color: '#000'}}>Back to </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  color: '#ff2234',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </Block>
        </View>
      </View>
    </Animated.View>
  );
};

export default RegisterScreen;
