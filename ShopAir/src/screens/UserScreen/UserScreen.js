/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {TextDirectory} from 'helper/TextDirectory';
import {Colors} from '@assets';

const UserScreen = ({navigation}) => {
  const LogOut = () => {
    try {
      auth()
        .signOut()
        .then(() => {
          console.log('User signed out!'),
            navigation.navigate(TextDirectory.onBroading);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => LogOut()}
        style={{
          backgroundColor: Colors.black,
          padding: 20,
          borderRadius: 15,
        }}>
        <Text
          style={{
            color: Colors.white,
            fontSize: 20,
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserScreen;
