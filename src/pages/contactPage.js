import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import { Actions } from "react-native-router-flux";


export default class ContactPage extends Component {

    render() {
        console.log(this.state)
        return (
          <View style={styles.container}>

            <View style={{height: 60, justifyContent: 'space-between', alignItems: "center", backgroundColor: "#363636", flexDirection: 'row'}}>
               {/* <Image style={styles.containerlogo }
              source={require('../images/logo.png')} /> */}
              <Text style={{color:'white', fontSize: 18,fontWeight: '600' }}>Contatos</Text>
            </View>

            <View style={styles.container2}>

                    <View style={styles.space}></View>

                    <Image style={{width: 200,height: 190}}
                      source={require('../images/perfil.jpg')} />

                    <View style={styles.space}></View>

                    <Text>São Paulo - Comunidade Cristã Inove</Text>

                    <View>
                        <Image style={styles.containerlogo }
                        source={require('../images/facebook.png')} /> 
                        <Text>Av. Sezefredo Fagundes, 928 - Tucuruvi</Text>
                    </View>

                    <View style={styles.space}></View>

                    <Text>Cascavel - Wake Up Church</Text>

                    <View>
                        <Image style={styles.containerlogo }
                        source={require('../images/facebook.png')} /> 
                        <Text>Rua Campos Elisios, 937</Text>
                    </View>

                    <View style={styles.space}></View>

                    <Text>Redes Sociais</Text>

                    <View>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/wakeupmovementoficial/')} // TROCAR URL
                            style={styles.viewMiddle}>
                            <Image style={styles.containerlogo }
                            source={require('../images/facebook.png')} /> 
                            <Text>Wake Up Movement Oficial Tv</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/n/?wakeupmovementoficial')} // TROCAR URL
                            style={styles.viewTop}>
                            <Image style={styles.containerlogo }
                            source={require('../images/instagram.png')} /> 
                            <Text>@wakeupmovement</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('COLOCAR URL')} // TROCAR URL
                            style={styles.viewMiddle}> 
                            <Image style={styles.containerlogo }
                            source={require('../images/instagram.png')} /> 
                            <Text>Clique aqui e entre no nosso grupo do Whatsapp</Text>
                        </TouchableOpacity>
                    </View>

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
    Text: {
        width: 300,
        height: 55,
        fontSize: 25,
        color: "#ffffff",       
    },
    space:{
      width: 17,
      height: 17,
    },
    viewTop: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewMiddle: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    description: {
        left: 8,
        color: 'white',
        fontSize: 16
    }
});



