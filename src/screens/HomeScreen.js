import React, {Component} from 'react';
import {
  AlertIOS,
  Text,
  View,
  ScrollView,
  ListView,
  StyleSheet,
} from 'react-native';

import PositionData from '../assets/data/positions'
import Header from '../components/PositionListHeader'
import SectionHeader from '../components/SectionHeader';
import Footer from '../components/PositionListFooter'
import PositionRow from '../components/PositionRow'
import Ionicon from 'react-native-vector-icons/Ionicons';
let menuIcon

export default class HomeScreen extends Component {

  componentDidMount() {
    Ionicon.getImageSource('ios-menu', 35).then((menu) => {
      menuIcon=menu
      this.props.navigator.setButtons({
          leftButtons: [
              { id: 'menu', icon: menuIcon }
          ]
      });
    });
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    });

    const { dataBlob, sectionIds, rowIds } = this.formatData(PositionData);
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
    };
  }

  onPressDrawerListItem(deepLink) {
    let screenTitle
    let screenRef
    let navButtons = {
      leftButtons: [
        {
          icon: menuIcon,
          id: 'menu'
        }
      ]
    }

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

    if (deepLink=='Login') {
      this.props.navigator.popToRoot({
        animated: true
      });
    } else {
      this.props.navigator.push({
        title: screenTitle,
        screen: screenRef,
        navigatorButtons: navButtons
      });
    }
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

  formatData(data) {
    // We're sorting by alphabetically so we need the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Need somewhere to store our data
    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];

    // Each section is going to represent a letter in the alphabet so we loop over the alphabet
    for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
      // Get the character we're currently looking for
      const currentChar = alphabet[sectionId];

      // Get users whose first name starts with the current letter
      const instructors = data.filter((instructor) => instructor.instructor.toUpperCase().indexOf(currentChar) === 0);

      // If there are any users who have a first name starting with the current letter then we'll
      // add a new section otherwise we just skip over it
      if (instructors.length > 0) {
        // Add a section id to our array so the listview knows that we've got a new section
        sectionIds.push(sectionId);

        // Store any data we would want to display in the section header. In our case we want to show
        // the current character
        dataBlob[sectionId] = { character: currentChar };

        // Setup a new array that we can store the row ids for this section
        rowIds.push([]);

        // Loop over the valid users for this section
        for (let i = 0; i < instructors.length; i++) {
          // Create a unique row id for the data blob that the listview can use for reference
          const rowId = `${sectionId}:${i}`;

          // Push the row id to the row ids array. This is what listview will reference to pull
          // data from our data blob
          rowIds[rowIds.length - 1].push(rowId);

          // Store the data we care about for this row
          dataBlob[rowId] = instructors[i];
        }
      }
    }
    return { dataBlob, sectionIds, rowIds };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <PositionRow {...rowData} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <Header />}
        renderFooter={() => <Footer />}
        renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'white'
  },
  content:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 25,
    paddingTop: 200
  },
  drawerListIcon: {
      width: 27
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});
