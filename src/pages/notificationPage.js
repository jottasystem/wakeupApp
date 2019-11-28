import React, { Component } from 'react';
import { StyleSheet, Text, View, Button , ScrollView, Image, TouchableOpacity} from 'react-native';
import BackButton from '../components/buttons/BackButton';
import { Router } from "react-native-router-flux";
import { Actions } from "react-native-router-flux";

import { Header, Left, Body } from 'native-base';

export default class NotificationPage extends Component {
  static navigationOptions = { header: null };

  render() {
    return (

      <ScrollView style={{backgroundColor:'#3E3E3E'}}> 

      <View style={styles.container}>

        <View style={styles.space}></View>
        <TouchableOpacity onPress={() => Actions.menu()} style={styles.button}>
        <View style={{height: 60, justifyContent: 'space-between', alignItems: "center", backgroundColor: "#363636", flexDirection: 'row'}}>
               {/* <Image style={styles.containerlogo }
              source={require('../images/logo.png')} /> */}
              <Text style={{color:'white', fontSize: 18,fontWeight: '600' }}> Notificação</Text>
            </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>
        
        <TouchableOpacity onPress={() => Actions.devocional()} style={styles.button}> 
        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row', borderColor:'white'}}>  
        <Image style={styles.containerlogo }
          source={require('../images/logo.png')} />
        <Text style={{color:'white', fontSize: 20,fontWeight: '400' }}>  Seja Bem-vindo!</Text>
        </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>
      
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3E3E3E',
  },
  space:{
    width: 17,
    height: 17,
  },
  icones: {
    justifyContent: "center",
    alignItems: "center",
    width: 37,
    height: 41,
  },
  containerlogo: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 50,
    height: 41,
  },
});
