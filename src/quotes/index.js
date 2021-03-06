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
  constructor(props) {
    super(props)
  }
  
  static navigationOptions = {
    header: null,
    title: 'Welcome',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('Quotes')} >
          <Logo navigate={navigate}/> 
          <Text style={styles.instructions}>
            - click to view quotes
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04233c',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
});


export default Quotes;