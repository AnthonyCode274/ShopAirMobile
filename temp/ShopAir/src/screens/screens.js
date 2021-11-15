import OnBroadingScreen from './OnBroadingScreen/OnBroadingScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import RegisterScreen from './RegisterScreen/RegisterScreen';
import HomeScreen from './HomeScreen/HomeScreen';
import TradeMarkScreen from './TradeMarkScreen/TradeMarkScreen';
import FavoriteScreen from './FavoriteScreen/FavoriteScreen';
import NotificationScreen from './NotificationScreen/NotificationScreen';
import UserScreen from './UserScreen/UserScreen';


export const screens = {
  OnBroadingScreen:  OnBroadingScreen,
  LoginScreen: LoginScreen,
  RegisterScreen: RegisterScreen,

  bottom_screen: {
    HomeScreen: HomeScreen,
    TradeMarkScreen: TradeMarkScreen,
    FavoriteScreen: FavoriteScreen,
    NotificationScreen: NotificationScreen,
    UserScreen: UserScreen
  }
};
