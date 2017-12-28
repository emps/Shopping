import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import HomeScreen from './screens/Home.js'
import ProfileScreen from './screens/Profile.js'

import { StackNavigator } from 'react-navigation';


const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
},{
    mode: 'card',
    cardStyle: { backgroundColor: 'transparent' },
    tintColor: '#ffffff',
    headerMode: 'screen'

});



export default class App extends Component{
  render(){
    return <NavigationApp/>

  }

}



/*import Products from './components/Products/Products.js'*/


/* @flow */
