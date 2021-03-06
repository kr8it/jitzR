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
import Ionicon from 'react-native-vector-icons/Ionicons';
import Row from '../components/Row';
let menuIcon

export default class SideMenu extends Component {

  componentDidMount() {
    Ionicon.getImageSource('ios-menu', 27).then((menu) => {
      menuIcon=menu
    });
  }

  _goToHomeScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'Home'
    });
  }

  _goToMyContentScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'MyContent'
    });
  }

  _goToProfileScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'Profile'
    });
  }

  _goToLoginScreen() {
      this._toggleDrawer();
      this.props.navigator.handleDeepLink({
        link: 'Login'
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
    const homeIcon = (<Ionicon name="ios-home" size={30} style={[styles.drawerListIcon, { paddingLeft: 3 }]} />);
    const profileIcon = (<Ionicon name="ios-person" size={30}  style={[styles.drawerListIcon, { paddingLeft: 3 }]} />);
    const contentIcon = (<Ionicon name="ios-paper" size={30}  style={[styles.drawerListIcon, { paddingLeft: 3 }]} />);    

      return (
        <View style={styles.container}>
            <View style={styles.drawerList}>
              <Row title={'Home'} icon={homeIcon} onPress={this._goToHomeScreen.bind(this)} />
              <Row title={'Upload Content'} icon={contentIcon} onPress={this._goToMyContentScreen.bind(this)} />
              <Row title={'Profile'} icon={profileIcon} onPress={this._goToProfileScreen.bind(this)} />
              <Row title={'Logout'} icon={profileIcon} onPress={this._goToLoginScreen.bind(this)} />
            </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 25,
        justifyContent: 'flex-start'
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
