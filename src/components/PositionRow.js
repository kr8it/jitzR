import React from 'react';
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

function navigateToPositionDetails(positionData) {
  
}

function playVideo(title) {
  // this.setState({paused: !this.state.paused})
  this.player.presentFullscreenPlayer()
}

const PositionRow = (props) => (
  <View style={styles.container} >
    <View>
      <View style={styles.player}>
        <TouchableOpacity onPress={() => {
          playVideo(props.title)
        }}>
          <Video
            ref={(ref) => {
              this.player = ref
            }}
            source={videoFiles[props.video]}
            style={styles.player}
            paused={this.state.paused}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    </View>
    <Image
       style={styles.photo} source={{uri: props.video}}
    />
    <TouchableHighlight
      underlayColor={'#D3D3D3'}
      onPress={navigateToPositionDetails.bind(this, props)}
    >
      <View style={styles.positionDetails}>
        <View>
          <Text style={{fontSize: 16}}>
            {`${props.title}`}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 14}}>
            {`${props.instructor}`}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 10}}>
            {`${props.tags}`}
          </Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 10}}>
            {`${props.belt}`}
          </Text>
        </View>
        <View>
          <Text style={styles.text, {fontSize:10, color: '#808080'}} numberOfLines={2} >
            {`${props.notes}`}
          </Text>
        </View>
      </View>
      </TouchableHighlight>
  </View>
);

export default PositionRow;
