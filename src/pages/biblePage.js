import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import colors from "../styles/colors"
import ButtonCustom from "../components/ButtonCustom";
import NVI from "../components/bible/nvi.json"
import { Actions } from "react-native-router-flux";
import { Input } from "native-base";
import { connect } from 'react-redux'
import { setBookCurrentAction, setChaptersCurrentAction, allBookAction, } from '../store/actions/BibleAction'

class BiblePage extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)

        this.props.dispatch(allBookAction());

        this.state = {
            books: true,
            chapters: false,
            numberBook: 0,
            bible: this.props.books,
            biblesSearch: [],
            textFilter: ""
        }
        this.props.dispatch(setBookCurrentAction(0))

    }

    _toggleButton() {
        this.setState({
            books: !this.state.books,
            chapters: !this.state.chapters
        })
    }

    _numberBook(book) {
        this.setState({
            books: false,
            chapters: true,
            numberBook: book
        })
        this.props.dispatch(setBookCurrentAction(book))
    }


    _currentChapter(chapter) {
        this.props.dispatch(setChaptersCurrentAction(chapter))
    }


    onSearch = (text) => {
        let findbible = this.props.books.filter(bible => {
            return bible.name.toLowerCase().indexOf(text.toLowerCase()) != -1;
        });
        this.setState({ textFilter: text, biblesSearch: findbible });
    }



    render() {

        console.log("props", this.props)
        return (
            <View style={styles.root}>
                <View style={styles.header}>
                    <Image style={styles.containerlogo}
                        source={require('../images/logo.png')} />
                    <TouchableOpacity onPress={() => Actions.profile()} style={styles.button}>
                        <Image style={styles.perfil}
                            source={require('../images/perfil.jpg')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>

                    <View style={styles.viewTop}>
                        <ButtonCustom
                            onPress={() => { this._toggleButton() }}
                            width={"47%"}
                            btncolor={this.state.books ? colors.root : colors.white}
                            textcolor={this.state.books ? colors.white : colors.blueMain}
                            height={39}
                            text={"LIVROS"}
                        />

                        <ButtonCustom
                            onPress={() => { this._toggleButton() }}
                            width={"47%"}
                            btncolor={this.state.chapters ? colors.root : colors.white}
                            textcolor={this.state.chapters ? colors.white : colors.blueMain}
                            height={39}
                            text={"CAPÍTULOS"}
                        />
                    </View>
                    {this.state.books &&
                        <View style={[styles.search]}>
                            <Image source={require("../images/lupa.png")} />
                            <Input
                                value={this.state.textFilter}
                                onChangeText={value => this.onSearch(value)}
                            // style={{ height: 25 }} 

                            />
                        </View>
                    }

                    {this.state.textFilter && this.state.books ?
                        <View style={styles.viewBooks}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ paddingVertical: 15 }}
                                data={this.state.biblesSearch}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) =>
                                    <TouchableOpacity key={index} onPress={() => { this._numberBook(index) }} style={this.props.bookCurrent == index ? [styles.nameBook, { backgroundColor: colors.root, borderRadius: 5 }] : styles.nameBook}>
                                        <Text style={styles.textBooks}>{item.name}</Text>
                                    </TouchableOpacity>}
                            />
                        </View>
                        : this.state.books ?
                            <View style={styles.viewBooks}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{ paddingVertical: 15 }}
                                    data={NVI}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item, index }) =>
                                        <TouchableOpacity key={index} onPress={() => { this._numberBook(index) }} style={this.props.bookCurrent == index ? [styles.nameBook, { backgroundColor: colors.rootLight, borderRadius: 5 }] : styles.nameBook}>
                                            <Text style={styles.textBooks}>{item.name}</Text>
                                        </TouchableOpacity>}
                                />
                            </View>
                            : null
                    }

                    {this.state.chapters &&
                        <View style={styles.viewBooks}>
                            <FlatList
                                numColumns={5}
                                columnWrapperStyle={styles.numberchapters}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ paddingVertical: 15 }}
                                data={NVI[this.props.bookCurrent].chapters}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => <TouchableOpacity onPress={() => { Actions.verse_bible({ books: NVI, item: item }), this._currentChapter(index) }}>
                                    <Text style={styles.textBooks}>{index + 1}</Text>
                                </TouchableOpacity>}
                            />
                        </View>
                    }
                </View>
            </View>
        );
    }
}




function mapStateToProps({ BibleInfo }) {
    return BibleInfo
}
export default connect(mapStateToProps)(BiblePage);


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: colors.root,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginHorizontal: 16,
        marginBottom: 6,
        borderRadius: 10
    },
    viewBooks: {
        flex: 1,
        paddingHorizontal: 15
    },
    viewTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    nameBook: {
        borderBottomColor: colors.activeMain,
        borderBottomWidth: 0.3
    },
    textBooks: {
        fontSize: 17,
        paddingVertical: 5,
        fontWeight: "400",
        letterSpacing: 0.7,
        textAlign: "left",
        color: "#000000"
    },
    numberchapters: {
        flex: 1,
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        paddingVertical: 7,
    },
    search: {
        borderRadius: 10,
        paddingHorizontal: 5,
        flexDirection: "row",
        backgroundColor: colors.white,
        marginHorizontal: 15,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    //new
    containerlogo: {
        justifyContent: "center",
        alignItems: "flex-start",
        width: 50,
        height: 41,
    },
    perfil: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: 50,
        height: 41,
        borderRadius: 27,
    }, 

    header: {
        marginTop: 16,
        paddingHorizontal: 16,
        height: 60,
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
    },
});
