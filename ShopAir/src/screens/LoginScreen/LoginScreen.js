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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styles from './Style';
import {Colors, images, Sizes} from '@assets/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
// import GoogleSignin from '@react-native-google-signin/google-signin';
import {TextDirectory} from 'helper/TextDirectory';
import {LoginButton, LoginManager} from 'react-native-fbsdk-next';
import Block from '@components/Block';

const LoginScreen = () => {
  const navigation = useNavigation();

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
          navigation.navigate(TextDirectory.rootStack.bottomNav);
          AsyncStorage.setItem('@isFirstTime', true);
          console.log('Signed!');
        });
      setShowLoading(false);
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
          source={images.logo_lare}
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
        <TouchableOpacity
          style={styles.forgotPass}
          onPress={() => navigation.navigate(TextDirectory.forgotPassword)}>
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
                <ActivityIndicator size="large" color={Colors.white} />
              </View>
            )}
          </TouchableOpacity>
        </View>

        {Platform.OS === 'android' ? (
          <Block column width={Sizes.width} alignCenter marginBottom={30}>
            <Block marginBottom={10}>
              <LoginButton onLogoutFinished={() => console.log('logout.')} />
            </Block>
            <Block>
              <TouchableOpacity
                onPress={() => navigation.navigate(TextDirectory.register)}>
                <Text style={{color: Colors.black, fontWeight: '600'}}>
                  You don't have account?{' '}
                  <Text style={styles.buttonRegister}>Register</Text>
                </Text>
              </TouchableOpacity>
            </Block>
          </Block>
        ) : null}
      </View>
    </Animated.View>
  );
};

export default LoginScreen;
