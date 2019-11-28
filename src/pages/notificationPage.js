import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import { Actions } from "react-native-router-flux";

export default class NotificationPage extends Component {
  static navigationOptions = { header: null };

  render() {
    return (

      <ScrollView style={{backgroundColor:'#3E3E3E'}}> 

      <View style={styles.container}>

        <View style={styles.space}></View>
        <TouchableOpacity onPress={() => Actions.menu()} style={styles.button}>
        <View style={styles.header}>
               <Image style={styles.containerlogo }
              source={require('../images/voltar.png')} />
              <Text style={styles.titleHeader}> Notificação</Text>
            </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>
        
        <TouchableOpacity onPress={() => Actions.devocional()} style={styles.button}> 
        <View style={styles.viewNotifi}>  
        <Image style={styles.containerlogo }
          source={require('../images/logo.png')} />
        <Text style={styles.textNotifi}>  Seja Bem-vindo!</Text>
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
  header: {
    height: 60, 
    justifyContent: 'space-between', 
    alignItems: "center", 
    backgroundColor: "#363636", 
    flexDirection: 'row',
  },
  titleHeader: {
    color:'white', 
    fontSize: 18,
    fontWeight: '600', 
  },
  viewNotifi: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: "center", 
    flexDirection: 'row', 
    borderColor:'white',
  },
  textNotifi: {
    color:'white', 
    fontSize: 20,
    fontWeight: '400',
  }
});
