import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Alert,
  AsyncStorage, ScrollView, Image, TouchableOpacity
} from 'react-native';
import { Actions } from "react-native-router-flux";
import Axios from "axios";
import API from "../config/AppConstants"

export default class MenuPage extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props)
    this.state = {
    }
    this.getInfo()
  }
  getInfo = () => {
    AsyncStorage.getItem("user").then((sucess) => {
      let user = JSON.parse(sucess)
      this.setState({ ...user })
    })
  }
  render() {
    return (

      <ScrollView style={{ backgroundColor: '#3E3E3E' }}>
        <View style={styles.container}>

          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <TouchableOpacity onPress={() => Actions.popTo("main")} style={styles.button}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => Actions.popTo("main")}>
                <Image style={styles.containerlogo}
                  source={require('../images/voltar.png')} />
              </TouchableOpacity>
              {/* <Image style={styles.imagePerfil}
                source={require('../images/tche.jpg')} /> */}
              <Text style={styles.titleHeader}>  Menu</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>

          <TouchableOpacity onPress={() => Actions.main_devocional()} style={styles.button}>
            <View style={styles.viewsMenu}>
              <View style={styles.space2}></View>
              <Image style={{ width: 27, height: 27 }}
                source={require('../images/devocional.png')} />
              <Text style={styles.titlesMenu}>  Devocional</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.space}></View>
          <View style={styles.space}></View>

          <TouchableOpacity onPress={() => Actions.notification()} style={styles.button}>
            <View style={styles.viewsMenu}>
              <View style={styles.space2}></View>
              <Image style={{ width: 27, height: 27 }}
                source={require('../images/feito1.png')} />
              <Text style={styles.titlesMenu}>  Notificações</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.space}></View>
          <View style={styles.space}></View>

          <TouchableOpacity onPress={() => Actions.alter_page({user:this.state})} style={styles.button}>
            <View style={styles.viewsMenu}>
              <View style={styles.space2}></View>
              <Image style={{ width: 27, height: 27 }}
                source={require('../images/senha.png')} />
              <Text style={styles.titlesMenu}>  Alterar a Senha</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.space}></View>
          <View style={styles.space}></View>

          <TouchableOpacity onPress={() => Actions.pray()} style={styles.button}>
            <View style={styles.viewsMenu}>
              <View style={styles.space2}></View>
              <Image style={{ width: 27, height: 27 }}
                source={require('../images/oracao.png')} />
              <Text style={styles.titlesMenu}>  Pedido de Oração</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.space}></View>
          <View style={styles.space}></View>

          <TouchableOpacity onPress={() => Actions.administrator()} style={styles.button}>
            <View style={styles.viewsMenu}>
              <View style={styles.space2}></View>
              <Image style={{ width: 27, height: 27 }}
                source={require('../images/perfico.png')} />
              <Text style={styles.titlesMenu}>  Administrativo</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.space}></View>
          <View style={styles.space}></View>

          <TouchableOpacity onPress={() => Actions.contact()} style={styles.button}>
            <View style={styles.viewsMenu}>
              <View style={styles.space2}></View>
              <Image style={{ width: 27, height: 27 }}
                source={require('../images/contato.png')} />
              <Text style={styles.titlesMenu}>  Contatos</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>

          <TouchableOpacity onPress={() => Actions.login()} style={styles.button}>
            <View style={styles.viewsMenu}>
              <View style={styles.space2}></View>
              <Image style={{ width: 27, height: 27 }}
                source={require('../images/sair.png')} />
              <Text style={styles.titlesMenu}>  Sair</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.space}></View>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E3E3E',
  },
  space: {
    width: 17,
    height: 17,
  },
  space2: {
    width: 10,
    height: 10,
  },
  icones: {
    justifyContent: "center",
    alignItems: "center",
    width: 34,
    height: 34,
  },
  header: {
    flex: 1,
    borderColor: 'white',
    justifyContent: 'flex-start',
    alignItems: "center",
    flexDirection: 'row',
  },
  titleHeader: {
    color: 'white',
    fontSize: 20,
  },
  titlesMenu: {
    color: 'white',
    fontSize: 20,
  },
  viewsMenu: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
    flexDirection: 'row',
  },
  imagePerfil: {
    width: 50,
    height: 41,
    borderRadius: 27,
  },
  header: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: "center",
    backgroundColor: "#363636",
    flexDirection: 'row',
  },
  textHeader: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  containerlogo: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 20,
    height: 21,
    marginLeft: 5,
    marginRight: 10
  },
});
