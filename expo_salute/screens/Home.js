
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

import { StackNavigator } from 'react-navigation';
import Login  from './../components/Login/Login.js'

export default class HomeScreen extends Component {
  state = {
    user:{},
    email:"a@a.com",
    password:"123321"
  };

  static navigationOptions = {
    title:'Salute',
    headerStyle: {
      marginTop: 25,
    },
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <Login navigation={this.props.navigation}/>
      </View>

    );
  }


  login=()=>{

    var url = "http://192.168.0.141:1337/Users?email="+this.state.email;

    fetch(url)
     .then((response) => response.json())
     .then((json) => {
       console.log(json.length);
       if(json.length == 1){
         this.state.user = json[0];
       } else {
         alert("Usuário não encontrado!")
       }
     })
     .catch((error) => {
       alert(error);
       alert('Error getting users.');
     })

     if( this.state.password == this.state.user.password ){
       alert("Usuário logado!\nBem vindo "+ this.state.user.name)

     } else {
       alert("Senha inválida.")
     }


  }


}






const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgba(41, 128, 185,1.0)',
    flex: 1,
  },
  avoidView: {
    flex: 1,
  },
  logoContainer: {
    flex: 3,
    // backgroundColor:'red',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 150

  },
  formContainer:{
    flex: 1,
    // backgroundColor: 'yellow',

  },
  buttonContainer:{
    flex:1,


    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },

  logo: {
    // backgroundColor:'#3498db',
    // flex: 1,
    width: 200,
    height: 200,

  },
  input:{
    backgroundColor: 'rgba(255, 255, 255,0.1)',
    borderRadius: 25,
    height:40,
    color: 'white',
    paddingHorizontal: 10,
    marginBottom:15
  },
  button:{
    backgroundColor: 'rgba(44, 62, 80,1.0)',
    width:200,
    borderRadius: 15,
    paddingVertical: 10,
  },
  buttonText:{
    textAlign: 'center',
    color:'#FFF',
    fontWeight: '100'
  },

});
