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

      <ScrollView style={{backgroundColor:'#3E3E3E'}}> 

      <View style={styles.container}>
      
       <View style={styles.space}></View>

        <Image style={{width: 200,height: 190, borderRadius:80 }}
          source={require('../images/perfil.jpg')} />

        <View style={styles.space}></View>
        
        <View style={styles.space}></View>
        <View style={styles.space}></View>  
        
        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => Actions.users()} style={styles.button}> 
            <Image style={styles.icones}
                source={require('../images/feito1.png')} />
            <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Usuários</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.space}></View>

        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => Actions.input_devocional()} style={styles.button}>  
            <Image style={styles.icones}
                source={require('../images/senha.png')} />
            <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Publicações</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.space}></View> 

        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>
         <TouchableOpacity onPress={() => Actions.input_event()} style={styles.button}>   
            <Image style={styles.icones}
                source={require('../images/oracao.png')} />
            <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Eventos</Text>
         </TouchableOpacity> 
        </View>
        
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
});
