import React, {Component} from 'react';
import {
  TouchableOpacity,
  AlertIOS,
  Platform,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';
import {Input, Button, Card, CardSection, SectionDivider} from '../components/common';

import Video from 'react-native-video';
import Ionicon from 'react-native-vector-icons/Ionicons';
let fullIcon

export default class PositionDetailsScreen extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: true,
    paused: true,
    skin: 'custom',
    ignoreSilentSwitch: null,
    isBuffering: false,
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    } else {
      return 0;
    }
  }

  renderResizeModeControl() {
    return (
      <TouchableOpacity onPress={() => {
         this.player.presentFullscreenPlayer()
       }}>
        <Text>
          {fullIcon}
        </Text>
      </TouchableOpacity>
    );
  }

  renderCustomSkin() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={styles.container}>
        <View style={styles.player}>
          <TouchableOpacity onPress={() => {this.setState({paused: !this.state.paused})}}>
            <Video
              ref={(ref) => {
                this.player = ref
              }}
              source={require('../assets/videos/armbar-closed-guard.mp4')}
              style={styles.player}
              rate={this.state.rate}
              paused={this.state.paused}
              volume={this.state.volume}
              muted={this.state.muted}
              ignoreSilentSwitch={this.state.ignoreSilentSwitch}
              resizeMode='contain'
              onLoad={this.onLoad}
              onBuffer={this.onBuffer}
              onProgress={this.onProgress}
            />
          </TouchableOpacity>
          <View style={styles.resizeModeControl}>
            {this.renderResizeModeControl('fullScreen')}
          </View>
        </View>
        <SectionDivider headerText='Notes'/>
        <View style={styles.notes}>
          <Text style={{
            textAlign: 'justify',
            borderColor: '#cccece',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft:10,
            paddingRight:10,
            borderWidth: .5,
            borderRadius: 10,
            fontSize: 14,
            borderStyle: 'solid'
          }}>{this.props.positionData.notes}</Text>
        </View>
        <SectionDivider headerText='Tags'/>
        <View style={styles.tags}>
          <Text style={{textAlign: 'justify'}}>{this.props.positionData.tags}</Text>
        </View>
        <SectionDivider headerText='Syllabus'/>
          <View style={styles.division}>
            <Text style={{textAlign: 'justify'}}> {this.props.positionData.syllabus} </Text>
          </View>
      </View>
    );
  }

  render() {
    fullIcon = (<Ionicon name="ios-expand" size={35} style={styles.fullScreenIcon} />);
    return this.renderCustomSkin();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mediaSection: {
    height: 280,
    width: Dimensions.get('window').width
  },
  player: {
    height: 200,
    width: Dimensions.get('window').width
  },
  notes: {
    height: 100,
    borderRadius: 6,
    paddingTop: 1,
    alignItems: 'center'
  },
  tags: {
    height: 40,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  division: {
    height: 20,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center'
  },
  controls: {
    backgroundColor: "grey",
    borderRadius: 5,
    left: 0,
    right: 0
  },
  progress: {
    flexDirection: 'row',
    borderRadius: 3,
    // overflow: 'hidden',
  },
  fullScreenIcon: {
    width: 27,
    fontWeight: "800",
    color: 'white',
    zIndex: 0
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: 'red',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: 'white',
  },
  skinControl: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 4
  }
});
