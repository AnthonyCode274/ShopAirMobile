import {StyleSheet} from 'react-native';
import {icons, Colors, Fonts, Sizes} from '@assets';
// import {Sizes} from 'styled-system';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteLight,
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
  SlideShow: {
    backgroundColor: 'gray',
    alignItems: 'center',
    height: 50,
  },
  wrap: {
    width: Sizes.width,
    height: Sizes.height * 0.25,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
  FlatList_Nike: {},
  Text_Price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 1,
  },
  Text: {
    fontSize: 15,
  },
  Orther_product: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 7,
  },
  Img_orther: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 2,
  },
  Containt_1: {
    width: '100%',
    height: '68%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  Containt_2: {
    width: '100%',
    height: '32%',
    backgroundColor: '#EEEBDD',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  IMG_Reconmmend: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginBottom: 2,
  },
  Containt_Reconmmend_1: {
    width: '100%',
    height: '70%',
  },
  Containt_Reconmmend_2: {
    width: '100%',
    height: '30%',
    backgroundColor: '#CEE5D0',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  IMG_SlideShowBody: {
    width: '100%',
    height: 250,
    borderRadius: 3,
    marginTop: 7,
  },
});
