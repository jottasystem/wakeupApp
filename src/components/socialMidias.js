import React, { Component } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
 import facebook from '../images/facebook.png'
 import instagram from '../images/instagram.png'
import colors from '../styles/colors';

export default class SocialMidias extends Component {
    static navigationOptions = { header: null };
    shareFacebook = async () => {
        Linking.canOpenURL("fb://profile/igrejadecristoematos").then(supported => {
            if (supported) {
                return Linking.openURL("fb://profile/igrejadecristoematos");
            } else {
                return Linking.openURL("https://www.facebook.com/n/?igrejadecristoematos");
            }
        })
    }
    

    shareInstagram = async () => {
        Linking.canOpenURL("instagram://profile/cristoematos").then(supported => {
            if (supported) {
                return Linking.openURL("instagram://profile/cristoematos");
            } else {
                return Linking.openURL("https://www.facebook.com/n/?igrejadecristoematos");
            }
        })
    }
    render() {
        let style = this.props.style
        return (
            <View style={[styles.containe, { style }]}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/cristoematos/')}
                    style={styles.viewTop}>
                    <Image source={instagram} />
                    <Text style={styles.description}>@cristoematos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/n/?igrejadecristoematos')}
                    style={styles.viewMiddle}>
                    <Image source={facebook} />
                    <Text style={styles.description}>@igrejadecristoematos</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    containe: {
        paddingLeft: 28,
        marginBottom: 28
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
        color: colors.white,
        fontSize: 16
    }
});
