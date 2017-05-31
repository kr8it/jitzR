import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen';
import FirstSideMenu from './FirstSideMenu';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('example.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
  Navigation.registerComponent('example.FirstSideMenu', () => FirstSideMenu);
}
