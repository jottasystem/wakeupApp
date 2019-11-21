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


export default class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            cpf: "",
            email: "",
            datanasc: "",          
        }
    }

    render() {
        console.log(this.state)
        return (
          <View style={styles.container}>

            <View style={{height: 60, justifyContent: 'space-between', alignItems: "center", backgroundColor: "#363636", flexDirection: 'row'}}>
               {/* <Image style={styles.containerlogo }
              source={require('../images/logo.png')} /> */}
              <Text style={{color:'white', fontSize: 18,fontWeight: '600' }}>Perfil</Text>
            </View>

            <View style={styles.container2}>

                    <View style={styles.space}></View>

                    <Image style={{width: 200,height: 190, borderRadius:80 }}
                      source={require('../images/perfil.jpg')} />

                    <View style={styles.space}></View>

                    <TextInput
                        onChangeText={value => this.setState({ name: value })}
                        style={styles.inputBox}
                        placeholder="Name"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        onChangeText={value => this.setState({ cpf: value })}
                        style={styles.inputBox}
                        placeholder="CPF"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        onChangeText={value => this.setState({ email: value })}
                        style={styles.inputBox}
                        placeholder="E-mail"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        onChangeText={value => this.setState({ datanasc: value })}
                        style={styles.inputBox}
                        placeholder="Data de Nascimento"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                        secureTextEntry= {true}
                    />
                    
                    <View style={styles.space}></View>
                    
                    <TouchableOpacity onPress={() => Actions.main()} style={styles.button}>
                        <Text style={styles.registerButton}>Salvar</Text>
                    </TouchableOpacity>
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



