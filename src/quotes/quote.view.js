import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Logo from '../common/logo';

class Quotes extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Welcome',
  }
  render() {
    return (
      <Image  
        source={require('../assets/bg.png')}
        style={styles.container}
        >
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#04233c',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
});


export default Quotes;