import React, {Component} from 'react';
import Video from 'react-native-video';

import {
  AlertIOS,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

const videoFiles = {
  'armbar-closed-guard'  : require('../assets/armbar-closed-guard.mp4'),
}

export default class PositionRow extends Component {

  constructor(props) {
    super(props)
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

  navigateToPositionDetails(rowData) {
    this.props.navigator.push({
      screen: 'jitzer.PositionDetailsScreen',
      title: rowData.title,
      passProps: {
        rowData: rowData,
      }
    });
  }

  playVideo() {
    this.player.presentFullscreenPlayer()
  }


  render() {
    return (
      <View style={styles.container} >
        <View>
          <View style={styles.player}>
            <TouchableOpacity onPress={() => {
              this.playVideo()
            }}>
              <Video
                ref={(ref) => {
                  this.player = ref
                }}
                source={videoFiles[this.props.rowData.video]}
                style={styles.player}
                paused={this.state.paused}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableHighlight
          underlayColor={'#D3D3D3'}
          onPress={this.navigateToPositionDetails.bind(this, this.props.rowData)}
        >
          <View style={styles.positionDetails}>
            <View>
              <Text style={{fontSize: 16}}>
                {`${this.props.rowData.title}`}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 14}}>
                {`${this.props.rowData.instructor}`}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 10}}>
                {`${this.props.rowData.tags}`}
              </Text>
            </View>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 10}}>
                {`${this.props.rowData.belt}`}
              </Text>
            </View>
            <View>
              <Text style={styles.text, {fontSize:10, color: '#808080'}} numberOfLines={2} >
                {`${this.props.rowData.notes}`}
              </Text>
            </View>
          </View>
          </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  positionDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  player: {
    height: 100,
    width: 100,
  }
});
