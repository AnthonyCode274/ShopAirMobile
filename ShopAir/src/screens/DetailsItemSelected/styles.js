import { Colors, Fonts } from '@assets';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imageProduct: {
    width: '100%',
    height: '100%',
  },
  protected_text_container: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Fonts.Roboto_Bold,
    textAlign: 'center',
  },
  bottom_text_container: {
    fontSize: 10,
  },
  buy_text: {
    color: Colors.white,
    fontFamily: Fonts.Roboto_Regular,
  },
  text_rate_product: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Fonts.Roboto_Regular,
  },
  value_rate_product: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Fonts.Roboto_Regular,
    textDecorationLine: 'underline',
  },
  titleText: {
    fontSize: 16,
    fontFamily: Fonts.Roboto_Bold,
    color: Colors.black,
  },
  priceTextStyle: {
    fontSize: 20,
    fontFamily: Fonts.Roboto_Bold,
    color: Colors.black,
  },
});
