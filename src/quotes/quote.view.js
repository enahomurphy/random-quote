import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
  LayoutAnimation
} from 'react-native';

import QuoteView from '../quotes/quote';
import AllQuotes from '../data/quotes';

class Quotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuote: 0,
    }
  }

  componentWillUpdate(){
    LayoutAnimation.easeInEaseOut()
  }

  static navigationOptions = {
    header: null,
    title: 'Welcome',
  }

  next() {
    if (!AllQuotes[this.state.currentQuote + 1]) {
        this.setState({
          currentQuote: 0
        })
    } else {
      this.setState({
        currentQuote: this.state.currentQuote+ 1
      })
    }
   
  }


  render() {
    return (
      <Image key={this.state.currentQuote.id}  
        source={require('../assets/bg.png')}
        style={styles.image}
        >
        <View style={styles.container} >
          <View style={styles.quoteView}>
            <QuoteView  
              quote={AllQuotes[this.state.currentQuote]}
           />
          </View>
          < TouchableOpacity style={styles.next} onPress={() => this.next()}> 
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
    borderColor: 'rgb(255, 255, 255)',
    borderRadius: 5,
    marginBottom: 20
  },
  nestText: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#ffffff'
  }
});


export default Quotes;