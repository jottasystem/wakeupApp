import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert, FlatList } from 'react-native';
import { Header, Left, Body, Right } from 'native-base';
import BackButton from '../components/buttons/BackButton'
import colors from '../styles/colors';
import ButtonCustom from '../components/ButtonCustom'
export default class DetailEventScreen extends Component {
    static navigationOptions = { header: null };



    render() {

        let { item } = this.props
        return (
            <View style={styles.container}>
                <Header
                    transparent style={{ backgroundColor: colors.root }}>
                    <Left style={{ flex: 1 }}>
                        <BackButton arrowWhite />
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Text style={styles.textTitle}>Detalhes </Text>

                    </Body>
                    <Right style={{ flex: 1 }} />
                </Header>

                <StatusBar
                    backgroundColor={"transparent"}
                    translucent
                    barStyle={"light-content"}
                />

                <View style={styles.viewDetail}>
                    <View style={styles.viewContent}>
                        <Image resizeMode={"contain"} style={styles.img} source={{ uri: "http://cristoematos.com.br/public/" + "eventos/" + item.img_background }} />
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={item.days}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => <View style={{ paddingVertical: 3 }}>
                                <Text style={[styles.textDescription, {
                                    fontWeight: "600",
                                    color: colors.medium_dark
                                }]}>{item}</Text>
                                <Text style={styles.textDescription}>{this.props.item.horary[index]}</Text>
                            </View>}
                        />
                    </View>

                    <View style={{
                        paddingHorizontal: 35,
                    }}>
                        <ButtonCustom
                            btncolor={colors.root}
                            textcolor={colors.white}
                            marginBottom={20}
                            height={42}
                            onPress={() => { Alert.alert("Função em desenvolvimento") }}
                            text={"INSCREVER"}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.root
    },
    viewDetail: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: colors.white,
        margin: 16,
        borderRadius: 6
    },
    viewContent: {
        flex: 1,
    },
    textDescription: {
        left: 10,
        fontSize: 20,
        textAlign: "left",
        color: colors.darkGray
    },
    img: {
        height: "70%",
        borderRadius: 5
    },
    textTitle: {
        padding: 4,
        fontSize: 21,
        fontWeight: "600",
        textAlign: "center",
        color: colors.white
    },
});
