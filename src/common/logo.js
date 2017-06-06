import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
  
} from 'react-native';

const styles = StyleSheet.create({
  logo : {
    width: 50,
    height: 50
  },
  logoTitle: {
    fontSize: 20,
    color: '#fff'
  },
  container: {
    width: 200,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tagStyle: {
  }
});

export default ({tagline}) => {
  const { container, logo, logoTitle, tagStyle } = styles;
  return (
    <TouchableOpacity style={container}>
      <Text
        style={logoTitle}>
        The quotes</Text>
      <Image 
        style={styles.logo}
        source={require('../assets/relaxationLogo.png')}
      />
      <Text style={tagStyle}>{}</Text>
    </TouchableOpacity>
  )
}