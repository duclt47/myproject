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
  Button,
  Platform,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import verifi from './verifi'



export default class login extends Component {
  static navigationOptions = {
    headerLeft: null,
  };
  constructor(props) {
    super(props);
    this.state = { 
      text: 'Useless Placeholder', 
      disable: false
    };
 
  }
  sendNumber(){
    const { navigate } = this.props.navigation;
    this.setState({
      disable:true
    })
    fetch('http://45.252.249.245:3000/booking/register/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: this.state.text,
      })
    })
    .then((response) => response.json())
    .then((responseData)=>{
      if(responseData.status == 'success'){
   
        {navigate('verifi',{mobileNumber:this.state.text})}
      }
      else{
      
        alert(responseData.message)
      }
      
    })
    .catch((error) => {
      console.error(error);
    });
  
  }

  render() {
    return (
        <View style={styles.content}>
          <TextInput style={styles.inputContent} 
            keyboardType="email-address" maxLength={12} 
            placeholder="Phone Number"
            keyboardAppearance="dark"
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid={'transparent'}
          >
          </TextInput>
        
          <View style={styles.wrapButtonLogin}>
            <Button
              disabled={this.state.disable} 
              title="Next" color="#badf53" 
              onPress={() => this.sendNumber()}
              ></Button>
              
          </View>
  

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header:{
      height:65,
      backgroundColor:"#badf53",
      justifyContent: "center",
      alignItems:"center",
      shadowColor:"#eceff1",
      shadowOffset: {width: 0, height: 2},
      shadowOpacity:0.9,
      elevation:3
    },
  textHeader:{
      color:"#ffffff"
  },
  content:{
      alignItems:"center"
  },
  inputContent:{ 
      marginTop:30,
      borderColor:"#aaafb7",
      borderWidth:1,
      borderRadius:15,
      width:300,
      height:45,
      color:"#aaafb7",
      fontSize:35,
      paddingLeft:30,
      ...Platform.select({
          android:{
            fontSize:20,
            paddingTop:10,
           
          }
      })
  },
  wrapButtonLogin:{
      ...Platform.select({
        ios:{
          
        },
        android:{
          marginTop:20
        }
      })
  },  
  wrapButtonfb:{
    width:300,
    height:50,
    backgroundColor:"#4267b2",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    marginTop:20
  },
    wrapButtongg:{
    width:300,
    height:50,
    backgroundColor:"#db4437",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    marginTop:20
  },
  textOfButton:{
    color:"#ffffff",
    fontSize:25
  }  
});


