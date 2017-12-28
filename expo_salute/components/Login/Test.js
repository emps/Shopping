/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

export default class Test extends Component {
  constructor(props){
    super(props)
    console.log(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>

      <TouchableOpacity
      onPress={() => navigate('Profile')}
      underlayColor="blue">

        <Text>Click to Navigate!</Text>

      </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
