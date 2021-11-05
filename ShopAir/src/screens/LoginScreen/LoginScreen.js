/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './Style';
import {images} from '@assets/index';

import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
// import GoogleSignin from '@react-native-google-signin/google-signin';
import {TextDirectory} from 'helper/TextDirectory';

const {width, height} = Dimensions.get('screen');

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  // const {fbLogin, googleLogin} = useContext(AuthContext);

  const login = async () => {
    setShowLoading(true);
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate(TextDirectory.mainScreen);
          console.log('Signed!');
        });
      setShowLoading(false);
    } catch (e) {
      setShowLoading(false);
      Alert.alert(e.message);
    }
  };

  const FBLogin = async () => {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      await auth()
        .signInWithCredential(facebookCredential)

        .catch((error) => {
          console.log('Something went wrong with sign up: ', error);
        });
    } catch (error) {
      console.log({error});
    }
  };

  // const GoogleLogin = async () => {
  //   try {
  //     // Get the users ID token
  //     const { idToken } = await GoogleSignin.signIn();

  //     // Create a Google credential with the token
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //     // Sign-in the user with the credential
  //     await auth().signInWithCredential(googleCredential)

  //     .catch(error => {
  //         console.log('Something went wrong with sign up: ', error);
  //     });
  //   } catch(error) {
  //     console.log({error});
  //   }
  // }

  return (
    <Animated.View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={styles.loginTitle}>
        <Text style={styles.title}>Login</Text>
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
        <View style={styles.inputUsername}>
          <MaterialCommunityIcons style={styles.icon} name="email" size={20} />
          <TextInput
            style={styles.inputText}
            placeholder="Email"
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
        <TouchableOpacity style={styles.forgotPass}>
          <Text style={styles.textForgot}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.styleButton}>
          <TouchableOpacity onPress={() => login()} style={styles.styleLogin}>
            <Text style={styles.titleLogin}>Login</Text>
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

        {Platform.OS === 'android' ? (
          <View
            style={{
              flexDirection: 'column',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.buttonNetwork}>
              <TouchableOpacity
                onPress={() => FBLogin()}
                style={{
                  backgroundColor: '#4867AA',
                  padding: 10,
                  borderRadius: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  maxWidth: width / 1.5,
                  width: width,
                }}>
                <Entypo name="facebook" color="#e6eaf4" size={24} />
                <Text
                  style={{
                    color: '#E6EAF4',
                    marginLeft: 60,
                    marginRight: 60,
                  }}>
                  Sign In with Facebook
                </Text>
              </TouchableOpacity>

              <Text style={{}}>OR</Text>

              <TouchableOpacity
                // onPress={() => GoogleLogin()}
                style={{
                  backgroundColor: '#db3236',
                  padding: 10,
                  borderRadius: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  maxWidth: width / 1.5,
                  width: width,
                }}>
                <FontAwesome name="google-plus" color="#e6eaf4" size={24} />
                <Text
                  style={{
                    color: '#E6EAF4',
                    marginRight: 60,
                    marginLeft: 60,
                  }}>
                  Sign In with Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        <View style={styles.styleRegister}>
          <TouchableOpacity
            onPress={() => navigation.navigate(TextDirectory.register)}>
            <Text style={{color: '#000', fontWeight: '600'}}>
              You don't have account?{' '}
              <Text
                style={{color: '#ff2234', fontSize: 16, fontWeight: 'bold'}}>
                Register
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default LoginScreen;
