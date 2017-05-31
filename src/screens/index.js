import { Navigation } from 'react-native-navigation';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SideMenuScreen from './SideMenu';
import MyClubScreen from './MyClubScreen';
import InstructorsScreen from './InstructorsScreen';
import MyContentScreen from './MyContentScreen';
import MembersScreen from './MembersScreen';
import MerchandiseScreen from './MerchandiseScreen';
import MyCalendarScreen from './MyCalendarScreen';
import ProfileScreen from './ProfileScreen';
import BillingScreen from './BillingScreen';
import ServicesScreen from './ServicesScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('jitzer.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('jitzer.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('jitzer.SideMenu', () => SideMenuScreen);
  Navigation.registerComponent('jitzer.MyClubScreen', () => MyClubScreen);
  Navigation.registerComponent('jitzer.InstructorsScreen', () => InstructorsScreen);
  Navigation.registerComponent('jitzer.MyContentScreen', () => MyContentScreen);
  Navigation.registerComponent('jitzer.MembersScreen', () => MembersScreen);
  Navigation.registerComponent('jitzer.MerchandiseScreen', () => MerchandiseScreen);
  Navigation.registerComponent('jitzer.MyCalendarScreen', () => MyCalendarScreen);
  Navigation.registerComponent('jitzer.ProfileScreen', () => ProfileScreen);
  Navigation.registerComponent('jitzer.BillingScreen', () => BillingScreen);
  Navigation.registerComponent('jitzer.ServicesScreen', () => ServicesScreen);
}
