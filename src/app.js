import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'jitzer.LoginScreen',
    title: 'Login',
    navigatorButtons: {
      leftButtons: [],
      rightButtons: [],
    }
  },
  appStyle: {
    orientation: 'portrait'
  },
  drawer: {
    left: {
      screen: 'jitzer.SideMenu',
      passProps: {}
    }
  }
});
