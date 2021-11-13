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

const ScrollableViewBestSale = () => {
  const navigation = useNavigation();
  const apiUrl = 'http://10.0.2.2:9000/products/products-list';
  // Call api
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((resJson) => setData(resJson))
      .finally(() => setIsloading(false))
      .catch((error) => console.log('Call api failed at>>> ' + error.message));
  }, []);

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
                // itemProduct: item,
              })
            }>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: 'http://10.0.2.2:9000/images/' + item.imgProduct,
                }}
                resizeMode="cover"
                style={styles.imageView}
              />
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.priceStyle}>${item.price}</Text>
              <Text style={styles.nameStyle}>{item.productName}</Text>
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

export default ScrollableViewBestSale;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 0,
  },
  card: {
    height: 200,
    maxHeight: 200,
    width: '100%',
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
    minWidth: 165,
    width: 135,
    height: 145,
    maxHeight: 145,
    maxWidth: Sizes.width / 2,
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
});
