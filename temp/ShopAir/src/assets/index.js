import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Platform} from 'react-native';

export const Fonts = {
  largeTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: 50,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: 30, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: 22, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: 16, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: 14, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Regular', fontSize: 30, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: 20, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: 16, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: 14, lineHeight: 22},
  OpenSans: 'OpenSans_Regular',
  FiraSans: 'FiraSans-Bold',
  RussoOne: 'RussoOne',
  Satisfy: 'Satisfy_Regular',
  Roboto_Regular: 'Roboto-Regular',
  Roboto_Bold: 'Roboto-Bold',
  Lato: 'Lato-Regular',
  fontWeight: {
    heavy: '700',
    bold: 'bold',
    semibold: Platform.OS === 'android' ? 'bold' : '600',
    regular: 'normal',
    light: '300',
  },
  fontFamily: {
    default: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
};

export const Colors = {
  // base colors
  primary: '#a6c13c', // Green
  secondary: '#454c5d', // Gray
  border: '#454c5d',
  // Render color
  cam: '#fc0331',
  yellow: '#fcba03',
  blueLight1: '#03fc77',
  blueLight2: '#037bfc',
  tim: '#7b03fc',
  hong: '#fc0373',
  // colors
  black: '#000000',
  blue1: '#000D6A',
  white: '#FFFFFF',
  whiteLight: '#F9F9F9',
  lightGray2: '#EFEFF0',
  lightGray3: '#D4D5D6',
  blue2: '#42B0FF',
  darkGreen: '#59990F',
  darkGray: '#898C95',
  transparentLightGray: '#CCD4D5D6',
  transparentLightGray1: 'rgba(255,255,255,0.7)',
  text: '#242424',
  background: '#f9f9f9',
  orange: '#FE930F',
  orange2: '#E86C3D',
  lightGray: '#A5A5A5',
  gray: '#424242',
  smoke: '#E6E6E6',
  placeholder: '#707070',
  blue3: '#0d5cb6',
  red: '#E83625',
  gradient: ['#F04831', '#E73222', '#D9100C'],
  green: '#088A08',
  lightGreen: '#29bb89',
  dark: '#00000060',
  pink: '#DB3022',
  sell: '#ff5555',
  pinkholder: '#ffc9c9',
  silver: '#C0C0C0',
  greenStatus: '#2AA952',
  transparent: '#efefef00',
  transparent2: '#00000000',
  bgiconheader: '#24242480',
  lightRount: '#EFEFEF',
  purple: '#9966CC',
};

export const Sizes = {
  width: width,
  height: height,
  iconBottom: 28,
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  margin: 10,

  // font sizes
  title1: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
};

export const images = {
  logo: require('./images/logo.png'),
  ball: require('./images/ball.png'),
  logo_lare: require('./images/logo-shopair_large.png'),
  logo_small: require('./images/logo-shopair_small.png'),
  video_nike: require('./images/videonike.mp4'),
  imageDemo: require('./images/dotoc2.jpeg'),
  
};

export const icons = {
  home: require('./icons/home.png'),
  trademark: require('./icons/trademark.png'),
  trademark_selected: require('./icons/trademark.png'),
  favorire: require('./icons/favorite.png'),
  favorire_selected: require('./icons/favorite_selected.png'),
  notification: require('./icons/notification.png'),
  notification_selected: require('./icons/notification_selected.png'),
  user: require('./icons/user.png'),
  user_selected: require('./icons/user_selected.png'),
  warning: require('./icons/warning.png'),
  cart: require('./icons/cart_icon.png'),
  menu: require('./icons/menu_icon.png'),
  next: require('./icons/next.png'),
  back: require('./icons/arrow.left.png'),
  oneStar: require('./icons/1star.png'),
  perhalfStar: require('./icons/0.5star.png'),
  like: require('./icons/like.png'),
  gift: require('./icons/gift.png'),
  protected: require('./icons/protected.png'),
  chat: require('./icons/chat.png'),
};
