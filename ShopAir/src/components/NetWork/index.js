import NetInfo from '@react-native-community/netinfo';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const NetWork = () => {
  const [isConnection, setConnection] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnection(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  if (isConnection) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.textWrap}>
        <Text style={styles.text}>
          Kiểm tra kết nối và khởi động lại ứng dụng
        </Text>
      </View>
    </View>
  );
};

export default NetWork;
