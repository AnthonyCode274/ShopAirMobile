/* eslint-disable react-native/no-inline-styles */
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
import ImageCustomer from '@components/Image/ImageCustomer';
import {api_url} from 'config/api';
import {connect_api} from 'config/connect_api';
import {pathUrl} from 'config/helper';

const MostFavorite = () => {
  const navigation = useNavigation();
  // Call api
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(`${api_url + connect_api.method.GET.best_sale}`)
      .then((res) => res.json())
      .then((resJson) => setData(resJson))
      .finally(() => setIsloading(false))
      .catch((error) => console.log('Call api failed at>>> ' + error.message));
  }, [isLoading]);

  const CardView = ({item, index}) => {
    return (
      <Block
        flex
        width="100%"
        height={186}
        maxWidth={Sizes.width / 2}
        maxHeight={400}
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
                ID: item._id,
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
            <Block row justifySpaceBetween margin={10}>
              <Text style={styles.priceStyle}>${item.price}</Text>
              <Favorite />
            </Block>
          </TouchableOpacity>
        </Block>
      </Block>
    );
  };

  const Favorite = () => {
    const [favorite, setFavorite] = useState(false);
    return (
      <TouchableOpacity
        onPress={() => {
          if (favorite === false) {
            setFavorite(true);
          } else {
            setFavorite(false);
          }
        }}>
        <Block>
          <Image
            source={icons.favorire_selected}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: favorite ? Colors.red2 : Colors.black,
            }}
          />
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={CardView}
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
    justifyContent: 'space-between',
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
