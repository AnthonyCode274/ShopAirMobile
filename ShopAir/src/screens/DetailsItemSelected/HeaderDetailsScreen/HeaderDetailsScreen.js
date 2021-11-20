/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Sizes, icons, Colors, Fonts} from '@assets';
import Block from '@components/Block';
import {Badge} from 'react-native-elements';
import {getSize} from 'helper/responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles';
import ImageCustomer from '@components/Image/ImageCustomer';

const HeaderDetailsScreen = ({cartValue, onPressCart}) => {
  const navigation = useNavigation();
  const [isHeart, setIsHeart] = useState(false);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getValue = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_cart');
        if (value !== null) {
          setCart(value);
          // let's go
        }
      } catch (error) {
        // Error retrieving data
        console.log('Empty value..');
      }
    };
    getValue();
  }, []);

  useEffect(() => {
    if (cart !== cartValue) {
      reLoadValueCart();
    }
  }, [cart, reLoadValueCart, cartValue]);

  const reLoadValueCart = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_cart');
      if (value !== null) {
        setCart(value);
        // let's go
      }
    } catch (error) {
      // Error retrieving data
      console.log('Empty value..');
    }
  }, []);

  useEffect(() => {
    const status = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_cart');
        if (value !== null) {
          setCart(value);
          // let's go
        }
      } catch (error) {
        // Error retrieving data
        console.log('Empty value..');
      }
    };
    status();
  }, []);

  return (
    <Block
      row
      paddingHorizontal={Sizes.padding}
      paddingVertical={Sizes.font}
      shadow
      justifySpaceBetween
      width={Sizes.width}
      elevation={6}
      backgroundColor={'translation'}
      marginBottom={20}>
      <OnBack onPress={() => navigation.goBack()} />
      <Block row>
        {isHeart === true ? (
          <HeartFill onPress={() => setIsHeart(false)} />
        ) : (
          <HeartNotFill onPress={() => setIsHeart(true)} />
        )}
        <Block>
          <TouchableOpacity style={{marginLeft: 30}}>
            {cartValue > 0 ? (
              <Block flex justifyCenter alignEnd>
                <TouchableOpacity onPress={onPressCart}>
                  <Block top={0} right={0} bottom={0}>
                    <Badge
                      status="error"
                      containerStyle={styles.notificationContainer}
                      textProps={{allowFontScaling: false}}
                      value={cartValue}
                    />
                    <ImageCustomer
                      source={icons.cart}
                      resizeMode="contain"
                      width={24}
                      height={24}
                    />
                  </Block>
                </TouchableOpacity>
              </Block>
            ) : (
              <Block flex justifyCenter alignEnd>
                <TouchableOpacity onPress={onPressCart}>
                  <ImageCustomer
                    source={icons.cart}
                    resizeMode="contain"
                    width={24}
                    height={24}
                  />
                </TouchableOpacity>
              </Block>
            )}
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
};

const OnBack = ({onPress}) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={icons.back}
          resizeMode="contain"
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const HeartNotFill = ({onPress}) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={icons.favorire_selected}
          resizeMode="contain"
          style={{width: 22, height: 22, tintColor: Colors.gray}}
        />
      </TouchableOpacity>
    </View>
  );
};

const HeartFill = ({onPress}) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={icons.favorire_selected}
          resizeMode="contain"
          style={{width: 22, height: 22, tintColor: Colors.red}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderDetailsScreen;
