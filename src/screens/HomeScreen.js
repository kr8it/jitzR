import React, {Component} from 'react';
import {
  AlertIOS,
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.getImageSource('user', 20, 'red').then((source) => this.setState({ myIcon: source }));

export default class HomeScreen extends Component {

  static navigatorButtons = {
    leftButtons: [
      {
        icon: myIcon,
        id: 'menu'
      }
    ]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onPressDrawerListItem(deepLink) {
    let screenTitle
    let screenRef

    switch (deepLink) {
      case 'MyClub':
        screenTitle='My Club'
        screenRef='jitzer.MyClubScreen'
        break
      case 'Instructors':
        screenTitle='Instructors'
        screenRef='jitzer.InstructorsScreen'
        break
      case 'MyContent':
        screenTitle='My Content'
        screenRef='jitzer.MyContentScreen'
        break
      case 'Members':
        screenTitle='Members'
        screenRef='jitzer.MembersScreen'
        break
      case 'Billing':
        screenTitle='Billing'
        screenRef='jitzer.BillingScreen'
        break
      case 'Services':
        screenTitle='Services'
        screenRef='jitzer.ServicesScreen'
        break
      case 'Profile':
        screenTitle='Profile'
        screenRef='jitzer.ProfileScreen'
        break
      case 'Merchandise':
        screenTitle='Merchandise'
        screenRef='jitzer.MerchandiseScreen'
        break
      case 'MyCalendar':
        screenTitle='My Calendar'
        screenRef='jitzer.MyCalendarScreen'
        break
      default:
        screenTitle='Home'
        screenRef='jitzer.HomeScreen'
        break
    }

    this.props.navigator.push({
      title: screenTitle,
      screen: screenRef,
      navigatorButtons: {
        leftButtons: [
          {
            title: 'Menu',
            id: 'menu'
          }
        ]
      }
    });
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

    if (event.type == 'DeepLink') {
      const parts = event.link;
      this.onPressDrawerListItem(parts);
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Home screen</Text>
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
