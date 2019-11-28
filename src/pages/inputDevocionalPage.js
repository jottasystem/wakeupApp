// import React, { Component } from "react"
// import { StyleSheet, Text, View, Button , ScrollView, Image, TouchableOpacity} from 'react-native';


// export default class InputDevocionalPage extends Component {

//     render() {
//         console.log(this.state)
//         return (
//             <View style={styles.containerForm}>

//                 <View style={styles.containerlogo}>
//                     <Text style={styles.logoText}>Criar Devocional</Text>
//                     <Image style={{ width: 150, height: 121 }}
//                         source={require('../images/logo.png')} />
//                     <Text>Adicionar Autor</Text>
//                 </View>
                
//                 <TextInput
//                     onChangeText={value => this.setState({ name: value })}
//                     style={styles.inputBox}
//                     placeholder="Título"
//                     underlineColorAndroid="rgba(0,0,0,0)"
//                     placeholderTextColor="#ffffff"
//                 />
//                 <TextInput
//                     onChangeText={value => this.setState({ cpf: value })}
//                     style={styles.inputBox}
//                     placeholder="Digite seu devocional aqui ..."
//                     underlineColorAndroid="rgba(0,0,0,0)"
//                     placeholderTextColor="#ffffff"
//                 />
//             </View>
                
//         )
//     }

// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#455a64",
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     viewLogo: {
//         flex: 1,
//         justifyContent: "flex-start",
//         alignItems: "center"
//     },
//     singupText: {
//         color: "rgba(255,255,255,0.6)",
//         fontSize: 16
//     },
//     singupTextCont: {
//         flexGrow: 1,
//         justifyContent: "center",
//         alignItems: "flex-end",
//         paddingVertical: 16,
//         flexDirection: "row"
//     },
//     viewEnter: {
//         flex: 0,
//         borderColor: "gray",
//         borderWidth: 50,
//         backgroundColor: "white",
//         borderWidth: 10,
//         marginTop: 10,
//         justifyContent: "flex-end",
//         alignItems: "center"
//     },
//     signupButton: {
//         color: "#ffffff",
//         fontSize: 16,
//         fontWeight: '500'
//     },
//     containerlogo: {
//         flexGrow: 2,
//         justifyContent: "flex-end",
//         alignItems: "center"
//     },
//     logoText: {
//         marginVertical: 15,
//         fontSize: 18,
//         color: "rgba(255,255,255,0.6)",
//     },
//     containerform: {
//         flexGrow: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     inputBox: {
//         width: 300,
//         backgroundColor: "rgba(255,255,255,0.3)",
//         borderRadius: 25,
//         paddingHorizontal: 16,
//         fontSize: 16,
//         color: '#ffffff',
//         marginVertical: 10,
//     },
//     button: {
//         width: 300,
//         backgroundColor: "#1c313a",
//         borderRadius: 25,
//         marginVertical: 10,
//         paddingVertical: 12,
//         alignItems: "center"
//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: '500',
//         color: '#ffffff'
//     }
// });