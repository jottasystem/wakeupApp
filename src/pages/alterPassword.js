import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    AsyncStorage,
} from "react-native";
import { Actions } from "react-native-router-flux";
import Axios from "axios";
import API from "../config/AppConstants"


export default class alterPassPage extends Component {
    constructor() {
        super();
        this.state = {
            cpf: "",
            password: "",
            confirm_password: "",
            loading: false
        }
    }

    updateUser = async () => {
        this.setState({ loading: true })
        if (this.state.password != this.state.confirm_password) {
           await this.setState({ loading: true })

            return Alert.alert("Confira", "As senhas digitadas não confere.")
        }
        if (this.state.cpf != this.props.user.cpf) {
           await this.setState({ loading: true })
            return Alert.alert("Confira", "CPF não confere com o cadastrado.")
        }
        let model = {
            "name": this.props.name,
            "cpf": this.props.user.cpf,
            "data_nasc": this.props.data_nasc,
            "email": this.props.email,
            "celular": this.props.celular,
            "password": this.state.confirm_password
        }

        console.log("URL", API.URL.URLPROD + "register/" + this.props.user._id)
        Axios.put(API.URL.URLPROD + "register/" + this.props.user._id, model).then((sucess) => {
            console.log("suce", sucess)
            AsyncStorage.setItem("user", JSON.stringify(sucess.data))
            Actions.main()
        }).catch(async (error) => {
            await this.setState({ loading: false })

            console.log("error", error)
            Alert.alert("Falha", "Não foi possivel trocar senha :(")
        }).finally(async (finish) => {
            await this.setState({ loading: false })

        })
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.space}></View>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Image style={styles.containerlogo}
                            source={require('../images/voltar.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}> Alterar Senha</Text>
                </View>

                <View style={styles.container2}>

                    <View style={styles.space}></View>
                    <View style={styles.space}></View>
                    <View style={styles.space}></View>

                    <TextInput
                        onChangeText={value => this.setState({ cpf: value })}
                        style={styles.inputBox}
                        placeholder="CPF"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        onChangeText={value => this.setState({ password: value })}
                        style={styles.inputBox}
                        placeholder="Nova senha"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                        secureTextEntry={true}
                    />
                    <TextInput
                        onChangeText={value => this.setState({ confirm_password: value })}
                        style={styles.inputBox}
                        placeholder="Confirme a senha"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                        secureTextEntry={true}
                    />

                    <View style={styles.space}></View>

                    <TouchableOpacity onPress={() => this.updateUser()} style={styles.button}>
                        <Text style={styles.registerButton}>{this.state.loading ? "Salvando.." : "Salvar"}</Text>
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
        paddingHorizontal: 5

    },
    containerlogo: {
        justifyContent: "center",
        alignItems: "flex-start",
        width: 20,
        height: 11,
    }
});



