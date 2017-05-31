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
  }

  showHomeScreen = () => {
      this.props.navigator.push({
          title: 'Home',
          screen: 'jitzer.HomeScreen'
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
            value="admin@club.com"
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value="password"
          />
          </CardSection>
        </Card>
        <CardSection>
          <Button onPress={this.showHomeScreen}>
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
