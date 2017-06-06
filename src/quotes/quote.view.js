import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button
} from 'react-native';

import QuoteView from '../quotes/quote';

class Quotes extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Welcome',
  }
  render() {
    return (
      <Image  
        source={require('../assets/bg.png')}
        style={styles.image}
        >
        <View style={styles.container}>
          <View style={styles.quoteView}>
            <QuoteView 
            title= "This great king"
           />
          </View>
          < TouchableOpacity style={styles.next}> 
            <Text style={styles.nestText}>Next</Text> 
          </TouchableOpacity > 
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  next: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
    marginBottom: 20
  },
  nestText: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#fff'
  }
});


export default Quotes;