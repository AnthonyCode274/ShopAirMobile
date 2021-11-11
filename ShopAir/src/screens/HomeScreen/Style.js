import {StyleSheet} from 'react-native';
import {Colors} from '@assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  saleDealContainer: {
    position: 'absolute',
    left: '10%',
    right: '10%',
    width: 40,
    height: 35,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
