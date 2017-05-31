import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.LoginScreen',
    title: 'Authentication'
  },
  appStyle: {
    orientation: 'portrait'
  }
});
