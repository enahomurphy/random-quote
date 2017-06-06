import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  welcome: {
    backgroundColor: 'transparent',
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  },
  instructions: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
});

export default ({quote, writer}) => {
  return (
    <View >
      <Text style={styles.welcome}>
          " { quote } "
      </Text>
      <Text style={styles.instructions}>
        - { writer }
      </Text>
    </View>
  )
}