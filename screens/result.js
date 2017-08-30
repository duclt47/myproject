/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  SectionList,
  Button,
  Image,
  ListView
} from 'react-native';
var Data = [
  {url:'https://upload.wikimedia.org/wikipedia/commons/f/fd/VnExpress_logo.png',nameHotel:'khach san 1', location:'dia chi 1 '}
  // {url:require('../img/thailan.jpg'),nameHotel:'khach san 2', location:'dia chi 2 '},
  // {url:require('../img/hanoi.jpg'),nameHotel:'khach san 3', location:'dia chi 3 '},
  // {url:require('../img/saigon.jpg'),nameHotel:'khach san 4', location:'dia chi 4 '},
]
export default class result extends Component {
 constructor(props){
   super(props);
   var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
   this.state={
     dataSource:ds.cloneWithRows(Data)
   }
 }
 Item(property){
   return(
        <View style={styles.wrapItems}>
            <Image style={styles.image}   source={{uri:property.url}}/>
            <View style={styles.wrapText}>
              <Text style={[styles.text,styles.nameHotel]}>{property.nameHotel}</Text>
              <Text style={styles.text}>{property.location}</Text>
            </View>
        </View>
   )
 }
  render() {
    return (
      <View style={styles.container}>
          <ListView 
          dataSource={this.state.dataSource}
          renderRow={this.Item}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  icon: {
    width: 26,
    height: 26,
  },
  wrapItems:{
    height:400,
    backgroundColor:'#ffffff',

  },
  image:{
    height:350,
      resizeMode: 'cover',
  },
  text:{
      
      color:"black"
  },
  wrapText:{
    padding:10
  },
  nameHotel:{
    fontSize:18,
    fontWeight:'bold'
  }

});


