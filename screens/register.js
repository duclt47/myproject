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
  Picker
} from 'react-native';
import home from './home'
// const nationalitySource = [
//   date:[...],title:[...]
// ]
export default class register extends Component {
  
  static navigationOptions = {
    title: 'Update profile',
  };
   constructor(props){
        super(props);
        this.state={city: 'local'}

  }
  update(){
    const {params} = this.props.navigation.state;
    const { navigate } = this.props.navigation;
   
    fetch('http://45.252.249.245:3000/booking/update/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone:params.mobileNumber,
          name: this.state.name,
          email: this.state.email,
          gender: this.state.gender,
          country: this.state.country,
        })
      })
      .then((response) => response.json())
      .then((responseData)=>{
        console.log(responseData)
        if(responseData.status == 'success'){
          
          this.props.navigation.navigate('tab')
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
            <Text>{params.mobileNumber}</Text>
            <Text style={styles.lable}>Name</Text>
            <TextInput style={styles.inputContent} 
                      keyboardType="default"  
                      placeholder="Name"
                      onChangeText={(name) => this.setState({name})}
                      underlineColorAndroid={'transparent'}
            />
            <Text style={styles.lable}>Email</Text>
            <TextInput style={styles.inputContent} 
                      keyboardType="email-address"  
                      placeholder="Email"
                      onChangeText={(email) => this.setState({email})}
                      underlineColorAndroid={'transparent'}
            />
            <Text style={styles.lable}>Gender</Text>
             <TextInput style={styles.inputContent} 
                      keyboardType="default"  
                      placeholder="Gender"
                      onChangeText={(gender) => this.setState({gender})}
                      underlineColorAndroid={'transparent'}
            />
            <Text style={styles.lable}>Country</Text>
            <TextInput style={styles.inputContent} 
                      keyboardType="default"  
                      placeholder="Country"
                      onChangeText={(country) => this.setState({country})}
                      underlineColorAndroid={'transparent'}
            />
            <Button 
              title="Next" color="#badf53" 
              onPress={()=> this.update()}
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


