import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { Actions } from "react-native-router-flux";


export default class alterPassPage extends Component {
    constructor() {
        super();
        this.state = {
            titleEvent: "",
            dateEvent: "",
            timeEvent: "",
            descriEvent: "",
            payEvent: "",      
        }
    }

    render() {
        console.log(this.state)
        return (
          <View style={styles.container}>

            <View style={styles.header}>
               <Image style={styles.containerlogo }
              source={require('../images/voltar.png')} />
              <Text style={styles.textHeader}> Novo evento</Text>
            </View>

            <View style={styles.container2}>

                    <Image style={styles.imageDevocional}
                        source={require('../images/banner3.jpg')} /> {/* alterar para imagem de input */}

                    <View style={styles.space}></View>
                    <View style={styles.space}></View>

                    <TextInput
                        onChangeText={value => this.setState({ titleEvent: value })}
                        style={styles.inputBox}
                        placeholder="Título do evento"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        onChangeText={value => this.setState({ dateEvent: value })}
                        style={styles.inputBox}
                        placeholder="Data"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        onChangeText={value => this.setState({ timeEvent: value })}
                        style={styles.inputBox}
                        placeholder="horário"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        onChangeText={value => this.setState({ descriEvent: value })}
                        style={styles.inputBox2}
                        placeholder="Digite a descrição do evento aqui..."
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        onChangeText={value => this.setState({ payEvent: value })}
                        style={styles.inputBox}
                        placeholder="Valor do ingresso"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    
                    <TouchableOpacity onPress={() => Actions.alert()} style={styles.button}>
                        <Text style={styles.registerButton}>Enviar</Text>
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
        width: 350,
        height: 39,
        backgroundColor: "rgba(255,255,255,0.4)",
        borderRadius: 15,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
        justifyContent:"flex-start",
    },
    inputBox2: {
        width: 350,
        height: 159,
        backgroundColor: "rgba(255,255,255,0.4)",
        borderRadius: 15,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
        justifyContent:"flex-start",
    },
    button: {
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
    },
    space:{
      width: 17,
      height: 17,
    },
    header: {
        height: 60, 
        justifyContent: 'space-between', 
        alignItems: "center", 
        backgroundColor: "#363636", 
        flexDirection: 'row',
    },
    textHeader: {
        color:'white', 
        fontSize: 18,
        fontWeight: '600', 
    },
    imageDevocional: {
        width: 400,
        height: 190, 
        justifyContent:"center", 
        alignItems:"center", 
    }
});

