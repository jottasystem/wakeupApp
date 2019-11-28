import React, { Component } from 'react';
import { StyleSheet, Text, View, Button , ScrollView, Image, TouchableOpacity} from 'react-native';
import BackButton from '../components/buttons/BackButton';
import { Router } from "react-native-router-flux";
import { Actions } from "react-native-router-flux";

import { Header, Left, Body } from 'native-base';

export default class AdministratorPage extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>

        <View style={{height: 60, justifyContent: 'space-between', alignItems: "center", backgroundColor: "#363636", flexDirection: 'row'}}>
            {/* <Image style={styles.containerlogo }
          source={require('../images/logo.png')} /> */}
          <Text style={{color:'white', fontSize: 18,fontWeight: '600' }}> Administrador</Text>
        </View>

      <ScrollView style={{backgroundColor:'#3E3E3E'}}> 

      <View style={styles.container2}>

        <View style={styles.space}></View>
        
        <TouchableOpacity onPress={() => Actions.users()} style={styles.button}> 
        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>
            <Image style={styles.icones}
                source={require('../images/feito1.png')} />
            <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Usuários</Text>
        </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>

        <TouchableOpacity onPress={() => Actions.input_devocional()} style={styles.button}> 
        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>
            <Image style={styles.icones}
                source={require('../images/senha.png')} />
            <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Publicações</Text>
        </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View> 

        <TouchableOpacity onPress={() => Actions.input_event()} style={styles.button}>  
        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}> 
            <Image style={styles.icones}
                source={require('../images/oracao.png')} />
            <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Eventos</Text> 
        </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>   
      
      </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3E3E3E',
  }, 
  container2: {
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
});
