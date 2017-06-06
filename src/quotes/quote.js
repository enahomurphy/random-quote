import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  welcome: {
    backgroundColor: 'transparent',
    fontSize: 25,
    fontFamily: 'Academy Engraved LET',
    textAlign: 'left',
    margin: 10,
    color: '#ffffff'
  },
  instructions: {
    backgroundColor: 'transparent',
    textAlign: 'right',
    fontStyle: 'italic',
    color: '#ffffff',
    marginBottom: 5,
  },
});

export default ({quote}) => {
  return (
    <View >
      <Text 
        style={styles.welcome}>
          {"\" "+quote.quote+"\" "}
      </Text>
      <Text style={styles.instructions}>
        - { quote.writer }
      </Text>
    </View>
  )
}