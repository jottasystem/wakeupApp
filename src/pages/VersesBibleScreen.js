import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Image } from 'react-native';
import { Header, Left, Body, Right } from 'native-base';
import BackButton from '../components/buttons/BackButton'
import colors from '../styles/colors';
import { connect } from 'react-redux'
import Ripple from 'react-native-material-ripple';
import { incrementChapter } from '../store/actions/BibleAction'

class VersesBibleScreen extends Component {
    static navigationOptions = { header: null };

    _incrementChapter = () => {
        this.props.incrementChapter();
    }
    render() {
        console.log("stylestyle", this.props)

        let { bookCurrent, chapterCurrent } = this.props

        return (
            <View style={styles.container}>
                <Header
                    transparent style={{ backgroundColor: colors.root }}>
                    <Left style={{ flex: 1 }}>
                        <BackButton arrowWhite />
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Text style={styles.textTitle}>Bíblia </Text>
                    </Body>

                    <Right style={{ flex: 1 }} >
                        <Ripple onPress={() => { this._incrementChapter() }}>
                            <Text style={styles.nextChapter}>Próximo</Text>
                        </Ripple>

                    </Right>
                </Header>
                <StatusBar
                    backgroundColor={"transparent"}
                    translucent
                    barStyle={"light-content"}
                />

                <View style={styles.viewDetail}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.props.books[bookCurrent].chapters[chapterCurrent]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => <View style={styles.viewContent}>
                            <Text style={styles.textDescription}>
                                <Text style={{ fontSize: 12 }}>{index + 1}</Text> {item}
                            </Text>
                        </View>
                        }
                    />

                </View>
            </View>
        );
    }
}


function mapStateToProps({ BibleInfo }) {
    return BibleInfo
}
export default connect(mapStateToProps, { incrementChapter })(VersesBibleScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.root
    },
    viewDetail: {
        flex: 1,
        backgroundColor: colors.white,
        margin: 16,
        borderRadius: 6
    },
    viewContent: {
        padding: 4,

    },
    textTitle: {
        padding: 4,
        fontSize: 21,
        fontWeight: "600",
        textAlign: "center",
        color: colors.white
    },
    textDescription: {
        fontSize: 20,
        flex: 1,
        textAlign: "left",
        color: colors.dark
    },
    nextChapter: {
        fontSize: 17,
        color: colors.white,
        fontWeight: "600"
    }
});
