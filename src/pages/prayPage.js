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


export default class alterPassPage extends Component {
    constructor() {
        super();
        this.state = {
            prayName: "",
            pray: "",
        }
    }

    orderPray = () => {
        let model = {
            prayName: this.state.prayName ? this.state.prayName : "anonimo",
            pray: this.state.pray
        }
        Axios.post(API.URL.URLPROD + "pray", model).then((sucess) => {
            console.log("suce", sucess)
            Alert.alert("Ore!", "Pedido de oração feito :D")
            this.setState({ prayName: "", pray: "" })
            Actions.refresh({key:Math.random()})

        }).catch((error) => {
            console.log("error", error)
            Alert.alert("Falha", "Não foi possivel efetuar o login :(")
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
                    <Text style={styles.textHeader}> Pedido de Oração</Text>
                </View>

                <View style={styles.container2}>

                    <View style={styles.space}></View>
                    <View style={styles.space}></View>
                    <View style={styles.space}></View>

                    <TextInput
                        onChangeText={value => this.setState({ prayName: value })}
                        style={styles.inputBox}
                        placeholder="Digite seu nome (Opcional)"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        onChangeText={value => this.setState({ pray: value })}
                        style={styles.inputBox2}
                        placeholder="Digite seu pedido aqui..."
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />

                    <TouchableOpacity onPress={() => this.orderPray()} style={styles.button}>
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
        justifyContent: "center",
        alignItems: "flex-start",
        width: 20,
        height: 21,
    },
});

