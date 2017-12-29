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

import { StackNavigator,NavigationActions } from 'react-navigation';


export default class Login extends Component {
  constructor (props){
    super(props)

  }

  render() {
    console.log("----LoginProps----\n",this.props);
    const { navigate } = this.props.navigation;

    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('./../Images/salute-logo-azul.png')} />

      </View>

      <View style={styles.formContainer}>
      <Text>{this.users}</Text>
      <LoginForm navigation={this.props.navigation}/>
      </View>

      </KeyboardAvoidingView>
    );
  }


}


class LoginForm extends Component {
  state = {
    user:{},
    email:"a@a.com",
    password:"123321"
  };

  login=()=>{

    var url = "http://192.168.0.141:1337/Users?email="+this.state.email;

    fetch(url)
     .then((response) => response.json())
     .then((json) => {
       console.log(json.length);
       if(json.length == 1){
         this.state.user = json[0];

         if( this.state.password == this.state.user.password ){
           this.props.navigation.navigate('Profile',{user: this.state.user});

         } else {
           alert("Senha inválida.")
         }

       } else {
         alert("Usuário não encontrado!")
       }
     })
     .catch((error) => {
       alert(error);
       alert('Error getting users.');
     })




  }

  render() {
    console.log("----LoginFormProps----\n",this.props);
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

      <StatusBar
      barStyle='light-content'
      />


          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({email: text})}
            placeholder="Email"
            placeholderTextColor='rgba(255,255,255,0.7)'
            returnKeyType='next'
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
          />

          <TextInput
           style={styles.input}
           onChangeText={(text) => this.setState({password: text})}
           placeholder="Senha"
           secureTextEntry
           placeholderTextColor='rgba(255,255,255,0.7)'
           returnKeyType='go'
           ref={(input) => this.passwordInput = input}
         />

         <View style={styles.buttonContainer}>
         <TouchableOpacity style={styles.button} onPress={ this.login }>
          <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>
         </View>


      </View>
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

  },

  input:{
    backgroundColor: 'rgba(255, 255, 255,0.1)',
    borderRadius: 25,
    height:40,
    color: 'white',
    marginBottom: 20,
    paddingHorizontal: 10
  },

  buttonContainer:{
    flex:1,


    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText:{
    textAlign: 'center',
    color:'#FFF',
    fontWeight: '100'
  },

  button:{
    backgroundColor: 'rgba(44, 62, 80,1.0)',
    width:200,
    borderRadius: 15,
    paddingVertical: 10,
  },
});
