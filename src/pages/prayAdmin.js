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
import { Card } from 'react-native-elements';
import Axios from "axios";
import API from "../config/AppConstants"
import colors from "../styles/colors";

export default class PrayAdmPage extends Component {
    constructor() {
        super();
        this.state = {
            prays: [],
            loading: false
        }
    }
    componentDidMount() {
        this.getPrays()
    }
    getPrays() {
        this.setState({ loading: true })
        Axios.get(API.URL.URLPROD + "pray/").then((sucess) => {
            if (sucess.data) {
                this.setState({ prays: sucess.data.docs })
            }
        }).catch((error) => {
            console.log("error", error)
        }).finally((finish) => {
            this.setState({ loading: false })

        })
    }

    delPray = (id) => {
        this.setState({ loading: true })

        Axios.delete(API.URL.URLPROD + `pray/${id}`).then(async (sucess) => {
            if (sucess.status == 200) {
                Alert.alert("Sucesso", "Pedido excluido com sucesso :)")
                await this.getPrays()
            }
        }).catch((error) => {
            Alert.alert("Error", "Erro ao excluir pedido :(")
        }).finally((finish) => {
            this.setState({ loading: false })

        })
    }
    render() {
        let { prays } = this.state

        if (this.state.loading) {
            return <ActivityIndicator size='large' style={styles.activityIndicatorWrapper} color={colors.yellow} animating />
        }
        return (
            <ScrollView style={{ backgroundColor: '#3E3E3E' }}>
                <View style={styles.container}>
                    <View style={styles.space}></View>

                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Image style={styles.containerlogo}
                                source={require('../images/voltar.png')} />
                        </TouchableOpacity>
                        <Text style={styles.titleHeader}> Pedidos de Oração</Text>
                    </View>

                    <View style={styles.space}></View>

                    {prays.length ?

                        <FlatList
                            data={prays}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity onPress={() => Actions.detail_pray({ item })} style={{ paddingHorizontal: 16 }}>
                                    <Card
                                        containerStyle={{ backgroundColor: 'grey', borderColor: 'grey' }}
                                        wrapperStyle={{ backgroundColor: "grey" }}>
                                        <Text numberOfLines={1} style={{ marginBottom: 15, color: 'white', fontSize: 16 }}>
                                            {item.prayName}:   {item.pray}
                                        </Text>
                                    </Card>

                                    <TouchableOpacity onPress={() => this.delPray(item._id)} style={{ position: "absolute", right: 7, width: 25, backgroundColor: "white", borderRadius: 13, alignItems: "center" }}>
                                        <Text style={{ fontSize: 18, color: "red" }}>X</Text>
                                    </TouchableOpacity>

                                </TouchableOpacity>
                            }
                        />
                        :
                        <View style={{ alignItems: "center", paddingTop: 130 }}>
                            <Text style={styles.titleHeader}>Não Possui Pedidos de Oração {"\n \n"}</Text>
                            <Image resizeMode={"contain"} style={styles.icones}
                                source={require('../images/oracao.png')} />
                        </View>
                    }
                    <View style={styles.space}>

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



