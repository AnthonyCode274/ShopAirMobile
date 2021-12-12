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
import styles from './styles';

// const value = await AsyncStorage.getItem('CART_STORAGE');
const DetailsItemSelected = ({route}) => {
  const navigation = useNavigation();
  const {productId} = route.params;
  const [loadCart, setCart] = useState(0);
  const [items, setItems] = useState({
    id: '',
    productName: '',
    price: '',
    date: '',
    imgProduct: '',
    detailsProduct: '',
    saleUpTo: '',
  });
  const [user, setUser] = useState({});
  const [loadImage, setImageView] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDetailsProductWithId = async () => {
    try {
      await axios
        .get(`${api_url + connect_api.method.GET.productsDetails + productId}`)
        .then((res) => {
          // let jsonParser = JSON.stringify(res.data);
          setItems((newItem) => ({
            ...newItem,
            id: res.data._id,
            productName: res.data.productName,
            price: res.data.price,
            date: res.data.date,
            imgProduct: res.data.imgProduct,
            detailsProduct: res.data.detailsProduct,
            saleUpTo: res.data.saleUpTo,
          }));
          // console.log(res.data);
          console.log(items.imgProduct);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      // handle error
      console.log('Call api failed DetailsItemSelected at>>> ' + error.message);
    }
  };

  useEffect(() => {
    getDetailsProductWithId();
  }, []);

  // console.log('>>>', Object.keys(items));

  const addCartPressed = () => {
    setCart(loadCart + 1);
    console.log('get id product', items.id);
    console.log('get id user', user);
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
            style={styles.imageProduct}
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
                  <Text style={styles.text_rate_product}>Rate</Text>
                </Block>
                <TouchableOpacity onPress={() => console.log('Rate selected')}>
                  <Text style={styles.value_rate_product}>1.2K</Text>
                </TouchableOpacity>
              </Block>
              <Block row marginHorizontal={10}>
                <Block row marginRight={5}>
                  <Text style={styles.text_rate_product}>Sold</Text>
                </Block>
                <TouchableOpacity onPress={() => console.log('Sold selected')}>
                  <Text style={styles.value_rate_product}>2.3K</Text>
                </TouchableOpacity>
              </Block>
            </Block>

            <Block marginHorizontal={10} column marginBottom={10}>
              <Block marginTop={10}>
                <Text style={styles.titleText}>{items.productName}</Text>
              </Block>
              <Block marginVertical={10}>
                <Text style={styles.priceTextStyle}>{items.price}</Text>
              </Block>
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
              <Text style={styles.protected_text_container}>
                See warranty details here
              </Text>
            </Block>
            <Block column alignCenter maxWidth={100}>
              <Protected iconName={icons.gift} />
              <Text style={styles.protected_text_container}>
                7 days return for free
              </Text>
            </Block>
            <Block column alignCenter maxWidth={100}>
              <Protected iconName={icons.protected} />
              <Text style={styles.protected_text_container}>
                100% genuine product
              </Text>
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
            <Text>{items.detailsProduct}</Text>
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
              <Text style={styles.bottom_text_container}>Chat trực tiếp</Text>
            </Block>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => addCartPressed()}>
            <Block column alignCenter>
              <IconFooter iconName={icons.cart} />
              <Text style={styles.bottom_text_container}>
                Thêm vào giỏ hàng
              </Text>
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
              <Text style={styles.bottom_text_container}>Chat trực tiếp</Text>
              <Text style={styles.buy_text}>MUA NGAY</Text>
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
        width: 24,
        height: 24,
      }}
    />
  );
};
