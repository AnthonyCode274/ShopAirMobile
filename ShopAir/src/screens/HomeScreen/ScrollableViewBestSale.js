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
import {api_url} from 'config/api';
import {connect_api} from 'config/connect_api';
import {pathUrl} from 'config/helper';
import Block from '@components/Block';

const ScrollableViewBestSale = () => {
  const navigation = useNavigation();
  // Call api
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(`${api_url + connect_api.method.GET.best_sale}`)
      .then((res) => res.json())
      .then((resJson) => setData(resJson))
      .finally(() => setIsloading(false))
      .catch((error) =>
        console.log(
          'Call api failed ScrollableViewBestSale at>>> ' + error.message,
        ),
      );
  }, []);

  const CardBanner = ({item, index}) => {
    return (
      <Block
        flex
        width="100%"
        maxWidth={Sizes.width / 2.5}
        backgroundColor={Colors.white}
        radius={5}
        marginLeft={10}
        marginTop={5}
        marginBottom={5}
        shadow>
        <Block>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate(TextDirectory.card.destailScreen, {
                productId: item._id,
              })
            }>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: pathUrl.imageUrl + item.imgProduct,
                }}
                resizeMode="contain"
                style={styles.imageView}
              />
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.priceStyle}>${item.price}</Text>
              <Text style={styles.nameStyle}>{item.productName}</Text>
            </View>
          </TouchableOpacity>
        </Block>
      </Block>
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
    borderRadius: 10,
    width: '100%',
    height: 160,
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
    fontFamily: Fonts.Roboto_Regular,
    fontWeight: 'bold',
    fontSize: 18,
  },
  nameStyle: {
    fontFamily: Fonts.Roboto_Regular,
    fontSize: 14,
  },
});
