import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    AsyncStorage
} from "react-native";
import { Actions } from "react-native-router-flux";
import Axios from "axios";
import API from "../config/AppConstants"


export default class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            data_nasc: "",
            cpf: "",
            email: "",
            celular: "",
            _id:""
        }
        this.getInfo()
    }
    getInfo = () => {
        AsyncStorage.getItem("user").then((sucess) => {
            console.log("olha o user", JSON.parse(sucess))
            let user = JSON.parse(sucess)

            Axios.get(API.URL.URLPROD + "register/" + user._id).then((sucess) => {
                console.log("atualizada", sucess)
                this.setState({ ...sucess.data })
            }).catch((error) => {
                console.log("error", error)
            })
        })
    }

    updateUser = () => {
        let model = {
            "name": this.state.name,
            "cpf": this.state.cpf,
            "data_nasc": this.state.data_nasc,
            "email": this.state.email,
            "celular": this.state.celular,
        }

        Axios.put(API.URL.URLPROD + "register/" + this.state._id, model).then((sucess) => {
            console.log("suce", sucess)
            AsyncStorage.setItem("user", JSON.stringify(sucess.data))
            Actions.main()
            Alert.alert("Sucesso!", "Dados alterados :)")

        }).catch((error) => {
            console.log("error", error)
            Alert.alert("Falha", "Não foi possivel trocar senha :(")
        })
    }
    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>
                <View style={styles.space}></View>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Image style={styles.containerlogo}
                            source={require('../images/voltar.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Perfil</Text>
                </View>

                <View style={styles.container2}>

                    <View style={styles.space}></View>

                    <Image style={styles.imagePerfil}
                        source={require('../images/perfil.jpg')} />

                    <View style={styles.space}></View>

                    <TextInput
                        value={this.state.name}
                        onChangeText={value => this.setState({ name: value })}
                        style={styles.inputBox}
                        placeholder="Name"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        value={this.state.data_nasc}
                        onChangeText={value => this.setState({ data_nasc: value })}
                        style={styles.inputBox}
                        placeholder="Data de Nascimento"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        value={this.state.email}
                        onChangeText={value => this.setState({ email: value })}
                        style={styles.inputBox}
                        placeholder="E-mail"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        value={this.state.celular}

                        onChangeText={value => this.setState({ celular: value })}
                        style={styles.inputBox}
                        placeholder="Celular"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />

                    <View style={styles.space}></View>

                    <TouchableOpacity onPress={() => this.updateUser()} style={styles.button}>
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
    space: {
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
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    imagePerfil: {
        width: 200,
        height: 190,
        borderRadius: 80,
    },
    containerlogo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: 20,
        height: 21,
    },
});



