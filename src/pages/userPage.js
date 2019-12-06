import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    Alert,
    ActivityIndicator,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Card, CheckBox } from 'react-native-elements';
import Axios from "axios";
import API from "../config/AppConstants"
import colors from "../styles/colors";

export default class UserPage extends Component {
    constructor() {
        super();
        this.state = {
            name: [],
            email: [],
            checked: [],
            loading: false
        }
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#3E3E3E' }}>
                <View style={styles.container}>
                    <View style={styles.space}></View>

                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Image style={styles.containerlogo}
                                source={require('../images/voltar.png')} />
                        </TouchableOpacity>
                        <Text style={styles.titleHeader}> Controle de usuários</Text>
                    </View>

                    <View style={styles.space}></View>

                        <Card
                            containerStyle={{ backgroundColor: 'grey', borderColor: 'grey' }}
                            wrapperStyle={{ backgroundColor: "grey" }}>
                            <Text numberOfLines={1} style={{ marginBottom: 15, color: 'white', fontSize: 16 }}>
                                {item.name} 
                            </Text>
                            <Text numberOfLines={1} style={{ marginBottom: 15, color: 'white', fontSize: 16 }}>
                                {item.name}   {item.email}
                            </Text>
                        </Card>

                        <CheckBox
                            center
                            title='Adicionar'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checked}
                        />
                        <CheckBox
                            checkedIcon={<Image source={require('../images/checked.png')} />} //imageeees
                            uncheckedIcon={<Image source={require('../images/unchecked.png')} />} //imagesss
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked })}
                        />
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
    blocsMenu: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        flexDirection: 'row',
    },
    containerlogo: {
        justifyContent: "center",
        alignItems: "flex-start",
        width: 20,
        height: 11,
    },

    container: {
        flex: 1,
        backgroundColor: '#3E3E3E',
    },
    space: {
        width: 17,
        height: 17,
    },
    icones: {
        width: 200,
        height: 200,
        alignSelf: "center"
    },
    containerlogo: {
        justifyContent: "center",
        alignItems: "flex-start",
        width: 50,
        height: 41,
    },
    header: {
        height: 60,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: "#363636",
        flexDirection: 'row',
    },
    titleHeader: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    viewNotifi: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        flexDirection: 'row',
        borderColor: 'white',
    },
    textNotifi: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
    },
    containerlogo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: 20,
        height: 21,
    },
    activityIndicatorWrapper: {
        backgroundColor: 'transparent',
        marginTop: "50%",
        // borderRadius: 50,
        alignSelf: 'center',

        // justifyContent: 'center',
    }
});



