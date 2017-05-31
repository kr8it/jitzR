import React, {Component} from 'react';
import {
  AlertIOS,
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class MerchandiseScreen extends Component {

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
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Merchandise screen</Text>
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  content:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 25,
    paddingTop: 200
  }
});
