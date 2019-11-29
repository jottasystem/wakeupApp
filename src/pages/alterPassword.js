import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import { Actions } from "react-native-router-flux";


export default class alterPassPage extends Component {
    constructor() {
        super();
        this.state = {
            before_password: "",
            password: "",
            confirm_password: "",       
        }
    }

    render() {
        console.log(this.state)
        return (
          <View style={styles.container}>

            <View style={styles.space}></View>
            
            <View style={styles.header}>
               <Image style={styles.containerlogo }
              source={require('../images/voltar.png')} />  
              <Text style={{color:'white', fontSize: 18,fontWeight: '600' }}> Alterar Senha</Text>
            </View>

            <View style={styles.container2}>

                    <View style={styles.space}></View>
                    <View style={styles.space}></View>
                    <View style={styles.space}></View>

                    <TextInput
                        onChangeText={value => this.setState({ before_password: value })}
                        style={styles.inputBox}
                        placeholder="Senha atual"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        onChangeText={value => this.setState({ password: value })}
                        style={styles.inputBox}
                        placeholder="Nova senha"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        onChangeText={value => this.setState({ confirm_password: value })}
                        style={styles.inputBox}
                        placeholder="Confirme a senha"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="#ffffff"
                    />
                    
                    <View style={styles.space}></View>
                    
                    <TouchableOpacity onPress={() => Actions.alert()} style={styles.button}>
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
    //   justifyContent: "center",
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
    space:{
      width: 17,
      height: 17,
    },
    header:{
        height: 60, 
        justifyContent: 'flex-start', 
        alignItems: "center", 
        backgroundColor: "#363636", 
        flexDirection: 'row',
    },
    containerlogo: {
        justifyContent: "center",
        alignItems: "flex-start",
        width: 20,
        height: 11,
    }
});



