/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Sizes, icons} from '@assets';
import Block from '@components/Block';
import {Colors} from '@assets';
import TextInputCustomer from '@components/TextInputCustomer/TextInputCustomer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageCustomer from '@components/Image/ImageCustomer';
import {Badge} from 'react-native-elements';
import {getSize} from 'helper/responsive';

const HeaderHomeScreen = ({onPressCart, cartValue}) => {
  const navigation = useNavigation();

  return (
    <Block
      row
      justifySpaceBetween
      paddingHorizontal={20}
      paddingVertical={10}
      shadow
      elevation={6}
      backgroundColor={Colors.white}
      width={Sizes.width}
      maxHeight={60}>
      <Block
        row
        backgroundColor={Colors.gray3}
        alignCenter
        borderRadius={5}
        width={Sizes.width - 80}
        maxHeight={40}>
        <Block marginLeft={10}>
          <AntDesign name="search1" size={20} />
        </Block>
        <TextInputCustomer
          placeholder="Search.."
          paddingHorizontal={10}
          height={38}
        />
      </Block>

      {cartValue > 0 ? (
        <Block flex justifyCenter alignEnd>
          <TouchableOpacity onPress={onPressCart}>
            <Block top={0} right={0} bottom={0}>
              <Badge
                status="error"
                containerStyle={styles.notificationContainer}
                textProps={{allowFontScaling: false}}
                value={cartValue}
              />
              <ImageCustomer
                source={icons.cart}
                resizeMode="contain"
                width={24}
                height={24}
              />
            </Block>
          </TouchableOpacity>
        </Block>
      ) : (
        <Block flex justifyCenter alignEnd>
          <TouchableOpacity onPress={onPressCart}>
            <ImageCustomer
              source={icons.cart}
              resizeMode="contain"
              width={24}
              height={24}
            />
          </TouchableOpacity>
        </Block>
      )}
    </Block>
  );
};

export default HeaderHomeScreen;

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    position: 'absolute',
    zIndex: 10,
    top: getSize.s(-7),
    right: getSize.s(-7),
  },
});
