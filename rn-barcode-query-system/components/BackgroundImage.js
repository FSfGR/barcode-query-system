import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';


let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const BackgroundImage = (props) => {
  return (
    <View>
        <Image style={styles.backgroundImg} source={props.sourceFile} />
    </View>
  );
};

// Styling information
const styles = StyleSheet.create({
  backgroundImg: {
    height: screenHeight,
    width: screenWidth,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover'
  }
});

export default BackgroundImage;
