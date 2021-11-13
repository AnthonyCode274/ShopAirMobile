/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Animated,
  ScrollView,
} from 'react-native';

// import Colors
import {Colors, Fonts, icons, Sizes} from '@assets';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Block from '@components/Block';
import HeaderDetailsScreen from './HeaderDetailsScreen/HeaderDetailsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const value = await AsyncStorage.getItem('CART_STORAGE');
const DetailsItemSelected = ({navigation, route}) => {
  const {
    itemProductName,
    itemPrice,
    itemDate,
    itemImage,
    itemDetailsProduct,
    itemIdLoaiSP,
    itemSaleUp,
  } = route.params;
  const [isLoadCart, setIisLoadCart] = useState(false);
  const [loadCart, setCart] = useState([]);

  // const handleAddCart = async () => {
  //   const newArrayCart = loadCart.push(itemProduct);
  //   try {
  //     const value = await AsyncStorage.setItem('CART_STORAGE', newArrayCart);
  //     if (value !== null) {
  //       console.log('Cart value:' + value);
  //       // let's go
  //     } else {
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //     console.log('Empty value..');
  //   }
  // };

  // useEffect(() => {
  //   console.log('Item: ' + itemProduct);
  //   const status = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('CART_STORAGE');
  //       if (value !== null) {
  //         setCart(value);
  //         console.log('Value: ' + loadCart);
  //         // let's go
  //       } else {
  //       }
  //     } catch (error) {
  //       // Error retrieving data
  //       console.log('Empty value..');
  //     }
  //   };
  //   status();
  // }, [isLoadCart, itemProduct, loadCart]);

  // avigation.goBack()
  return (
    <Animated.View>
      <Animated.ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Block row absolute zIndex={1}>
          <HeaderDetailsScreen isLoadCart={true} />
        </Block>
        <Block maxHeight={Sizes.height / 2}>
          <Image
            source={{
              uri: 'http://10.0.2.2:9000/images/' + itemImage,
            }}
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />
        </Block>
        <Block column>
          <Block column backgroundColor={Colors.white} shadow>
            <Block row marginHorizontal={10} marginVertical={10}>
              <Block row marginRight={5}>
                <Star iconName={icons.oneStar} />
                <Star iconName={icons.oneStar} />
                <Star iconName={icons.oneStar} />
                <Star iconName={icons.oneStar} />
                <Star iconName={icons.perhalfStar} />
              </Block>
              <TextStyle
                text={'4.9'}
                fontSize={14}
                color={Colors.black}
                isUnderline={true}
                fontFamily={Fonts.Roboto_Regular}
              />

              <Block row marginHorizontal={10}>
                <Block row marginRight={5}>
                  <TextStyle
                    text={'Rate'}
                    fontSize={14}
                    color={Colors.black}
                    fontFamily={Fonts.Roboto_Regular}
                  />
                </Block>
                <TouchableOpacity onPress={() => console.log('Rate selected')}>
                  <TextStyle
                    text={'1.2K'}
                    fontSize={14}
                    isUnderline={true}
                    color={Colors.black}
                    fontFamily={Fonts.Roboto_Regular}
                  />
                </TouchableOpacity>
              </Block>
              <Block row marginHorizontal={10}>
                <Block row marginRight={5}>
                  <TextStyle
                    text={'Sold'}
                    fontSize={14}
                    color={Colors.black}
                    fontFamily={Fonts.Roboto_Regular}
                  />
                </Block>
                <TouchableOpacity onPress={() => console.log('Sold selected')}>
                  <TextStyle
                    text={'2.3K'}
                    fontSize={14}
                    color={Colors.black}
                    isUnderline={true}
                    fontFamily={Fonts.Roboto_Regular}
                  />
                </TouchableOpacity>
              </Block>
            </Block>

            <Block marginHorizontal={10} column marginBottom={10}>
              <TextStyle
                text={itemProductName}
                fontSize={16}
                color={Colors.black}
                fontFamily={Fonts.Roboto_Regular}
              />
              <TextStyle
                text={`$ ${itemPrice}`}
                fontSize={20}
                color={Colors.black}
                fontFamily={Fonts.Roboto_Bold}
              />
            </Block>

            <Block
              marginHorizontal={10}
              row
              justifySpaceBetween
              marginBottom={10}>
              <Block column alignCenter maxWidth={100}>
                <Protected iconName={icons.like} />
                <ProtectedText
                  text={`See warranty details here`}
                  fontSize={14}
                  color={Colors.black}
                  fontFamily={Fonts.Roboto_Bold}
                />
              </Block>
              <Block column alignCenter maxWidth={100}>
                <Protected iconName={icons.gift} />
                <ProtectedText
                  text={`7 days return for free`}
                  fontSize={14}
                  color={Colors.black}
                  fontFamily={Fonts.Roboto_Bold}
                />
              </Block>
              <Block column alignCenter maxWidth={100}>
                <Protected iconName={icons.protected} />
                <ProtectedText
                  text={`100% genuine product`}
                  fontSize={14}
                  color={Colors.black}
                  fontFamily={Fonts.Roboto_Bold}
                />
              </Block>
            </Block>
          </Block>
          <Block
            marginTop={10}
            paddingVertical={20}
            paddingHorizontal={10}
            backgroundColor={Colors.white}
            shadow>
            <Text
              style={{
                fontFamily: Fonts.Roboto_Bold,
                fontSize: 16,
                marginBottom: 10,
              }}>
              Infomation
            </Text>
            <Text>{itemDetailsProduct}</Text>
            <Text>{itemDetailsProduct}</Text>
          </Block>
        </Block>
      </Animated.ScrollView>
      <Block
        absolute
        zIndex={10}
        bottom={0}
        left={0}
        right={0}
        backgroundColor={Colors.white}
        shadow>
        <Block row justifySpaceBetween alignCenter>
          <TouchableOpacity onPress={() => console.log('Chat..')}>
            <Block column marginLeft={20} alignCenter marginVertical={10}>
              <IconFooter iconName={icons.chat} />
              <ProtectedText fontSize={10} text={'Chat trực tiếp'} />
            </Block>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Cart clicked')}>
            <Block column alignCenter>
              <IconFooter iconName={icons.cart} />
              <ProtectedText fontSize={10} text={'Thêm vào giỏ hàng'} />
            </Block>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Buy now..')}>
            <Block
              column
              width={Sizes.width / 2}
              alignCenter
              paddingVertical={20}
              radius={5}
              backgroundColor={Colors.black}>
              <ProtectedText
                color={Colors.white}
                fontFamily={Fonts.Roboto_Regular}
                text={'MUA NGAY'}
              />
            </Block>
          </TouchableOpacity>
        </Block>
      </Block>
    </Animated.View>
  );
};

