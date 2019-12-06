import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from "react-native";
import { Actions } from "react-native-router-flux";


export default class ContactPage extends Component {

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
                    <Text style={styles.titleHeader}> Contatos</Text>
                </View>
                <View style={styles.space}></View>


                <View style={styles.container2}>

                    <Image style={styles.imageDevocional}
                        source={require('../images/banner3.jpg')} />

                    <View style={styles.space}></View>
                    <View>
                        <Text style={styles.titles}> São Paulo - Comunidade Cristã Inove</Text>

                        <View style={styles.viewIcons}>
                            <Image style={styles.containerlogo}
                                source={require('../images/localizacao.png')} />
                            <Text style={styles.texts}>   Av. Sezefredo Fagundes, 928 - Tucuruvi</Text>
                        </View>

                        <View style={styles.space}></View>

                        <Text style={styles.titles}> Cascavel - Wake Up Church</Text>

                        <View style={styles.viewIcons}>
                            <Image style={styles.containerlogo}
                                source={require('../images/localizacao.png')} />
                            <Text style={styles.texts}>   Rua Campos Elisios, 937</Text>
                        </View>

                        <View style={styles.space}></View>

                        <Text style={styles.titles}> Redes Sociais</Text>

                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/wakeupmovementoficial/')}
                            style={styles.viewMiddle}>
                            <Image style={{ alignItems: 'flex-start', justifyContent: 'flex-start', width:16, height: 16}}
                                source={require('../images/facebook.png')} />
                            <Text style={styles.texts}>  Wake Up Movement Oficial Tv</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/wakeupmovementoficial/')}
                            style={styles.viewTop}>
                            <Image style={styles.containerlogo}
                                source={require('../images/insta.png')} />
                            <Text style={styles.texts}>  wakeupmovementoficial</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.space}></View>

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
    container3: {
        flex: 1,
        backgroundColor: "#3E3E3E",
        justifyContent: "center",
        alignItems: "center",
    },
    texts: {
        fontSize: 16,
        color: "white",
    },
    titles: {
        fontSize: 16,
        fontWeight: "500",
        color: "white",
    },
    space: {
        width: 17,
        height: 17,
    },
    viewTop: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewMiddle: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    description: {
        left: 8,
        color: 'white',
        fontSize: 16
    },
    viewIcons: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    header: {
        height: 60,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: "#363636",
        flexDirection: 'row',
        paddingHorizontal:5

    },
    titleHeader: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    imagePerfil: {
        width: 200,
        height: 190,
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



