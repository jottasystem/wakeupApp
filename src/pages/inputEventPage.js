import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
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
          <ScrollView style={styles.scrolls}> 
            <View style={styles.container}>

                <View style={styles.space}></View>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => Actions.administrator()} style={styles.button}> 
                        <Image style={styles.containerlogo }
                        source={require('../images/voltar.png')} />
                    </TouchableOpacity>
                <Text style={styles.textHeader}> Novo evento</Text>
                </View>

                <View style={styles.container2}>

                <View style={styles.space}></View>

                        <Image style={styles.imageDevocional}
                            source={require('../images/banner3.jpg')} />

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
            </ScrollView>
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
        justifyContent: 'flex-start', 
        alignItems: "center", 
        backgroundColor: "#363636", 
        flexDirection: 'row',
    },
    textHeader: {
        color:'white', 
        fontSize: 18,
        fontWeight: '600', 
    },
    containerlogo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: 20,
        height: 21,
    },
    imageDevocional: {
        width: 350,
        height: 190, 
        justifyContent:"center", 
        alignItems:"center", 
    },
    scrolls: {
        backgroundColor:'#3E3E3E',
    },
});

