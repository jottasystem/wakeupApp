import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    SafeAreaView,
    FlatList,
    ScrollView,
} from "react-native";
import { SliderBox } from 'react-native-image-slider-box';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Actions } from "react-native-router-flux";
import BackButton from '../components/buttons/BackButton';
import { Header, Left, Body } from 'native-base';

export default class BackupScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [
        'http://wakeupmovement.com.br/wp-content/uploads/2019/05/df440ae2-39e7-4f13-8b96-049c34448443.jpg',
        'http://wakeupmovement.com.br/wp-content/uploads/2019/05/a68a3514-ef15-49d1-927c-959ad988a46e.jpg',
        'http://wakeupmovement.com.br/wp-content/uploads/2019/05/youtube.jpg',
      ]
    };
  }
  
    render() {
      return (
      
      <ScrollView style={{backgroundColor:'#3E3E3E'}}> 

      <View style={styles.container}>
      
        <View style={{height:60,justifyContent: 'space-between', alignItems: "center", backgroundColor: "#363636", flexDirection: 'row'}}>
          <Image style={styles.containerlogo }
          source={require('../images/logo.png')} />
          <TouchableOpacity onPress={() => Actions.profile()} style={styles.button}>
            <Image style={styles.perfil}
            source={require('../images/perfil.jpg')} />
          </TouchableOpacity>
        </View>

        {/* s<SliderBox images={this.state.images}/> */}
        <SliderBox
            images={this.state.images}
            onCurrentImagePressed={index =>
            console.warn('image ${index} pressed')
          }
          
        />
        <View style={styles.space}></View>  
        <Text style={{color:'white', fontSize: 18,fontWeight: '600' }}>   Devocional</Text>
        {/* <View style={styles.space}></View>      */}
          <Card 
            containerStyle={{backgroundColor:'#3E3E3E', borderColor:'#3E3E3E'}}
            wrapperStyle={{backgroundColor:'#3E3E3E'}}
            imageStyle={{widht:60, height:185}}
            image={require('../images/banner3.jpg')}>
            

            <Text style={{marginBottom: 10, color: 'white', fontSize: 16}}>
              Entenda como surgiu esse movimento, saiba como essa história começou.
            </Text>
            
            {/* <Button 
              // icon={<Icon name='code' color='#293438' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: "black"}}
              title='Leia mais' /> */}
          </Card>
        </View>
        <View style={styles.space}></View>  
        <Text style={{color:'white', fontSize: 18,fontWeight: '600' }}>   Novidades</Text>
        {/* <View style={styles.space}></View>      */}
          <Card 
            containerStyle={{backgroundColor:'#3E3E3E', borderColor:'#3E3E3E'}}
            wrapperStyle={{backgroundColor:'#3E3E3E'}}
            imageStyle={{widht:60, height:185}}
            image={require('../images/banner28.jpg')}>
            
            <Text style={{marginBottom: 10, color: 'white', fontSize: 16}}>
              Reserve na sua agenda:
              Conferência Energy - 18 de Dezembro as 19h - Teatro Mackenzie.
            </Text>
          </Card>
        </ScrollView> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3E3E3E',
  },
  test:{
    backgroundColor:'#3E3E3E'
  },
  containerlogo: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 50,
    height: 41,
  },
  perfil: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: 50,
    height: 41,
    borderRadius: 27,
  },
  containerCards:{
    flex: 2.5,
    // alignItems: "flex-start",
    // justifyContent: "center",
    flexDirection: 'row',
  },
  containerCards2:{
    flex: 2.5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: 'row',
  },
  cards: {
    // flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 90,
    backgroundColor: "green",
  },
  textCards: {
    // flex: 2.5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 150,
    height: 50,
    // backgroundColor: "green",
  },
  spaceCards:{
    width: 20,
    height: 50,
  },
  space:{
    width: 20,
    height: 10,
  },
  imageCard:{
    width: 50,
    height: 50,
  },
});

