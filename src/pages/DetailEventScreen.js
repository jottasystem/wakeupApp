import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from 'react-native';
import { Header, Left, Body, Right } from 'native-base';
import BackButton from '../components/buttons/BackButton'
import colors from '../styles/colors';

export default class DetailEventScreen extends Component {
    static navigationOptions = { header: null };

    render() {
        let { item } = this.props
        return (
            <View style={styles.container}>
                <Header
                    transparent style={{ backgroundColor: colors.blueMain }}>
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
                    <Text style={styles.textTitle}>{item.title}</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.viewContent}>
                            <Text style={styles.textDescription}>
                                {item.description}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blueMain,

    },
    viewDetail: {
        flex: 1,
        backgroundColor: colors.white,
        margin: 16,
        borderRadius: 6
    },
    viewContent: {
        padding: 11
    },
    textTitle: {
        padding: 4,
        fontSize: 21,
        fontWeight: "600",
        textAlign: "center",
        color: colors.blueText
    },
    textDescription: {
        paddingTop: 6,
        fontSize: 20,
        flex: 1,
        textAlign: "left",
        color: colors.darkGray
    }
});
