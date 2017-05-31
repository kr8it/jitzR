import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Row from '../components/Row';
import {Input, Button, Card, CardSection} from '../components/common';

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'menu') {
        AlertIOS.alert('NavBar', 'menu button pressed');
      }
    }
  }

  showMainScreen = () => {
      this.props.navigator.push({
          title: 'Main Screen',
          screen: 'example.HomeScreen',
      });
  };

  render() {
    return (
      <View style={styles.container}>
      <Card>
        <CardSection>
          <Input
            placeholder="login@email.com"
            label="Email"
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
          />
          </CardSection>
        </Card>
        <CardSection>
          <Button onPress={this.showMainScreen}>
            Log in
          </Button>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
});
