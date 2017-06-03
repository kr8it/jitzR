import React, {Component} from 'react';
import {
  Image,
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
        <View style={styles.logo}>
          <Image
            source={require('../assets/logo.png')}
          />
        </View>
        <View style={styles.login}>
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
              <CardSection>
                <Button onPress={this.showHomeScreen}>
                  Log in
                </Button>
              </CardSection>
            </Card>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    flex:1,
    paddingBottom: 10
  },
  login: {
    flex:1,
    paddingBottom: 10
  }
});
