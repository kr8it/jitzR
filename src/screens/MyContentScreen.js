import React, {Component} from 'react';
import {
  TouchableOpacity,
  AlertIOS,
  Platform,
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  AsyncStorage
} from 'react-native';

import {Input, Button, Card, CardSection, SectionDivider} from '../components/common';
import Picker from 'react-native-picker';
import Video from 'react-native-video';
import Ionicon from 'react-native-vector-icons/Ionicons';

var ImagePicker = require('react-native-image-picker');

let fullIcon
let data = ['None', 'White Belt', 'Blue Belt', 'Black Belt'];

export default class MyContentScreen extends Component {

  componentDidMount() {
    Ionicon.getImageSource('ios-menu', 35).then((menu) => {
      this.props.navigator.setButtons({
        leftButtons: [
          { id: 'menu', icon: menu }
        ]
      });
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      position: {
        notes:'',
        syllabus: 'None'
      }
    }
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

  addVideo() {

    var options = {
      cameraType: 'back',
      mediaType: 'video',
      videoQuality: 'high',
      durationLimit: 180,
      storageOptions: {
        cameraRoll: true,
        waitUntilSaved: true
      }
    };

    ImagePicker.launchCamera(options, (response)  => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        this.state.position.video = source
        this.setState({"position": this.state.position})
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        // this.setState({
        //   avatarSource: source
        // });
      }
    });
  }

  showPicker() {
    let pickerValue = this.state.position.syllabus
    Picker.init({
        pickerData: data,
        selectedValue: [pickerValue],
        pickerFontSize: 30,
        onPickerConfirm: data => {
            this.state.position.syllabus = data[0]
            this.setState({"position": this.state.position});
        },
        onPickerCancel: data => {
            console.log(data);
        },
        onPickerSelect: data => {
          this.selectedValue=data[0]
        }
    })
    Picker.show()
  }

  saveData(value) {
      AsyncStorage.setItem("position", value);
      this.state.position.notes = value
      this.setState({"position": this.state.position});
  }

  savePositionData = () => {
      AlertIOS.alert('saved data ', JSON.stringify(this.state.position))
  };

  render() {

    return (
      <View style={styles.container}>
        <SectionDivider headerText="Media" />
        <View style={styles.videoSection}>
          <Button style={{backgroundColor: 'grey'}} onPress={this.addVideo.bind(this)}>
            Add Video
          </Button>
        </View>
        <SectionDivider headerText="Notes" />
        <View style={styles.notesSection}>
          <TextInput
            placeholder="add notes here"
            style={[styles.notesField]}
            value={this.state.position.notes}
            onChangeText={(text) => this.saveData(text)}
            multiline = {true}
            numberOfLines = {10}
          />
        </View>
        <SectionDivider headerText="Syllabus" />
        <View style={styles.syllabusSection}>
        <TouchableOpacity style={{marginTop: 5}} onPress={this.showPicker.bind(this)}>
          <Text>click here to select....</Text>
        </TouchableOpacity>
          <Text> -------------- </Text>
          <Text style={{fontSize: 30}}>{this.state.position.syllabus}</Text>
        </View>
        <SectionDivider headerText="Tags" />
        <View style={styles.tagsSection}>
        </View>
        <SectionDivider />
        <View style={styles.savePosition}>
          <Button onPress={this.savePositionData} style={{backgroundColor: '#007aff'}}>
            Save Position
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  videoSection: {
    height: 80,
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notesSection: {
    height: 150
  },
  notesField: {
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth:1,
    borderColor: 'grey',
    borderRadius: 5,
    width: Dimensions.get('window').width -20
  },
  syllabusSection: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tagsSection: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  savePosition: {
    paddingTop: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
