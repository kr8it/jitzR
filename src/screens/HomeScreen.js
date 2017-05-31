import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Button
} from 'react-native';

export default class HomeScreen extends Component {

  static navigatorButtons = {
    leftButtons: [
      {
        title: 'Menu',
        id: 'menu',
      }
    ]
  };

  constructor(props) {
    super(props);
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Screen</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  }
});
