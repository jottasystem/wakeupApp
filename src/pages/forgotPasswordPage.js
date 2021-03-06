import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Alert,
} from "react-native";
import { Actions } from "react-native-router-flux";
import Axios from "axios";
import API from "../config/AppConstants"

export default class ForgotPasswordPage extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            loading: false
        }
    }

    Forgot = () => {
        let model = {
            email: this.state.email,
        }
        this.setState({ loading: true })

        Axios.post(API.URL.URLPROD + "forgot", model).then((sucess) => {
            console.log("jott", sucess)
            if (sucess.data) {
                return Actions.alter_page({ user: sucess.data })
            } else {
                Alert.alert("Falha", "Não foi possivel localizar o usuario :(")
            }

        }).catch((error) => {
            console.log("error", error)
            Alert.alert("Falha", "Falha de sistema :(")
        }).finally((sucess) => {
            this.setState({ loading: false })
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
                <View style={styles.containerform3}>
                </View>
                <View style={styles.containerlogo}>
                    <Image style={{ width: 130, height: 104 }}
                        source={require('../images/logo.png')} />
                </View>
                <View style={styles.containerform}>
                    <Text style={styles.buttonText}>Digite seu e-mail:</Text>
                    <TextInput
                        onChangeText={value => this.setState({ email: value })}
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Email"
                        placeholderTextColor="#ffffff"
                    />
                </View>
                <View style={styles.containerform2}>
                    <TouchableOpacity onPress={() => this.Forgot()} style={styles.button}>
                        <Text style={styles.buttonText}>{ this.state.loading?"Enviando...":"Enviar"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerform3}>
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
    containerlogo: {
        flexGrow: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: "rgba(255,255,255,0.6)",
    },
    containerform: {
        flexGrow: 1,
        justifyContent: "flex-end",
    },
    containerform2: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    containerform3: {
        flexGrow: 2,
        justifyContent: "flex-start",
        alignItems: "flex-start"
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
        width: 100,
        backgroundColor: "#293438",
        borderRadius: 25,
        marginVertical: 7,
        paddingVertical: 9,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
        alignItems: 'center'
    }
});

