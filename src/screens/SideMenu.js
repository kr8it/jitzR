import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Button
} from 'react-native';

import Row from '../components/Row';

export default class SideMenu extends Component {

  content = () => {
      this.props.navigator.push({
          screen: 'jitzer.Content',
          title: 'Content',
      });
  };

  render() {
      return (
          <View style={styles.container}>
            <Row title={'Upload Content'} onPress={this.content} />
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: 300,
      alignItems: 'center',
      backgroundColor: '#ffffff',
  },
});
