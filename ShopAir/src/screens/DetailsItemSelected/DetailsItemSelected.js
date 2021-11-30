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
  ActivityIndicator,
} from 'react-native';

// import Colors
import {Colors, Fonts, icons, Sizes} from '@assets';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Block from '@components/Block';
import HeaderDetailsScreen from './HeaderDetailsScreen/HeaderDetailsScreen';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {api_url} from 'config/api';
import {connect_api} from 'config/connect_api';
import {pathUrl} from 'config/helper';
import SlideDetailsImage from './SlideDetailsImage';
import {TextDirectory} from 'helper/TextDirectory';

// const value = await AsyncStorage.getItem('CART_STORAGE');
const DetailsItemSelected = ({route}) => {
  const navigation = useNavigation();
  const {productId} = route.params;
  const [loadCart, setCart] = useState(0);
  const [items, setItems] = useState([]);
  const [loadImage, setImageView] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [dataFix, setDataDix] = useState({
    id: 0,
    name: 'Username0',
    price: 234,
  });

  // useEffect(() => {
  //   // fetch(`${api_url + connect_api.method.GET.productsDetails + productId}`)
  //   fetch(`http://10.0.2.2:9000/api/products/details/${productId}`)
  //     .then((res) => res.json())
  //     .then((resJson) => setData(resJson))
  //     .then(console.log(data))
  //     .finally(() => setLoading(false))
  //     .catch((error) =>
  //       console.log(
  //         'Call api failed DetailsItemSelected at>>> ' + error.message,
  //       ),
  //     );
  // }, []);

  const getDetailsProductWithId = async () => {
    try {
      const response = await axios.get(
        `${api_url + connect_api.method.GET.productsDetails + productId}`,
      );
      let jsonParser = JSON.stringify(response.data);
      setItems(jsonParser);
    } catch (error) {
      // handle error
      console.log('Call api failed DetailsItemSelected at>>> ' + error.message);
    }
  };

  useEffect(() => {
    getDetailsProductWithId();
    console.log('>>>', items);
  }, [items]);

  const addCartPressed = () => {
    setCart(loadCart + 1);
    console.log(loadCart);
  };

  const SildeImage = ({item}) => {
    return (
      <Block maxHeight={64} marginTop={10} marginRight={6}>
        <TouchableOpacity
          onPress={() => {
            setImageView({image: item.imgProduct});
            console.log(loadImage);
          }}>
          <Image
            source={{uri: item.imgProduct}}
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
            source={{uri: pathUrl.imageUrl + items.imgProduct}}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </Block>
        <Block />
        <Block column marginBottom={100}>
          <Block backgroundColor={Colors.white} shadow elevation={6}>
            <Block alignCenter backgroundColor={Colors.white}>
              {/* <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={SildeImage}
            keyExtractor={(item) => `${item._id}`}
          /> */}
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
                text={items.productName}
                fontSize={16}
                color={Colors.black}
                fontFamily={Fonts.Roboto_Regular}
              />
              <TextStyle
                text={items.price}
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
            <Text>{items}</Text>
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
