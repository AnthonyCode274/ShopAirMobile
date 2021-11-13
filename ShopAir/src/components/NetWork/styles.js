import {Colors} from '@assets';
import {getSize, height, width} from 'helper/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width,
    height,
    position: 'absolute',
    backgroundColor: Colors.background,
    paddingBottom: getSize.m(50),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textWrap: {
    backgroundColor: Colors.gray,
    paddingVertical: getSize.m(8),
    paddingHorizontal: getSize.m(15),
    borderRadius: getSize.m(5),
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
