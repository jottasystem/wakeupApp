import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
} from "react-native";
import { Actions } from "react-native-router-flux";
import Axios from "axios";
import API from "../config/AppConstants"

import InputScrollView from "react-native-input-scroll-view";

export default class alterPassPage extends Component {
    constructor() {
        super();
        this.state = {
            titlePray: "",
            authorPray: "",
            textPray: "",
            loading: false
        }
    }

    postDevocional = () => {
        if (this.state.titlePray == "" &&
            this.state.authorPray == "" &&
            this.state.textPray == "") {
            Alert.alert("Vazio!", "voce precisa passar informação para o novo devocional")
            return
        }
        this.setState({ loading: true })
        let model = {
            "titlePray": this.state.titlePray,
            "authorPray": this.state.authorPray,
            "textPray": this.state.textPray
        }
        Axios.post(API.URL.URLPROD + "devocional", model).then((sucess) => {
            console.log("suce", sucess)
            Alert.alert("Criado!", "Membros serão notificado sobre o novo devocional")
            this.setState({ titlePray: "", authorPray: "", textPray: "" })
            Actions.refresh({ key: Math.random() })

        }).catch((error) => {
            console.log("error", error)
            Alert.alert("Falha", "Não foi possivel criar devocional :(")
        }).finally((finish) => {
            this.setState({ loading: false })
        })
    }
    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>
                <InputScrollView keyboardShouldPersistTaps="handled">

                    <View style={styles.space}></View>

                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Image style={styles.containerlogo}
                                source={require('../images/voltar.png')} />
                        </TouchableOpacity>
                        <Text style={styles.textHeader}> Novo devocional</Text>
                    </View>

                    <View style={styles.container2}>

                        <View style={styles.space}></View>

                        <Image style={styles.imageDevocional}
                            source={require('../images/banner3.jpg')} />

                        <TextInput
                            onChangeText={value => this.setState({ titlePray: value })}
                            style={styles.inputBox}
                            placeholder="Título"
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="#ffffff"
                        />
                        <TextInput
                            onChangeText={value => this.setState({ authorPray: value })}
                            style={styles.inputBox}
                            placeholder="Nome do autor"
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="#ffffff"
                        />
                        <TextInput
                            onChangeText={value => this.setState({ textPray: value })}
                            style={styles.inputBox2}
                            placeholder="Digite o devocional aqui..."
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="#ffffff"
                        />

                        <TouchableOpacity onPress={() => this.postDevocional()} style={styles.button}>
                            <Text style={styles.registerButton}>{this.state.loading ? "Enviando.." : "Enviar"}</Text>
                        </TouchableOpacity>
                    </View>
                </InputScrollView>
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
        justifyContent: "flex-start",
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
        justifyContent: "flex-start",
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
    containerlogo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: 20,
        height: 21,
    },
    imageDevocional: {
        width: 350,
        height: 190,
        justifyContent: "center",
        alignItems: "center",
    },
});

