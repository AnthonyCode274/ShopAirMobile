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
  FlatList,
} from 'react-native';

// import Colors
import {Colors, Fonts, icons, Sizes} from '@assets';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Block from '@components/Block';
import HeaderDetailsScreen from './HeaderDetailsScreen/HeaderDetailsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {pathUrl} from 'config/connect';
import SlideDetailsImage from './SlideDetailsImage';
import {TextDirectory} from 'helper/TextDirectory';

// const value = await AsyncStorage.getItem('CART_STORAGE');
const DetailsItemSelected = ({route}) => {
  const navigation = useNavigation();
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
  const [loadCart, setCart] = useState(0);
  const [timerCount, setTimer] = useState(3);
  const [loadImage, setImageView] = useState([pathUrl.imageUrl + itemImage]);

  const dataSlide = [
    {
      id: 0,
      image:
        'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/cdaa953b-7f46-4ab7-958c-0a5381cc8ea4/brasilia-winterized-training-duffel-bag-9PRV2D.png',
    },
    {
      id: 1,
      image:
        'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/24762689-0c45-40b6-903b-e2d89bd0b60e/brasilia-winterized-training-duffel-bag-9PRV2D.png',
    },
    {
      id: 2,
      image:
        'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/7ca95942-9268-4fb4-a8c4-b0eb62e49367/brasilia-winterized-training-duffel-bag-9PRV2D.png',
    },
  ];

  useEffect(() => {
    const status = async () => {
      const getValue = await AsyncStorage.getItem('@storage_cart');
      if (getValue > 0) {
        setCart(getValue);
      }
      if (loadCart > 0) {
        await AsyncStorage.removeItem('@storage_cart');
        await AsyncStorage.setItem('@storage_cart', loadCart.toString());
      }
    };
    status();
  }, []);

  useEffect(() => {
    const status = async () => {
      const getValue = await AsyncStorage.getItem('@storage_cart');
      if (getValue > 0) {
        await AsyncStorage.removeItem('@storage_cart');
        await AsyncStorage.setItem('@storage_cart', loadCart.toString());
      } else {
        await AsyncStorage.setItem('@storage_cart', loadCart.toString());
      }
    };
    status();
  }, [loadCart]);

  const addCartPressed = () => {
    setCart(loadCart + 1);
    console.log(loadCart);
  };

  const SildeImage = ({item}) => {
    return (
      <Block maxHeight={64} marginTop={10} marginRight={6}>
        <TouchableOpacity
          onPress={() => {
            setImageView({image: item.image});
            console.log(loadImage);
          }}>
          <Image
            source={{uri: item.image}}
            style={{
              resizeMode: 'cover',
              width: 64,
              height: 54,
              borderRadius: 5,
            }}
          />
        </TouchableOpacity>
      </Block>
    );
  };

  return (
    <Animated.View style={{flex: 1}}>
      <Animated.ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Block row absolute zIndex={1}>
          <HeaderDetailsScreen
            onPressCart={() => {
              navigation.navigate(TextDirectory.card.shopCart);
            }}
            cartValue={loadCart}
          />
        </Block>
        <Block maxHeight={Sizes.height / 2.5}>
          <Image
            source={{
              uri: pathUrl.imageUrl + itemImage,
              // uri: loadImage.image,
            }}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </Block>
        <Block />
        <Block column marginBottom={100}>
          <Block backgroundColor={Colors.white} shadow elevation={6}>
            <Block alignCenter backgroundColor={Colors.white}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dataSlide}
                renderItem={SildeImage}
                keyExtractor={(item) => `${item.id}`}
              />
            </Block>
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
          </Block>
          <Block
            row
            marginTop={10}
            paddingHorizontal={10}
            paddingVertical={10}
            justifySpaceBetween
            backgroundColor={Colors.white}
            shadow
            elevation={6}>
            <Block column alignCenter maxWidth={100}>
              <Protected iconName={icons.like} />
              <ProtectedText
                text={'See warranty details here'}
                fontSize={14}
                color={Colors.black}
                fontFamily={Fonts.Roboto_Bold}
              />
            </Block>
            <Block column alignCenter maxWidth={100}>
              <Protected iconName={icons.gift} />
              <ProtectedText
                text={'7 days return for free'}
                fontSize={14}
                color={Colors.black}
                fontFamily={Fonts.Roboto_Bold}
              />
            </Block>
            <Block column alignCenter maxWidth={100}>
              <Protected iconName={icons.protected} />
              <ProtectedText
                text={'100% genuine product'}
                fontSize={14}
                color={Colors.black}
                fontFamily={Fonts.Roboto_Bold}
              />
            </Block>
          </Block>
          <Block
            marginTop={10}
            paddingVertical={20}
            paddingHorizontal={10}
            backgroundColor={Colors.white}
            shadow
            elevation={6}>
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

          <TouchableOpacity onPress={() => addCartPressed()}>
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
        width: 16,
        height: 16,
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

const styles = StyleSheet.create({});
