/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

export default class Products extends Component {
  state = {
    users: [],
    products: [],
  };


  componentWillMount(){
    this.fetchUsers();
    this.fetchProducts();
  }


  fetchProducts = async() =>{

    fetch('http://192.168.0.141:1337/Products/')
     .then((response) => response.json())
     .then((json) => {
       this.setState({products: json});
     })
     .catch((error) => {
       alert(error);
       alert('Error getting Products.');
     })

  };

  fetchUsers = async() =>{

    fetch('http://192.168.0.141:1337/Users/')
     .then((response) => response.json())
     .then((json) => {
       this.setState({users: json});
     })
     .catch((error) => {
       alert(error);
       alert('Error getting Users.');
     })

  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data = {this.state.data}
        keyExtractor = {(x,i) => i }
        renderItem = {({item}) =>
          <Text>
          { `${item.name.first} ${item.name.last}` }
          </Text>}
          />
          <Text>----------------------</Text>
          <FlatList
          data = {this.state.users}
          keyExtractor = {(x,i) => i }
          renderItem = {({item}) =>
          <Text>
          {item.name}
          </Text>}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
});
