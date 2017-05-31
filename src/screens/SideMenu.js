import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Button,
  ToastAndroid
} from 'react-native';

import Row from '../components/Row';

export default class SideMenu extends Component {

  _goToHomeScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'Home'
    });
  }

  _goToMyClubScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'MyClub'
    });
  }

  _goToInstructorsScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'Instructors'
    });
  }

  _goToMyContentScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'MyContent'
    });
  }

  _goToMembersScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'Members'
    });
  }

  _goToMyCalendarScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'MyCalendar'
    });
  }

  _goToServicesScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'Services'
    });
  }

  _goToMerchandiseScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'Merchandise'
    });
  }

  _goToBillingScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'Billing'
    });
  }

  _goToProfileScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'Profile'
    });
  }

  _toggleDrawer() {
    this.props.navigator.toggleDrawer({
        to: 'closed',
        side: 'left',
        animated: true
    });
  }

  render() {
      return (
        <View style={styles.container}>
            <View style={styles.drawerList}>
              <Row title={'Home'} onPress={this._goToHomeScreen.bind(this)} />
              <Row title={'My Club'} onPress={this._goToMyClubScreen.bind(this)} />
              <Row title={'Instructors'} onPress={this._goToInstructorsScreen.bind(this)} />
              <Row title={'My Content'} onPress={this._goToMyContentScreen.bind(this)} />
              <Row title={'Members'} onPress={this._goToMembersScreen.bind(this)} />
              <Row title={'Calendar'} onPress={this._goToMyCalendarScreen.bind(this)} />
              <Row title={'Services'} onPress={this._goToServicesScreen.bind(this)} />
              <Row title={'Merchandise'} onPress={this._goToMerchandiseScreen.bind(this)} />
              <Row title={'Billing'} onPress={this._goToBillingScreen.bind(this)} />
              <Row title={'Profile'} onPress={this._goToProfileScreen.bind(this)} />
            </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        paddingLeft: 25,
        justifyContent: 'center'
    },
    drawerList: {

    },
    drawerListIcon: {
        width: 27
    },
    drawerListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 23
    },
    drawerListItemText: {
      height: 28,
      paddingHorizontal: 16,
      flexDirection: 'column',
      alignItems: 'flex-start',
      // justifyContent: 'flex-end',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0, 0, 0, 0.054)',
      flex: 1
    },
    linearGradient: {
        // top: 0,
        // left: 0,
        // right: 0,
        // height: 248,
        // position: 'absolute'
        flex: 1
    },
    _version: {
        color: '#3c3c3c',
        position: 'absolute',
        bottom: 25,
        marginLeft: 53
    }
});
