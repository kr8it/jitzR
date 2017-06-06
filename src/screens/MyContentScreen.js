import React, {Component} from 'react';
import {
  TouchableOpacity,
  AlertIOS,
  Platform,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';
import {Input, Button, Card, CardSection} from '../components/common';

import Video from 'react-native-video';
import Ionicon from 'react-native-vector-icons/Ionicons';
let fullIcon

export default class MyContentScreen extends Component {

  componentDidMount() {
    Ionicon.getImageSource('ios-menu', 35).then((menu) => {
      this.props.navigator.setButtons({
          leftButtons: [
              { id: 'menu', icon: menu }
          ]
      });
    });
  }

  constructor(props) {
    super(props);    
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'menu') {
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true
        });
      }
    }
  }

  render() {
    return <View />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  }
});
