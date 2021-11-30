/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  RefreshControl,
} from 'react-native';
import {icons, Colors, Fonts, Sizes} from '@assets';
import BannerView from './BannerView';
import HeaderHomeScreen from './HeaderHomeScreen';
import ScrollableViewBestSale from './ScrollableViewBestSale';
import TopSale from './TopSale';
import MostFavorite from './MostFavorite';
import Block from '@components/Block';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextDirectory} from 'helper/TextDirectory';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [loadCart, setCart] = useState(0);

  useEffect(() => {
    const status = async () => {
      const getValue = await AsyncStorage.getItem('@storage_cart');
      if (getValue > 0) {
        console.log(loadCart);
        setCart(getValue);
      }
    };
    status();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderHomeScreen
        onPressCart={() => navigation.navigate(TextDirectory.card.shopCart)}
        cartValue={loadCart}
      />
      <Animated.ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={{marginTop: 20}} />
        <BannerView />
        <View style={styles.salerContainer}>
          <Block
            marginHorizontal={20}
            justifySpaceBetween
            row
            marginVertical={10}>
            <Text style={styles.titleSale}>Bán Chạy nhất</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignContent: 'center',
              }}>
              <Text style={styles.seeMore}>Xem tất cả</Text>
              <Image
                resizeMode="center"
                style={{width: 16, height: 16}}
                source={icons.next}
              />
            </TouchableOpacity>
          </Block>
          <ScrollableViewBestSale />
        </View>
        <View style={styles.salerContainer2}>
          <Block marginHorizontal={20} justifySpaceBetween row>
            <Text style={styles.titleSale}>Top sale</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignContent: 'center',
              }}>
              <Text style={styles.seeMore}>Xem tất cả</Text>
              <Image
                resizeMode="center"
                style={{width: 16, height: 16}}
                source={icons.next}
              />
            </TouchableOpacity>
          </Block>
          <TopSale />
        </View>
        <Block column marginTop={10} marginBottom={60}>
          <Block marginHorizontal={20} justifySpaceBetween row>
            <Text style={styles.titleSale}>Most Favourite</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignContent: 'center',
              }}>
              <Text style={styles.seeMore}>Xem tất cả</Text>
              <Image
                resizeMode="center"
                style={{width: 16, height: 16}}
                source={icons.next}
              />
            </TouchableOpacity>
          </Block>
          <MostFavorite />
        </Block>
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: Colors.whiteLight2,
  },
  salerContainer: {
    marginTop: 30,
    flexDirection: 'column',
  },
  titleSale: {
    fontFamily: Fonts.OpenSans,
    fontWeight: 'bold',
    fontSize: 18,
  },
  seeMore: {
    fontFamily: Fonts.OpenSans,
    fontSize: 12,
  },
});
