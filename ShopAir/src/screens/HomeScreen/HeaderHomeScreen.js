import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Sizes, icons} from '@assets';
import Block from '@components/Block';
import {Colors} from '@assets';

const HeaderHomeScreen = ({isIconMenuOnLeft, isCart}) => {
  const navigation = useNavigation();

  return (
    <Block
      row
      paddingHorizontal={Sizes.padding}
      paddingVertical={Sizes.font}
      shadow
      elevation={6}
      backgroundColor={Colors.white}
      marginBottom={20}>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log('Menu on clicked');
          }}>
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cartContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log('Cart on clicked');
          }}>
          <Image
            source={icons.cart}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </Block>
  );
};

export default HeaderHomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Sizes.padding,
    paddingVertical: Sizes.font,
  },
  menuContainer: {flex: 1, alignItems: 'flex-start'},
  cartContainer: {flex: 1, alignItems: 'flex-end'},
  iconStyle: {
    width: 25,
    height: 25,
  },
});
