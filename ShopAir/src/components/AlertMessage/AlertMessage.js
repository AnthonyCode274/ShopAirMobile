import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';

const AlertMessage = ({label, mess, onPressOk, onPressCancel}) =>
  Alert.alert(label, mess, [
    {
      text: 'Cancel',
      onPress: () => onPressOk,
      style: 'cancel',
    },
    {text: 'OK', onPress: () => onPressCancel},
  ]);

export default AlertMessage;