export default DetailsItemSelected;

const TextStyle = ({text, fontFamily, fontSize, color, isUnderline}) => {
  return (
    <Text
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: color,
        textDecorationLine: isUnderline ? 'underline' : 'none',
      }}>
      {text}
    </Text>
  );
};

const ProtectedText = ({text, fontFamily, fontSize, color, isUnderline}) => {
  return (
    <Text
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: color,
        textDecorationLine: isUnderline ? 'underline' : 'none',
        textAlign: 'center',
      }}>
      {text}
    </Text>
  );
};

const Star = ({iconName}) => {
  return (
    <Image
      source={iconName}
      resizeMode="center"
      style={{
        width: 20,
        height: 20,
      }}
    />
  );
};

const IconFooter = ({iconName}) => {
  return (
    <Image
      source={iconName}
      resizeMode="center"
      style={{
        width: 28,
        height: 28,
        marginBottom: 5,
      }}
    />
  );
};

const Protected = ({iconName}) => {
  return (
    <Image
      source={iconName}
      resizeMode="center"
      style={{
        width: 30,
        height: 30,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    fontFamily: Fonts.Roboto_Regular,
    fontSize: 16,
    marginBottom: 5,
  },
  textPrice: {
    fontFamily: Fonts.Roboto_Bold,
    fontSize: 20,
    color: Colors.black,
  },
});
