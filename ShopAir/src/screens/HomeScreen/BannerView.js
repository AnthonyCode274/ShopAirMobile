import React, {useState, useEffect} from 'react';
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
import Block from '@components/Block';
import {api_url} from 'config/api';
import {connect_api} from 'config/connect_api';
import {pathUrl} from 'config/helper';

const BannerView = () => {
  const navigation = useNavigation();
  // Call api
  const [banner, setBanner] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(`${api_url + connect_api.method.GET.banner_sale}`)
      .then((res) => res.json())
      .then((resJson) => setBanner(resJson))
      .finally(() => setIsloading(false))
      .catch((error) =>
        console.log('Call api failed Banner View at>>> ' + error.message),
      );
  }, [isLoading]);

  const CardBanner = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => console.log(`${item.id}`)}>
        <View>
          <Image
            source={{uri: pathUrl.imageUrl + item.imageUrl}}
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
