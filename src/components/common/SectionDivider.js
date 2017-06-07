import React from 'react';
import { Text, View, Dimensions } from 'react-native';

const SectionDivider = (props) => {

  const { textStyle, dividerStyle } = styles;

  return (
    <View style={dividerStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  dividerStyle: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 30,
    width: Dimensions.get('window').width,
    paddingTop: 1,
    paddingBottom: 1,
    shadowColor: '#000',    
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: .5,
  },
  textStyle: {
    fontSize: 15,
    paddingLeft: 10,
    fontFamily: 'helvetica',
    fontWeight: "normal",
    color: 'grey'
  }
};

export { SectionDivider };
