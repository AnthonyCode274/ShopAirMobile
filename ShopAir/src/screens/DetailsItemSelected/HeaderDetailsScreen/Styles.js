import { Colors, Fonts } from '@assets';
import { getSize } from 'helper/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  iconStyle: {
    width: 22,
    height: 22,
  },
  iconStyleHeart: {
    width: 22,
    height: 22,
    tintColor: Colors.red,
  },
  sale: {
    position: 'absolute',
    zIndex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.orange2,
    borderRadius: 5,
    right: 5,
    top: 5,
  },
  textSale: {
    fontFamily: Fonts.OpenSans,
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.white,
  },
  notificationContainer: {
    flex: 1,
    position: 'absolute',
    zIndex: 10,
    top: getSize.s(-7),
    right: getSize.s(-10),
  },
});
