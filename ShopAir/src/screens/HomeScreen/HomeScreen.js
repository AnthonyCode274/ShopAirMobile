/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-keys */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';

import {icons, Colors, Fonts, Sizes} from '@assets';
import {TextDirectory} from 'helper/TextDirectory';
import styles from './Style';
import HeaderHomeScreen from './HeaderHomeScreen';
// import {Sizes} from 'styled-system';

const images = [
  'https://thethaosi.vn/wp-content/uploads/2019/04/Banner-cover.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4lnV6r9fu4pyMhBLUfX3NJWeoTABhpu_zA&usqp=CAU',
  'https://x9shop.vn/wp-content/uploads/2020/08/banner111-1400x474.jpg',
];

const Product = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'NikeFake',
    price: '$99.000',
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'Puma JKA',
    price: '$99.000',
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'Nike Gym',
    price: '$901',
  },
  {
    id: 4,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'Bad Adidas EF',
    price: '$989',
  },
  {
    id: 5,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'nike Shocer',
    price: '$999',
  },
  {
    id: 6,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'Adidas DDA',
    price: '$747',
  },
];
const Item = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'giayfake',
    price: '900$',
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'giayfake',
    price: '900$',
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'giayfake',
    price: '900$',
  },
  {
    id: 4,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'giayfake',
    price: '900$',
  },
];
const Item2 = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'giayfake',
    price: '900$',
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'giayfake',
    price: '900$',
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'giayfake',
    price: '900$',
  },
  {
    id: 4,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'giayfake',
    price: '900$',
  },
];
const Item3 = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'Clothing BlackT',
    price: '100$',
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'red_chair',
    price: '150$',
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'Clothing BlackT',
    price: '100$',
  },
  {
    id: 4,
    image: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
    name: 'Clothing BlackT',
    price: '100$',
  },
];


