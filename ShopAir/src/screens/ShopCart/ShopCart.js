import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextDirectory} from 'helper/TextDirectory';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ShopCart2 = () => {
  const navigation = useNavigation();
  const [loadCart, setCart] = useState(0);

  useEffect(() => {
    storeData();
  }, [loadCart]);

  const storeData = async () => {
    try {
      let getValue = await AsyncStorage.getItem('@storage_cart');
      setCart(getValue);
    } catch (e) {
      // saving error
      console.log(e.message);
    }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>{loadCart}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShopCart2;

const styles = StyleSheet.create({});
