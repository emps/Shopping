import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';


/*import Products from './components/Products/Products.js'*/
export default class ProfileScreen extends Component {
  static navigationOptions = {
    title:'Profile',
  };

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text onPress={ ()=> navigate('Home') }>
        Partiu Home
        </Text>
      </View>
    );
  }

}

/* @flow */
