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
  Button,
  Picker
} from 'react-native';
import home from './home'
// const nationalitySource = [
//   date:[...],title:[...]
// ]
export default class verifi extends Component {
  static navigationOptions = {
    title: 'verifi',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  sendCode(){
    const {params} = this.props.navigation.state;
    const { navigate } = this.props.navigation;
   
    fetch('http://45.252.249.245:3000/booking/verify/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone:params.mobileNumber,
          code: this.state.text,
        })
      })
      .then((response) => response.json())
      .then((responseData)=>{
        if(responseData.status == 'success'){
            if(responseData.message == 'confirmed'){
                this.props.navigation.navigate('tab')
            }
            else{
                {navigate('register',{mobileNumber:params.mobileNumber})}
            }
         
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
    const { navigate } = this.props.navigation;
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
            <Text style={styles.lable}>Code</Text>
             <TextInput style={styles.inputContent} 
                      keyboardType="default"  
                      placeholder="Code"
                      onChangeText={(text) => this.setState({text})}
                      underlineColorAndroid={'transparent'}
            />
            <Text>{params.mobileNumber}</Text>
            <Button 
              title="Next" color="#badf53" 
              onPress={()=>this.sendCode()}
             
            ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems:"center",
  },
  inputContent:{
      height:50,
      width:300,
      borderColor:"#aaafb7",
      borderWidth:1,
      borderRadius:15,
      marginBottom:20,
      padding:10,
      ...Platform.select({
        android:{
          fontSize:20,
          paddingTop:10,
         
        }
    })
  },
  lable:{
      fontSize:20,
      color:"#3b3f44",
      alignSelf:"baseline",
      marginLeft:40,
      marginBottom:5,
      marginTop:5
  },
  pickerGender:{
    color:"black"
  }

});


