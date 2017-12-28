/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar

} from 'react-native';

export default class LoginForm extends Component {
  state = {
    users: [],
    products: [],
  };


  login=()=>{
    var url = "http://192.168.0.141:1337/Users?email="+this.state.email;
    alert(url);
    fetch(url)
     .then((response) => response.json())
     .then((json) => {
       console.log(json.length);
       if(json.length > 0){
         alert("Logado com sucesso!")
       } else {
         // alert("Usuário não encontrado!")
       }


       // this.setState({products: json});
     })
     .catch((error) => {
       alert(error);
       alert('Error getting users.');
     })
  }

  onPress=() =>{
    alert("CLICK - "+tag);
  }

  componentWillMount(){
    // this.setState({email})
    // this.setState({email})

  }

  render() {
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

         <TouchableOpacity style={styles.buttonContainer} onPress={this.login} >
          <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,

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
    backgroundColor: 'rgba(44, 62, 80,1.0)',
    paddingVertical: 10,
    borderRadius: 15
  },
  buttonText:{
    textAlign: 'center',
    color:'#FFF',
    fontWeight: '100'
  }

});
