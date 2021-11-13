/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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

const HomeScreenTemp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animated.ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <HeaderHomeScreen />
        <BannerView />
        <View style={styles.salerContainer}>
          <View style={styles.titleSaleContainer}>
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
          </View>
          <ScrollableViewBestSale />
        </View>
        <View style={styles.salerContainer2}>
          <View style={styles.titleSaleContainer}>
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
          </View>
          <TopSale />
        </View>
        <View style={styles.salerContainer2}>
          <View style={styles.titleSaleContainer}>
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
          </View>
          <MostFavorite />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreenTemp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  salerContainer: {
    marginTop: 30,
    flexDirection: 'column',
  },
  salerContainer2: {
    marginTop: 10,
    flexDirection: 'column',
  },
  titleSaleContainer: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
