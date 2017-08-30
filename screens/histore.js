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
  Image
} from 'react-native';

export default class histore extends Component {
  static navigationOptions = {
    tabBarLabel: 'histore',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../imgs/Ecommerce-Shop-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.wrapItems}>
           <Image style={styles.image} source={require('../imgs/room.png')}/>
        </View> */}
           
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems:"center",
  },
  icon: {
    width: 26,
    height: 26,
  },
  // wrapItems:{
  //   flex:6,
  //   backgroundColor:'#ffffff'
  // },
  // image:{
  //   flex:4
  // }

});


