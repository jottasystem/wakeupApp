import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
    Alert,
    AsyncStorage,
} from "react-native";
import { Actions } from "react-native-router-flux";
import Axios from "axios";
import API from "../config/AppConstants"

export default class LoginPage extends Component {

    constructor() {
        super();
        this.state = {
            email: "jotta.paulo27@gmail.com",
            password: "102030"
        }
    }

    Login = () => {
        let model = {
            email: this.state.email,
            password: this.state.password
        }
        Axios.post(API.URL.URLPROD + "login", model).then((sucess) => {
            console.log("suce", sucess)
            Actions.main()
            AsyncStorage.setItem("user", JSON.stringify(sucess.data))
        }).catch((error) => {
            console.log("error", error)
            Alert.alert("Falha", "Não foi possivel efetuar o login :(")
        })
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
                <View style={styles.containerlogo}>
                    <Image style={{ width: 150, height: 121 }}
                        source={require('../images/logo.png')} />
                    <Text style={styles.logoText}>Welcome</Text>
                </View>
                <View style={styles.containerform}>
                    <TextInput
                        onChangeText={value => this.setState({ email: value })}
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Email"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        onChangeText={value => this.setState({ password: value })}
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="#ffffff"
                    />
                    <TouchableOpacity onPress={() => this.Login()} style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.forgot_password()}>
                        <Text style={styles.signupButton2}>Não lembra a senha?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.singupTextCont}>
                    <Text style={styles.signupButton}>Ainda não possui uma conta?</Text>
                    <TouchableOpacity onPress={() => Actions.register()}>
                        <Text style={styles.signupButton2}>Singup</Text>
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
    viewLogo: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    singupText: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 16
    },
    singupTextCont: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingVertical: 16,
        flexDirection: "row"
    },
    viewEnter: {
        flex: 0,
        borderColor: "grey",
        borderWidth: 50,
        backgroundColor: "white",
        borderWidth: 10,
        marginTop: 10,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    signupButton: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: '300'
    },
    signupButton2: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: '500'
    },
    containerlogo: {
        flexGrow: 2,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: "rgba(255,255,255,0.6)",
    },
    containerform: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputBox: {
        width: 300,
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
    },
    button: {
        width: 300,
        backgroundColor: "#293438",
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
        alignItems: "center"
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff'
    }
});

