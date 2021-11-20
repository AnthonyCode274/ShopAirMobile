import Onboarding from './OnBroading/OnboardingScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import RegisterScreen from './RegisterScreen/RegisterScreen';

import HomeScreen from './HomeScreen/HomeScreen';
import TradeMarkScreen from './TradeMarkScreen/TradeMarkScreen';
import FavoriteScreen from './FavoriteScreen/FavoriteScreen';
import NotificationScreen from './NotificationScreen/NotificationScreen';
import UserScreen from './UserScreen/UserScreen';

import AuthStackNavigation from '@navigations/AuthStackNavigation';
import BottomNavigation from '@navigations/BottomNav/BottomTabNavigation';

import DetailsItemSelected from './DetailsItemSelected/DetailsItemSelected';
import HeaderScreen from '@screens/DetailsItemSelected/HeaderDetailsScreen/HeaderDetailsScreen';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ShopCart from './ShopCart/ShopCart';

export const screens = {
  ROOT_STACK: {
    AUTH: AuthStackNavigation,
    BOTTOM_NAV: BottomNavigation,
  },
  auth: {
    ONBROADING: Onboarding,
    LOGIN: LoginScreen,
    REGISTER: RegisterScreen,
    RESET_PASSWORD: ForgotPassword,
  },
  bottom: {
    HOME_SCREEN: HomeScreen,
    TRADEMARK_SCREEN: TradeMarkScreen,
    FAVORITE_SCREEN: FavoriteScreen,
    NOTIFICATION_SCREEN: NotificationScreen,
    USER_SCREEN: UserScreen,
  },
  stackScreen: {
    DetailsItemSelected: DetailsItemSelected,
    ShopCart: ShopCart,
  },
  HeaderScreen: HeaderScreen,
};
