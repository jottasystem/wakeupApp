import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { Router } from "react-native-router-flux";
import { Actions } from "react-native-router-flux";


export default class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            cpf: "",
            email: "",
            password: "",
            confirm_password: "",           
        }
    }

    render() {
        console.log(this.state)
        return (
            <ImageBackground source={require("../images/tela.jpg")} style={styles.container}>
                <StatusBar
                    backgroundColor={"transparent"}
                    translucent
                    barStyle={"light-content"}
                />
                <View style={styles.containerForm}>
                    <Text style={styles.Text}>  Register {Router.title} </Text>
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
                        onChangeText={value => this.setState({ password: value })}
                        style={styles.inputBox}
                        placeholder="Password"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                        secureTextEntry= {true}
                    />
                    <TextInput
                        onChangeText={value => this.setState({ confirm_password: value })}
                        style={styles.inputBox}
                        placeholder="Confirm Password"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                        secureTextEntry= {true}
                    />

                    <TouchableOpacity onPress={() => Actions.main()} style={styles.button}>
                        <Text style={styles.registerButton}>Start</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>


        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#455a64",
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
});



