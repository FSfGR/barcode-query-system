import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProductDetailItem = (props) => {
  return (
    <View>
      <Text style={{...styles.title, ...props.titleStyle}}>
        {props.title}
      </Text>
      <Text style={{...styles.value, ...props.valueStyle}}>
        {props.value}
      </Text>
    </View>
  );
};

// Styling information
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    paddingHorizontal: 10
  },
  value: {
    fontSize: 15,
    fontWeight: 'normal',
    marginVertical: 10,
    paddingHorizontal: 10
  }
});

export default ProductDetailItem;
