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

import {Input, Button, Card, CardSection, SectionDivider, HorizontalDivider} from '../components/common';
import Picker from 'react-native-picker';
import CheckBox from 'react-native-checkbox';
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
        title: '',
        instructor: '',
        notes:'',
        tags: [],
        syllabus: 'Choose Belt Color'
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
      this.state.position.notes = value
      this.setState({"position": this.state.position});
  }
  saveTitle(value) {
      this.state.position.title = value
      this.setState({"position": this.state.position});
  }
  saveInstructor(value) {
      this.state.position.instructor = value
      this.setState({"position": this.state.position});
  }

  updateTags(value) {
      let currentTags = this.state.position.tags
      this.setState({"position": this.state.position});
  }

  savePositionData = () => {
      AlertIOS.alert('saved data ', JSON.stringify(this.state.position))
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.detailsSection}>
          <TextInput
            placeholder="Title"
            style={[styles.titleField]}
            value={this.state.position.title}
            onChangeText={(text) => this.saveTitle(text)}
          />
          <HorizontalDivider />
          <TextInput
            placeholder="Instructor Name"
            style={[styles.titleField]}
            value={this.state.position.instructor}
            onChangeText={(text) => this.saveInstructor(text)}
          />
          <HorizontalDivider />
          <View style={styles.notesSection}>
            <TextInput
              placeholder="enter position notes here"
              style={styles.notesField}
              value={this.state.position.notes}
              onChangeText={(text) => this.saveData(text)}
              multiline = {true}
              numberOfLines = {10}
            />
          </View>
          <HorizontalDivider />
          <View style={styles.pickerSection}>
            <Text style={{fontSize: 20, color: '#d3d3d3', marginLeft: 10, marginRight: 20}}>Syllabus : </Text>
            <TouchableOpacity style={{marginTop: 5}} onPress={this.showPicker.bind(this)}>
              <Text style={{fontSize: 15}}>{this.state.position.syllabus}</Text>
            </TouchableOpacity>
          </View>
          <HorizontalDivider />
          <View style={{justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 20, paddingTop: 10, color: '#d3d3d3', marginLeft: 10, marginRight: 20}}>Select applicable tags below: </Text>
            <View style={{flexDirection: 'row', marginLeft: 5}}>
              <CheckBox
                label='#submission'
                labelStyle={{fontSize: 12}}
                containerStyle={{paddingTop: 10}}
                onChange={(checked) => this.updatetags('submission')}
              />
              <CheckBox
                label='#bottom'
                labelStyle={{fontSize: 12}}
                containerStyle={{paddingTop: 10}}
                onChange={(checked) => AlertIOS.alert('I am bottom', checked)}
              />
              <CheckBox
                label='#escape'
                labelStyle={{fontSize: 12}}
                containerStyle={{paddingTop: 10}}
                onChange={(checked) => AlertIOS.alert('I am bottom', checked)}
              />
              <CheckBox
                label='#guard'
                labelStyle={{fontSize: 12}}
                containerStyle={{paddingTop: 10}}
                onChange={(checked) => AlertIOS.alert('I am bottom', checked)}
              />
            </View>
          </View>
        </View>
        <HorizontalDivider />
        <View style={styles.videoSection}>
          <Text style={{fontSize: 20, color: 'blue'}} onPress={this.addVideo.bind(this)}>
            Add Video
          </Text>
        </View>
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
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  notesSection: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickerSection: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailsSection: {
    paddingTop: 1,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  videoSection: {
    height: 100,
    paddingTop: 30
  },
  titleField: {
    height: 50,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF'
  },
  notesField: {
    height: 150,
    borderWidth:1,
    borderColor: 'transparent',
    borderRadius: 5,
    width: Dimensions.get('window').width -20
  },
  tagsSection: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  savePosition: {
    height: 60,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
