import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    flex: 1,
    height: height,
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
  Wrapper: {
    width: width,
    height: height,
    position: 'absolute',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    flexDirection: 'column',
  },
  SloganContainer: {
    alignItems: 'center',
    bottom: '0.5%',
  },
  title: {
    color: '#f4f4f4',
    marginBottom: 0,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontSize: 30,
    fontFamily: 'OpenSans_Regular',
  },
  TextDescription: {
    color: '#f4f4f4',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  styleButton: {
    marginTop: '10%',
  },
  styleCreate: {
    width: 250,
    height: 50,
    borderRadius: 24,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleLogin: {
    width: 250,
    height: 50,
    borderRadius: 24,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  titleCreate: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#000000',
  },
  titleLogin: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#f3f8ff',
  },
});
