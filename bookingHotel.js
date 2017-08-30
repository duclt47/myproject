/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,

} from 'react-native';
import login from './screens/login';
import register from './screens/register';
import verifi from './screens/verifi';
import home from './screens/home';
import histore from './screens/histore';
import profile from './screens/profile';
import result from './screens/result';
import { StackNavigator,TabNavigator } from 'react-navigation';


const listTabs = TabNavigator({
  Home: {
    screen: home,
    headerMode: home,
    path: './screens/home.js',
   
  },
  histore: {
    screen: histore,
    navigationOptions: ({navigation}) => ({
      title: `histore`,
    }),
  },
  profile:{
    screen: profile,
    navigationOptions: ({navigation}) => ({
      title: `Profile`,
    }),
  }
});
const bookingHotel = StackNavigator({
  
  login: {
    screen: login,
    headerMode: 'sceen',
    headerLeft: null,
    path: './screens/login.js',
    navigationOptions: ({navigation}) => ({
      title: `Mobile Number`,
    }),
  },
  verifi: {
    screen: verifi,
    headerMode: 'sceen',
    path: './screens/verifi.js',
    navigationOptions: ({navigation}) => ({
      title: `verifi`,
    }),
  },
  register:{
    screen: register,
    headerMode: 'sceen',
    path: './screens/register.js',
    navigationOptions: ({navigation}) => ({
      title: `Update profile`,
    }),
  },
  result:{
    screen: result,
    headerMode: 'sceen',
    path: './screens/result.js',
    navigationOptions: ({navigation}) => ({
      title: `result`,
    }),
  },
  tab:   { screen:listTabs}
})


AppRegistry.registerComponent('bookingHotel', () => bookingHotel);

