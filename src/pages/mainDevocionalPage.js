import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import { Actions } from "react-native-router-flux";
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default class NotificationPage extends Component {
  static navigationOptions = { header: null };

  render() {
    return (

      <ScrollView style={{backgroundColor:'#3E3E3E'}}> 

      <View style={styles.container}>

        <View style={styles.space}></View>

        <View style={styles.header}>
            <TouchableOpacity onPress={() => Actions.menu()} style={styles.button}> 
              <Image style={styles.containerlogo }
              source={require('../images/voltar.png')} />
            </TouchableOpacity>
            <Text style={styles.titleHeader}> Devocionais</Text>
        </View>
        
        
        <View style={styles.space}></View>

        <TouchableOpacity onPress={() => Actions.devocional()} style={styles.button}> 
        <Card 
            containerStyle={{backgroundColor:'grey', borderColor:'grey'}}
            wrapperStyle={{backgroundColor:'grey'}}>
            <Text style={{marginBottom: 10, color: 'white', fontSize: 16}}>
              O começo de tudo
            </Text>
          </Card>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.devocional()} style={styles.button}> 
        <Card 
            containerStyle={{backgroundColor:'grey', borderColor:'grey'}}
            wrapperStyle={{backgroundColor:'grey'}}>
            <Text style={{marginBottom: 10, color: 'white', fontSize: 16}}>
              Não desista de sonhar
            </Text>
          </Card>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.devocional()} style={styles.button}> 
        <Card 
            containerStyle={{backgroundColor:'grey', borderColor:'grey'}}
            wrapperStyle={{backgroundColor:'grey'}}>
            <Text style={{marginBottom: 10, color: 'white', fontSize: 16}}>
              Ruja como um leão
            </Text>
          </Card>  
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
    justifyContent: 'flex-start', 
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
  },
  containerlogo: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 20,
    height: 21,
},
});
