import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import { Actions } from 'react-native-router-flux';
export default class DescriptionCell extends Component {
    static navigationOptions = { header: null };

    render() {
        let { item } = this.props
        return (
            <TouchableOpacity onPress={() => Actions.detail_calendar({ item: item })} style={[styles.container]}>
                <View style={styles.viewDetailDate}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={[styles.checkColor, { backgroundColor: item.color }]} />
                        <Text style={styles.textDescription}>{item.title}</Text>
                    </View>
                    {/* <Image style={{
                        width: 10,
                        height: 17.8,
                    }} source={require("../../lib/react-native-calendars/src/calendar/img/next.png")} /> */}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 7
    },
    viewDetailDate: {
        paddingVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: 'white',
        alignItems: "center"
    },
    checkColor: {
        backgroundColor: colors.blue,
        borderRadius: 8,
        width: 15,
        marginRight: 8,
        height: 15
    },
    textDescription: {
        fontSize: 17,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: "left",
        color: "#202020"
    }
});




