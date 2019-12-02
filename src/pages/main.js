import { Drawer, Container, Footer, FooterTab } from "native-base";
import React, { Component } from "react";
import { Image, StatusBar, StyleSheet, AsyncStorage, Alert, BackHandler, View, SafeAreaView, Platform } from "react-native";

import { Actions } from "react-native-router-flux";

import ButtonFooter from "../components/buttons/ButtonFooter";



import colors from "../styles/colors";


import MainScreen from "./corePage";
import BibleScreen from "./biblePage";
import MenuScreen from "./menuPage";
import ReviewScreen from "./eventPage";

export default class CoreScreen extends Component {
    static navigationOptions = { header: null, gesturesEnabled: false };

    constructor(props) {
        super(props);
        this.state = {
            hide: true,
            isOpen: false,
            selectedItem: "About",
            loading: false,
            refreshing: false,
            company_info: {},
            page: 1,
            dialogVisible: true,
            category: [],
            loadingItem: true,
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false,
        };
    }


    componentWillMount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);

    }


    handleBackButton() {
        if (Actions.currentScene === "core")
            return true;
    }


    closeDrawer = () => {
        this.drawer._root.close();
    };
    openDrawer = () => {
        this.drawer._root.open();
    };

    resetTab = () => {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false
        });
    };

    callPromotion = () => {
        this.resetTab();
        this.setState({ tab1: true });
    };

    callCard = () => {
        this.resetTab();
        this.setState({ tab2: true });
    };

    callStore = () => {
        this.resetTab();
        this.setState({ tab3: true });
    };

    callProgram = () => {
        this.resetTab();
        this.setState({ tab4: true });
    };

    render() {
        const { tab1, tab2, tab3, tab4 } = this.state;

        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={"transparent"}
                    translucent
                    barStyle={"light-content"}
                />

                <Container>
                    <View style={styles.viewTabFooter}>
                        {tab1 && <MainScreen />}
                        {tab2 && <BibleScreen />}
                        {tab3 && <ReviewScreen />}
                        {tab4 && <MenuScreen />}
                    </View>
                    <Footer>
                        <FooterTab style={styles.footer}>
                            <ButtonFooter
                                active={tab1}
                                title={"Home"}
                                icon={require("../images/feito2.png")}

                                onPress={() => this.callPromotion()}
                            />
                            <ButtonFooter
                                active={tab2}
                                title={"Biblia"}
                                icon={require("../images/feito3.png")}

                                onPress={() => this.callCard()}
                            />
                            <ButtonFooter
                                active={tab3}
                                title={"Calendário"}
                                icon={require("../images/calendar.png")}
                                onPress={() => this.callStore()}
                            />
                            <ButtonFooter
                                active={tab4}
                                title={"Menu"}
                                icon={require("../images/feito4.png")}


                                onPress={() => this.callProgram()}
                            />
                        </FooterTab>
                    </Footer>
                </Container>
            </View>
    );
    }
}




const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        backgroundColor: "#363636",
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
        flex: 1,
        backgroundColor: "#363636",
        paddingTop: 5
    },
    viewTabFooter: {
        flex: 1,
        backgroundColor: "black"
    },
    button_icon: {
        position: "absolute",
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    footer: {
        backgroundColor: colors.dark
    }
});
