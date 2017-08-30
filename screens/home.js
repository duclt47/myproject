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
  TouchableOpacity
} from 'react-native';

class BackgroundImage extends Component {
  render() {
      return (
          <Image source={require('../imgs/home-img.jpg')} style={styles.backgroundImage}>                 
                        {this.props.children}
          </Image>
          // <Image
          // source={require('../imgs/home-img.jpg')}
          // style={styles.rootBgImage}
          // />     
      )
  }
}
class IconSearch extends Component{
  render(){
    return(
      <Image source={require('../imgs/search.png')} style={styles.backgroundImage}></Image> 
    )
  }
}


class Nearby extends Component{
  render(){
    return(
      <Image source={require('../imgs/saigon.jpg')}  style={styles.nearby}></Image>
    )
  }
}
class Deals extends Component{
  render(){
    return(
        <Image source={require('../imgs/da.jpg')}  style={styles.deals}>
          {this.props.children}
        </Image>
    )
  }
}

export default class Home extends Component {

  static navigationOptions = {
    header: null,
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../imgs/home1600.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  searchHotel(){
    const { navigate } = this.props.navigation;
    {navigate('verifi')}
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header1}>
            <BackgroundImage>
              <Text style={styles.logo}>Logo</Text>
              <Text style={styles.textInimg}>GoodMorninght,Duc</Text>
                <TextInput style={styles.input} 
                placeholder="Search by location ,landmarklandmark or city"
                underlineColorAndroid="transparent"
                onSubmitEditing={()=>{navigate('result')}}
                ></TextInput>  
            </BackgroundImage> 
          </View>
          <View style={styles.header2}>
            <TouchableOpacity>
              <Nearby/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Nearby/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Nearby/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Nearby/>
            </TouchableOpacity>
            {/* <Button
              title="Next" color="#badf53" 
              onPress={() => {navigate('login')}}
              ></Button> */}
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.main1}>
            <Text style={styles.deadsText}>DEALS FOR YOU</Text>
          </View>  
          <View style={styles.main2}>
            <TouchableOpacity style={styles.wrapDeal}>
              <Deals>
                <Text style={styles.TiD}>Thai lan</Text>
              </Deals>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapDeal}>
              <Deals>
                <Text style={styles.TiD}>Sai gon</Text>
              </Deals>
            </TouchableOpacity>
          </View>
        </View>
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
  header:{
    flex:6
  },
  main:{
    flex:4,
    backgroundColor:"white",
    marginTop:20
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    alignItems:"center",
    justifyContent: "flex-end",
   
  },
  logo:{
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 35,
    alignSelf:"baseline",
    marginBottom:200,
    marginLeft:10
  },
  textInimg: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 20
  },
  input:{
    marginBottom:20,
    borderColor:'white',
    borderWidth:1,
    borderRadius:30,
    width: 300,
    height:55,
    color:"#aaafb7",
    fontSize:18,
    backgroundColor: 'white',
    padding:10
  },
  header1:{
    flex:7
  },
  header2:{
    flex:3,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent: "center",
    flexDirection:"row"
  },
  nearby:{
    width:70,
    height:70,
    borderRadius:35,
    marginLeft:5,
    marginRight:5
  },
  deals:{
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius:3,
    flex:1,
    marginLeft:3,
    marginRight:3,
    padding:5
  },
  deadsText:{
    color:"#3d495b",
    fontSize:17,
    fontWeight:"bold",
    marginLeft:5
  },
  main1:{
    flex:2,
    justifyContent:"center"
  },
  main2:{
    flex:8,
    flexDirection:"row",
  },
  TiD:{
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize:20,
    fontWeight:"bold",
  },
  wrapDeal:{
    flex:1
  },
  rootBgImage: {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  }
});


