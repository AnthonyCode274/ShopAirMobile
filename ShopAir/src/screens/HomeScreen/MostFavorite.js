import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {icons, Colors, Fonts, Sizes} from '@assets';
import Card from '@components/Card/Card';
import {TextDirectory} from 'helper/TextDirectory';
import Block from '@components/Block';
import {Connect, api, pathUrl} from 'config/connect';
import ImageCustomer from '@components/Image/ImageCustomer';

const MostFavorite = () => {
  const navigation = useNavigation();
  // Call api
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(`${Connect.URL + api.best_sale}`)
      .then((res) => res.json())
      .then((resJson) => setData(resJson))
      .finally(() => setIsloading(false))
      .catch((error) => console.log('Call api failed at>>> ' + error.message));
  }, [isLoading]);

  const CardBanner = ({item, index}) => {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate(TextDirectory.card.destailScreen, {
                itemProductName: item.productName,
                itemPrice: item.price,
                itemDate: item.date,
                itemImage: item.imgProduct,
                itemDetailsProduct: item.detailsProduct,
                itemIdLoaiSP: item.idLoaiSP,
                itemSaleUp: item.saleUpTo,
              })
            }>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: pathUrl.imageUrl + item.imgProduct,
                }}
                resizeMode="cover"
                style={styles.imageView}
              />
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.priceStyle}>${item.price}</Text>
              <Text style={styles.nameStyle}>{item.productName}</Text>
            </View>
            <View style={styles.heart}>
              <Text style={styles.nameStyle}>{item.saleUpTo}</Text>
              <Image
                style={styles.imageHeart}
                resizeMode="contain"
                source={icons.favorire_selected}
              />
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={CardBanner}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};

export default MostFavorite;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 0,
  },
  card: {
    height: 188,
    maxHeight: 200,
    width: '100%',
    maxWidth: 285,
    backgroundColor: Colors.white,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  button: {},
  imageContainer: {
    flex: 1,
  },
  imageView: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    minWidth: 185,
    width: 285,
    height: 165,
    maxHeight: 165,
    maxWidth: Sizes.width / 2.5,
  },
  labelContainer: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'column',
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  priceStyle: {
    fontFamily: Fonts.Roboto_Bold,
    fontWeight: 'bold',
    fontSize: 16,
  },
  nameStyle: {
    fontFamily: Fonts.Roboto_Regular,
    fontSize: 14,
  },
  heart: {
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    right: 5,
    bottom: 5,
  },
  imageHeart: {
    width: 16,
    height: 16,
    tintColor: Colors.red,
    marginLeft: 5,
  },
});
