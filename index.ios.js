/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/welcome'
export default class RelaxationStation extends Component {
  render() {
    return (
      <App
        title="Relaxation Station"
        quote="A land of no worries"
      />
    );  
  }
}



AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
