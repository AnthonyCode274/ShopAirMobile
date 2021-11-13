import Onboarding from './OnBroading/OnboardingScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import RegisterScreen from './RegisterScreen/RegisterScreen';

import HomeScreen from './HomeScreen/HomeScreen';
import HomeScreenTemp from './HomeScreen/HomeScreenTemp';
import TradeMarkScreen from './TradeMarkScreen/TradeMarkScreen';
import FavoriteScreen from './FavoriteScreen/FavoriteScreen';
import NotificationScreen from './NotificationScreen/NotificationScreen';
import UserScreen from './UserScreen/UserScreen';

import AuthStackNavigation from '@screens/stackScreen/AuthStackNavigation';
import BottomNavigation from '@screens/stackScreen/BottomTabNavigation';
import AppStackScreens from './stackScreen/AppStackNavigation';

import DetailsItemSelected from './DetailsItemSelected/DetailsItemSelected';
import HeaderScreen from '@screens/DetailsItemSelected/HeaderDetailsScreen/HeaderDetailsScreen';

export const screens = {
  appStackScreen: {
    AUTH: AuthStackNavigation,
    BOTTOM_NAV: BottomNavigation,
    APP_STACK: AppStackScreens,
  },
  auth: {
    ONBROADING: Onboarding,
    LOGIN: LoginScreen,
    REGISTER: RegisterScreen,
  },
  bottom: {
    HOME_SCREEN: HomeScreenTemp,
    TRADEMARK_SCREEN: TradeMarkScreen,
    FAVORITE_SCREEN: FavoriteScreen,
    NOTIFICATION_SCREEN: NotificationScreen,
    USER_SCREEN: UserScreen,
  },
  stackScreen: {
    DetailsItemSelected: DetailsItemSelected,
  },
  HeaderScreen: HeaderScreen,
};
