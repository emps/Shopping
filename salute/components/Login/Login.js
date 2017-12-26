/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import LoginForm from './LoginForm.js';

export default class Login extends Component {



  render() {
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./../Images/salute-logo-azul.png')} />

        </View>

        <View style={styles.formContainer}>
        <Text>{this.users}</Text>
          <LoginForm/>
        </View>

      </KeyboardAvoidingView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgba(41, 128, 185,1.0)',
    flex: 1,
  },

  logo: {
    // backgroundColor:'#3498db',
    // flex: 1,
    width: 200,
    height: 200,

  },

  logoContainer: {
    flex: 1,
    // backgroundColor:'red',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 150

  },

  formContainer:{
    flex: 1,
    // backgroundColor: 'yellow',

  }


});
