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
} from "react-native"


export default class InputEventPage extends Component {

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
                    <Text style={styles.logoText}>Estamos na tela input devocional</Text>
                </View>
                <View style={styles.singupTextCont}>
                    <Text style={styles.singupText}>Don't' have an account yet?</Text>
                    <Text style={styles.signupButton}>Singup</Text>
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
        borderColor: "gray",
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
        backgroundColor: "#1c313a",
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