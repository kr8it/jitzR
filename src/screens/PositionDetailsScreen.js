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
import {Input, Button, Card, CardSection} from '../components/common';

import Video from 'react-native-video';
import Ionicon from 'react-native-vector-icons/Ionicons';
let fullIcon

export default class PositionDetailsScreen extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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
        <View style={styles.mediaSection}>
          <View style={styles.player}>
            <TouchableOpacity onPress={() => {this.setState({paused: !this.state.paused})}}>
              <Video
                ref={(ref) => {
                  this.player = ref
                }}
                source={require('../assets/armbar-closed-guard.mp4')}
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
          </View>
          <View style={styles.controls}>
            <View style={styles.generalControls}>
              <View style={styles.progress}>
                <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]}></View>
                <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]} ></View>
              </View>
              <View style={styles.resizeModeControl}>
                {this.renderResizeModeControl('fullScreen')}
              </View>
            </View>
          </View>
          <View style={styles.videoDetails}>
            <Text> Details for : {this.props.title} </Text>
          </View>
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
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  mediaSection: {
    flex: 1,
    height: 280,
    width: Dimensions.get('window').width
  },
  player: {
    height: 250,
    width: Dimensions.get('window').width
  },
  controls: {
    flex: .5,
    backgroundColor: "black",
    borderRadius: 5,
    left: 0,
    right: 0,
    paddingBottom: 1,
    paddingBottom: 1
  },
  videoDetails: {
    flex: 4
  },
  progress: {
    flex: 8,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  fullScreenIcon: {
    width: 27,
    fontWeight: "200",
    color: 'white'
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    paddingTop: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 1,
  },
  skinControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 4
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 30,
  }
});
