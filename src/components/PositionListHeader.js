import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 1,
    fontSize: 15,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
});

const PositionListHeader = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Search..."
      onChangeText={(text) => console.log('searching for ', text)}
    />
  </View>
);

export default PositionListHeader;
