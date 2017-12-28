/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  AppRegistry,
  View
} from 'react-native';

import Login from './components/Login/Login.js'


export default class App extends Component<{}> {
  render() {
    return (
      <Login/>
    );
  }
}

AppRegistry.registerComponent('salute', () => App);
