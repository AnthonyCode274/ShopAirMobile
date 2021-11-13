/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
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

const HeaderDetailsScreen = ({isLoadCart}) => {
  const navigation = useNavigation();
  const [isHeart, setIsHeart] = useState(false);

  const [loadCart, setIsLoadCart] = useState([]);

  useEffect(() => {
    const status = async () => {
      try {
        const value = await AsyncStorage.getItem('CART_STORAGE');
        if (value !== null) {
          console.log('Cart value:' + value);
          setIsLoadCart(value);
          // let's go
        } else {
        }
      } catch (error) {
        // Error retrieving data
        console.log('Empty value..');
      }
    };
    status();
  }, [isLoadCart]);

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
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={styles.iconStyle}
            />
            <Block absolute right={0} top={0}>
              {loadCart !== null ? (
                <Badge
                  status="error"
                  containerStyle={styles.notificationContainer}
                  badgeStyle={styles.badgeStyle}
                  textProps={{allowFontScaling: false}}
                  value={loadCart}
                />
              ) : (
                <Badge
                  status="error"
                  containerStyle={styles.notificationContainer}
                  badgeStyle={styles.badgeStyle}
                  textProps={{allowFontScaling: false}}
                />
              )}
            </Block>
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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  iconStyle: {
    width: 22,
    height: 22,
  },
  iconStyleHeart: {
    width: 22,
    height: 22,
    tintColor: Colors.red,
  },
  sale: {
    position: 'absolute',
    zIndex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.orange2,
    borderRadius: 5,
    right: 5,
    top: 5,
  },
  textSale: {
    fontFamily: Fonts.OpenSans,
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.white,
  },
  notificationContainer: {
    flex: 1,
    position: 'absolute',
    zIndex: 10,
    top: getSize.s(-7),
    right: getSize.s(-10),
  },
});
