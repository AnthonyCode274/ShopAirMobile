import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  box_container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    rounded: 'lg',
    overflow: 'hidden',
    borderColor: 'coolGray.200',
    borderWidth: '1',
    _dark: {borderColor: 'coolGray.600', backgroundColor: 'gray.700'},
    _web: {
      shadow: 2,
      borderWidth: 0,
    },
    _light: {
      backgroundColor: 'gray.50',
    },
  },
});
