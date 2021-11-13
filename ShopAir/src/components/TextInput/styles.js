import {Colors} from '@assets';
import {getSize, width} from 'helper/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputStyle: {
    height: 48,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black',
    paddingHorizontal: 16,
  },
  input: {
    height: getSize.v(45),
    width: width,
  },
  iconLeft: {
    height: getSize.s(15),
    width: getSize.s(15),
    marginRight: getSize.m(10),
  },
  icoWarning: {
    tintColor: Colors.red,
    height: getSize.s(11),
    width: getSize.s(11),
  },
});
