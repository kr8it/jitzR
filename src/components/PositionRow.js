import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
  photo: {
    height: 100,
    width: 100,
  },
});

const Row = (props) => (
  <View style={styles.container} >
    <Image
       style={styles.photo} source={require('../assets/img/thumbnail.png')}
    />
    <View style={styles.positionDetails}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
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
  </View>
);

export default Row;
