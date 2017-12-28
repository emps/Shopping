/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class ProfileScreen extends Component {
  state = {
      user:{
        name:"Profile"
      }
  }

  static navigationOptions = {
    title: "Profile",
    headerStyle: {
      marginTop: 25 ,
    },
  };

  constructor(props){
    super(props);
    console.log("--- ProfileProps ---\n",this.props);
    this.state.user = this.props.navigation.state.params.user;
  }

  render() {
    const { navigate } = this.props.navigation;


    return (
      <View style={styles.container}>

        <View style={styles.photoContainer}>
          <Image style={styles.photo} source={{ uri: this.state.user.photo }} />
          <View style={styles.settings}>
          <Text style={styles.settingField}> {this.state.user.name} </Text>
          <Text> {this.state.user.email} </Text>
          </View>


        </View>
        <View style={styles.settingsContainer}>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settings:{
    flex:1,
    flexDirection:'column',

  },
  photoContainer:{
    // flex: 1,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#aaaaaa'
  },
  photo:{
    height:80,
    width:80,
    borderRadius: 100
  },

  settingsContainer:{
    flex:3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#5889bd'
  },
  settingField:{
    fontSize:20,

  }
});
