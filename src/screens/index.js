import { Navigation } from 'react-native-navigation';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SideMenu from './SideMenu';
import Content from './Content';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('jitzer.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('jitzer.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('jitzer.SideMenu', () => SideMenu);
  Navigation.registerComponent('jitzer.Content', () => Content);
}
