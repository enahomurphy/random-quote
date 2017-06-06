import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import HomeScreen from './quotes'
import SingleQuotes from './quotes/quote.view';

import { StackNavigator } from 'react-navigation'

export default StackNavigator({
  Home: {screen: HomeScreen},
  Quotes: {screen: SingleQuotes }
})