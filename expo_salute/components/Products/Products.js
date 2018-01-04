import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

export default class Products extends Component {

  constructor(props){
    super(props);
    this.state = {
      products:[],
      order:[]
    }
  }

  componentWillMount(){
    this.testFun();
  }

  testFun = () =>{
    var url = "http://192.168.0.141:1337/Products";
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        console.log("\n\n -- -- Products Fetching -- --\n\n",json);
        this.setState(previousState => { return {products:json} });
    })
    .catch((error) => {
      alert(error);
      alert('Error getting users.');
    })



  }




  _renderHeader(section) {
    return (
      <View style={styles.header}>

      <Image style={styles.headerPhoto} source={{ uri: section.image }} />
      <Text style={styles.headerText}>{section.name}</Text>
      <TouchableOpacity style={styles.headerButton} onPress={ ()=> {

        this.setState(previousState => {
          var newOrder = this.state.order;
          var index = newOrder.indexOf(section.id);

          if( index == -1 ){
            newOrder[newOrder.length] =
          } else{

          }

          return { order:  };
        });

      } }>
        <Text style={ {fontSize:30, aligntText: 'center',color:'white' } }>-</Text>
      </TouchableOpacity>
      <Text> { ()=> {


       } } </Text>
      <TouchableOpacity style={styles.headerButton} onPress={ ()=> {alert("Fui clicado!")} }>
        <Text style={ {fontSize:30, aligntText: 'center',color:'white' } }>+</Text>
      </TouchableOpacity>
      </View>

    );
  }

  _renderContent(section) {
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>{section.description}</Text>
        <TouchableOpacity style={styles.sendOrderButton} onPress={ ()=> {alert("Fui clicado!")} }>
          <Text style={ {fontSize:30, aligntText: 'center',color:'white' } }>+</Text>
        </TouchableOpacity>
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <Accordion
        sections={ this.state.products }
        renderHeader={ this._renderHeader }
        renderContent={ this._renderContent }
        />

      </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },

  header:{
    // paddingLeft: 30,
    // paddingRight: 30,
    margin: 10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },

  headerPhoto:{
    height:50,
    width: 50,
    marginRight:10,
    borderRadius: 100
  },

  headerText:{
    flex:4,
    fontSize:20,

  },

  headerButton:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(44, 62, 80,1.0)',
  },

  content:{
    paddingLeft: 50,
    paddingRight: 30,
  },

  contentText:{
    fontSize: 16
  },


})
