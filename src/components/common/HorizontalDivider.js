import React from 'react';
import { View, Dimensions } from 'react-native';

const HorizontalDivider = (props) => {

  return (
    <View style={styles.dividerStyle}>
    </View>
  );
};

const styles = {
  dividerStyle: {
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    height: 1,
    width: Dimensions.get('window').width,
    paddingTop: 1,
    paddingBottom: 1
  }
};

export { HorizontalDivider };
