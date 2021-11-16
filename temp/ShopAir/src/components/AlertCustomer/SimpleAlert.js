import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Animated,
  TouchableOpacity,
} from 'react-native';

const SimpleAlert = ({label, message}) => {
  const createTwoButtonAlert = () =>
  Alert.alert(label !== null ? label : 'Alert Title', message !== null ? message : 'Alert message', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

  return (
    <TouchableOpacity onPress={createTwoButtonAlert}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default SimpleAlert;
