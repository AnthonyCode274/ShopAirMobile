import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {icons, Colors, Fonts, Sizes} from '@assets';

const BannerView = () => {
  const navigation = useNavigation();

  const [banner, setBanner] = React.useState([
    {
      id: 0,
      name: 'Banner1',
      imageUrl:
        'https://thethaosi.vn/wp-content/uploads/2019/04/Banner-cover.jpg',
    },
    {
      id: 1,
      name: 'Banner2',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/shopairmobile.appspot.com/o/Shoes%20%20Web%20Banners.jpeg?alt=media&token=38f52442-b22e-480b-803a-f1a6f9d93fc8',
    },
    {
      id: 2,
      name: 'Banner3',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/shopairmobile.appspot.com/o/maxresdefault.jpeg?alt=media&token=7a11c2e9-da8e-4516-b9ad-5a761f2563f0',
    },
  ]);

  const CardBanner = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => console.log(`Banner id: ${item.id}`)}>
        <View>
          <Image
            source={{uri: item.imageUrl}}
            resizeMode="cover"
            style={styles.imageView}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={banner}
      renderItem={CardBanner}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};

export default BannerView;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 0,
    maxHeight: 140,
    maxWidth: Sizes.width,
  },
  imageView: {
    borderRadius: 10,
    width: 325,
    height: 140,
    maxHeight: 220,
    maxWidth: 325,
  },
});
