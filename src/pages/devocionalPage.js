import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import { Actions } from "react-native-router-flux";


export default class DevocionalPage extends Component {
    constructor() {
        super();
        this.state = {
            titleText: "Teste Wake Up",
            bodyText: 'Espero que dê certo em nome de Jesus.',
        }
    }

    render() {
        console.log(this.state)
        return (
          <View style={styles.container}>

            <View style={{height: 60, justifyContent: 'space-between', alignItems: "center", backgroundColor: "#363636", flexDirection: 'row'}}>
               {/* <Image style={styles.containerlogo }
              source={require('../images/logo.png')} /> */}
              <Text style={{color:'white', fontSize: 18,fontWeight: '600' }}> Devocional</Text>
            </View>

            <View style={styles.container2}>

                    <View style={styles.space}></View>

                    <Image style={{width: 200,height: 190 }}
                        source={require('../images/perfil.jpg')} />

                    <View style={styles.space}></View>

                    {/* Pensar em como vai trazer o texto para o campinho | colocar botoes de compartilhar */}
                    
                    <Text style={styles.baseText}>
                        <Text style={styles.titleText} onPress={this.onPressTitle}>
                          {this.state.titleText}{'\n'}{'\n'}
                        </Text>
                        <Text numberOfLines={5}>
                          {this.state.bodyText}
                        </Text>
                     </Text>
           
                    <View style={styles.space}></View>
                    
              </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3E3E3E",
    },
    container2: {
      flex: 1,
      backgroundColor: "#3E3E3E",
      justifyContent: "center",
      alignItems: "center",
  },
    registerButton: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: '500',  
        justifyContent: "center",
        alignItems: "center",
    },
    inputBox: {
        width: 300,
        height: 39,
        backgroundColor: "rgba(255,255,255,0.4)",
        borderRadius: 15,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
    },
    button: {
        //width: 200,
        backgroundColor: "#293438",
        borderRadius: 25,
        marginVertical: 30,
        paddingVertical: 7,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    Text: {
        width: 300,
        height: 55,
        fontSize: 25,
        color: "#ffffff",
        // marginVertical: 15,
        
    },
    space:{
      width: 17,
      height: 17,
    },
});



