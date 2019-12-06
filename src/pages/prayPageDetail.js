import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import { Actions } from "react-native-router-flux";


export default class PrayPageDetail extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        console.log("dev ops", this.props)
        let { item } = this.props
        return (
            <ScrollView style={{ backgroundColor: '#3E3E3E' }}>
                <View style={styles.container}>
                    <View style={styles.space}></View>

                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Image style={styles.containerlogo}
                                source={require('../images/voltar.png')} />
                        </TouchableOpacity>
                        <Text style={styles.titleHeader}> Pedido de {item.prayName}</Text>
                    </View>

                    <View style={styles.container2}>

                        <View style={styles.space}></View>

                        <Text style={styles.baseText}>
                            <Text style={styles.titleHeader} onPress={this.onPressTitle}>
                                {item.prayName}{'\n'}{'\n'}
                            </Text>
                            <Text numberOfLines={5}>
                                {item.pray}
                            </Text>
                        </Text>

                        <View style={styles.space}></View>

                    </View>
                </View>
            </ScrollView>
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
    Text: {
        fontSize: 25,
        color: "#ffffff",
    },
    space: {
        width: 17,
        height: 17,
    },
    baseText: {
        color: 'white',
        fontSize: 16,
        alignItems: 'flex-start',
        width: 400,
    },
    header: {
        height: 60,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: "#363636",
        flexDirection: 'row',
        paddingHorizontal: 5

    },
    titleHeader: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    imageDevocional: {
        width: 400,
        height: 190,
        justifyContent: "center",
        alignItems: "center",
    },
    containerlogo: {
        justifyContent: "center",
        alignItems: "flex-start",
        width: 20,
        height: 11,
    },
});