const ScrollableTab = ({tabList, selectedTab, onPress}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{marginHorizontal: Sizes.padding}}
      onPress={() => onPress(item)}>
      <Text style={{color: Colors.secondary, ...Fonts.body2}}>{item.name}</Text>

      {selectedTab.id == item.id && (
        <View style={{alignItems: 'center', marginTop: Sizes.base}}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: Colors.blue,
            }}></View>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: Sizes.padding}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const hostUrl = 'http://10.0.2.2:9000/products/products-list';
  const [data, setData] = useState([]);

  const [imgActive, setimgActive] = useState(0); // slideshow  set sự kiện
  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };

  useEffect(() => {
    fetch(hostUrl)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.log('Error get data >>>>', error));
  }, []);

  console.log(data);

  const ScrollableCard = ({navigation, productList}) => {
    const renderCard = ({item}) => (
      <TouchableOpacity
        style={{marginLeft: Sizes.padding}}
        onPress={() =>
          navigation.navigate(TextDirectory.card.destailScreen, {
            itemProductName: item.productName,
            itemPrice: item.price,
            itemImage: item.imgProduct,
            itemColor: item.color,
            itemSaleUp: item.saleUpTo,
          })
        }>
        <View style={{width: Sizes.width / 1.2, height: Sizes.height / 3}}>
          <Image
            source={{uri: 'http://10.0.2.2:9000/images/' + item.imgProduct}}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: Sizes.radius * 2,
            }}
          />

          <View
            style={{position: 'absolute', top: 15, left: '10%', right: '10%'}}>
            <Text style={{color: Colors.secondary, ...Sizes.h1}}>New</Text>
            <Text
              style={{marginTop: Sizes.base, color: Colors.black, ...Fonts.h2}}>
              {item.productName}
            </Text>
          </View>

          <View
            style={{
              position: 'absolute',
              bottom: 15,
              left: 10,
              borderRadius: 15,
              paddingHorizontal: 10,
              backgroundColor: Colors.transparentLightGray,
              padding: 4,
            }}>
            <Text style={{...Fonts.h2, fontWeight: '300'}}>
              $ {item.price.toFixed(2)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );

    const renderCardSale = ({item}) => (
      <TouchableOpacity
        style={{marginLeft: Sizes.padding, marginRight: 20}}
        onPress={() => navigation.navigate('ItemDetail', {itemInfo: item})}>
        <View style={{width: Sizes.width / 2, height: Sizes.height / 3}}>
          <Image
            source={{uri: 'http://10.0.2.2:9000/images/' + item.imgProduct}}
            resizeMode="cover"
            style={{
              borderRadius: Sizes.radius * 2,
              maxWidth: 200,
              maxHeight: 200,
              width: '100%',
              height: '100%',
            }}
          />

          <View
            style={[styles.saleDealContainer, {backgroundColor: item.color}]}>
            <Text
              style={{fontFamily: Fonts.body3.fontFamily, color: Colors.white}}>
              {item.saleUpTo}
            </Text>
          </View>

          <View
            style={{
              position: 'absolute',
              bottom: 15,
              left: 10,
              borderRadius: 15,
              paddingHorizontal: 10,
              backgroundColor: Colors.transparentLightGray,
              padding: 4,
            }}>
            <Text style={{...Fonts.h2, fontWeight: '300'}}>
              $ {item.price.toFixed(2)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <View
        style={{marginTop: Sizes.padding, flex: 1, flexDirection: 'column'}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderCard}
          keyExtractor={(item) => `${item.productId}`}
        />
        <View style={{marginTop: Sizes.body2, marginBottom: Sizes.body2}}>
          <Text
            style={{
              fontSize: 18,
              marginLeft: Sizes.body1,
              marginBottom: Sizes.body2,
            }}>
            Sales
          </Text>
          {/* <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderCardSale}
            keyExtractor={(item) => `${item.productId}`}
          /> */}
        </View>
      </View>
    );
  };
  function renderHeader() {
    return <HeaderHomeScreen />;
  }
  function renderTitle(title) {
    return (
      <View style={{marginTop: Sizes.base, marginHorizontal: Sizes.padding}}>
        <Text style={{color: Colors.black, ...Fonts.h1}}>{title}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.wrap}>
            <ScrollView
              onScroll={({nativeEvent}) => onchange(nativeEvent)}
              showHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.wrap}>
              {images.map((e, index) => (
                <Image
                  key={e}
                  resizeMode="stretch"
                  style={styles.wrap}
                  source={{uri: e}}
                />
              ))}
            </ScrollView>
            <View style={styles.wrapDot}>
              {images.map((e, index) => (
                <Text
                  key={e}
                  style={imgActive == index ? styles.dotActive : styles.dot}>
                  ●
                </Text>
              ))}
            </View>
          </View>
        </SafeAreaView>

        <View style={{width: '100%', height: 25}}>
          <Text style={styles.Orther_product}>Orther product</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 160, // FlastList Orther Product
          }}>
          <FlatList
            horizontal={true}
            data={Item}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <View
                    style={{
                      width: 120,
                      height: 150,
                      marginLeft: 13,
                      marginTop: 5,
                    }}>
                    <View style={styles.Containt_1}>
                      <Image style={styles.Img_orther} source={item.image} />
                    </View>
                    <View style={styles.Containt_2}>
                      <Text style={styles.Text}> {item.name} </Text>
                      <Text style={styles.Text_Price}> {item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{width: '100%', height: 25}}>
          <Text style={styles.Orther_product}> Clothing Product </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 160, // FlastList Clothing Product
          }}>
          <FlatList
            horizontal={true}
            data={Item3}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <View
                    style={{
                      width: 120,
                      height: 150,
                      marginLeft: 13,
                      marginTop: 5,
                    }}>
                    <View style={styles.Containt_1}>
                      <Image style={styles.Img_orther} source={item.image} />
                    </View>
                    <View style={styles.Containt_2}>
                      <Text style={styles.Text}> {item.name} </Text>
                      <Text style={styles.Text_Price}> {item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{width: '100%', height: 25}}>
          <Text style={styles.Orther_product}> Air Product </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 160, // Flastlist Air Product
          }}>
          <FlatList
            horizontal={true}
            data={Item2}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <View
                    style={{
                      width: 120,
                      height: 150,
                      marginLeft: 13,
                      marginTop: 5,
                    }}>
                    <View style={styles.Containt_1}>
                      <Image style={styles.Img_orther} source={item.image} />
                    </View>
                    <View style={styles.Containt_2}>
                      <Text style={styles.Text}> {item.name} </Text>
                      <Text style={styles.Text_Price}> {item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Image
          style={styles.IMG_SlideShowBody}
          source={{
            uri: 'https://m.media-amazon.com/images/I/71tzEgzCFcL._SL1100_.jpg',
          }}
        />
        <View
          style={{
            height: 30,
            width: '100%',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={styles.Orther_product}>Reconmmend For You</Text>
        </View>
        <View // FlastList Reconmmend For You
        >
          <FlatList
            numColumns={2}
            data={Product}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    width: 180,
                    height: 195,
                    width: Sizes.width / 2,
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <TouchableOpacity
                    style={{width: 180, height: 195, borderRadius: 7}}>
                    <View style={styles.Containt_Reconmmend_1}>
                      <Image
                        style={styles.IMG_Reconmmend}
                        source={{uri: `${item.image}`}}
                      />
                    </View>
                    <View style={styles.Containt_Reconmmend_2}>
                      <View style={{marginLeft: 5, margin: 2}}>
                        <Text style={styles.Text_Price}>{item.price}</Text>
                        <Text style={styles.Text}>{item.name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
