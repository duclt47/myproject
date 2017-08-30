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

export default class profile extends Component {
   static navigationOptions = {
    tabBarLabel: 'profile',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../imgs/64572.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
             {/* <Text>{params.mobileNumber}</Text> */}
            <Text style={styles.lable}>Name</Text>
            <TextInput style={styles.inputContent} 
                      keyboardType="default"  
                      placeholder="Name"
                      onChangeText={(name) => this.setState({name})}
            />
            <Text style={styles.lable}>Email</Text>
            <TextInput style={styles.inputContent} 
                      keyboardType="email-address"  
                      placeholder="Email"
                      onChangeText={(email) => this.setState({email})}
            />
            <Text style={styles.lable}>Gender</Text>
             <TextInput style={styles.inputContent} 
                      keyboardType="default"  
                      placeholder="Gender"
                      onChangeText={(gender) => this.setState({gender})}
            />
            <Text style={styles.lable}>Country</Text>
            <TextInput style={styles.inputContent} 
                      keyboardType="default"  
                      placeholder="Country"
                      onChangeText={(country) => this.setState({country})}
            />
           <Button title="log out" color="red" onPress={() => {navigate('login')}}></Button> 
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

});


