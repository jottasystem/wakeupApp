import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Alert,
} from "react-native";
import { Router } from "react-native-router-flux";
import { Actions } from "react-native-router-flux";
import Axios from "axios";
import API from "../config/AppConstants"
import InputScrollView from "react-native-input-scroll-view";

export default class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            cpf: "",
            data_nasc: "",
            email: "",
            celular: "",
            password: "",
            confirm_password: "",
            loading: false
        }
    }

    postUser = () => {
        if (this.state.name == "" &&
            this.state.cpf == "" &&
            this.state.data_nasc == "" &&
            this.state.email == "" &&
            this.state.celular == "" &&
            this.state.password) {
            Alert.alert("Erro!", "Todas informações devem ser preenchida :(")
            return
        }
        this.setState({ loading: true })
        let model = {
            "name": this.state.name,
            "cpf": this.state.cpf,
            "data_nasc": this.state.data_nasc,
            "email": this.state.email,
            "celular": this.state.celular,
            "password": this.state.password
        }

        Axios.post(API.URL.URLPROD + "register", model).then((sucess) => {
            console.log("suce", sucess)
            Alert.alert("Parabéns", "Cadastro feito com sucesso :(")
            Actions.pop()
        }).catch((error) => {
            console.log("error", error)
            Alert.alert("Falha", "Não foi possivel efetuar o cadastro :(")
        }).finally((finish) => {
            this.setState({ loading: false })
        })
    }

    render() {

        return (

            <ImageBackground source={require("../images/tela.jpg")} style={styles.container}>
                <StatusBar
                    backgroundColor={"transparent"}
                    translucent
                    barStyle={"light-content"}
                />
                <InputScrollView topOffset={30} keyboardOffset={90} keyboardShouldPersistTaps="handled">
                    <View style={styles.containerForm}>

                        <Text style={styles.Text}>  Register {Router.title} </Text>
                        <TextInput
                            onChangeText={value => this.setState({ name: value })}
                            style={styles.inputBox}
                            placeholder="Name"
                            autoCapitalize
                            autoFocus
                            autoCorrect
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="#ffffff"
                        />
                        <TextInput
                            onChangeText={value => this.setState({ cpf: value })}
                            style={styles.inputBox}
                            placeholder="CPF"
                            maxLength={11}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="#ffffff"
                        />
                        <TextInput
                            onChangeText={value => this.setState({ data_nasc: value })}
                            style={styles.inputBox}
                            maxLength={8}
                            keyboardType={"number-pad"}
                            placeholder="Data de Nascimento"
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
                            onChangeText={value => this.setState({ celular: value })}
                            style={styles.inputBox}
                            placeholder="Celular"
                            maxLength={11}
                            keyboardType={"phone-pad"}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="#ffffff"
                        />
                        <TextInput
                            onChangeText={value => this.setState({ password: value })}
                            style={styles.inputBox}
                            placeholder="Password"
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="#ffffff"
                            secureTextEntry={true}
                        />
                        <TextInput
                            onChangeText={value => this.setState({ confirm_password: value })}
                            style={styles.inputBox}
                            placeholder="Confirm Password"
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="#ffffff"
                            secureTextEntry={true}
                        />

                        <TouchableOpacity onPress={() => this.postUser()} style={styles.button}>
                            <Text style={styles.registerButton}>{this.state.loading ? "Cadastrando..." : "Cadastar"}</Text>
                        </TouchableOpacity>

                    </View>
                </InputScrollView>

            </ImageBackground>


        )
    }
}
const styles = StyleSheet.create({
    containerForm: {
        paddingTop: 100
    },
    container: {
        flex: 1,
        backgroundColor: "#455a64",
        justifyContent: "center",
        alignItems: "center",
    },
    registerButton: {
        color: "#ffffff",
        fontSize: 16,
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
});



