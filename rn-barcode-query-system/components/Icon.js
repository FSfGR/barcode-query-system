import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Icon = (props) => {

  let content;

  if (props.withImg) {
    content = (
      <Image
        style={{...styles.iconWithImg, ...props.style}}
        source={props.imageSource}
      />
    );
  } else {
     content = (
        <Text style={{...styles.iconWithoutImg, ...props.style}}>{props.text}</Text>
     );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      { content }
    </TouchableOpacity>
  );
};

// Styling information
const styles = StyleSheet.create({
  iconWithImg: {
    width: 35,
    height: 35
  },
  iconWithoutImg: {
    fontSize: 18
  }
});

export default Icon;
