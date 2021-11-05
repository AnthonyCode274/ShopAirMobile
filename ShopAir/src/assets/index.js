import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

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
  Lato: 'Lato-Regular',
};

export const Colors = {
  // base colors
  primary: '#a6c13c', // Green
  secondary: '#454c5d', // Gray

  // Render color
  cam: '#fc0331',
  yellow: '#fcba03',
  blueLight1: '#03fc77',
  blueLight2: '#037bfc',
  tim: '#7b03fc',
  hong: '#fc0373',
  do: '#fc0331',
  red: '#ff0000',

  // colors
  black: '#1E1F20',
  blue: '#000D6A',
  white: '#FFFFFF',
  lightGray: '#ABAFB8',
  lightGray2: '#EFEFF0',
  lightGray3: '#D4D5D6',
  gray: '#BEC1D2',
  blue: '#42B0FF',
  darkGreen: '#59990F',
  darkGray: '#898C95',
  transparentLightGray: '#CCD4D5D6',
  transparentLightGray1: 'rgba(255,255,255,0.7)',
};

export const Sizes = {
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

  // app dimensions
  width,
  height,
};

export const images = {
  logo_lare: require('./images/logo-shopair_large.png'),
  logo_small: require('./images/logo-shopair_small.png'),
  video_nike: require('./images/videonike.mp4'),
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

  cart: require('./icons/cart_icon.png'),
  menu: require('./icons/menu_icon.png'),
};
