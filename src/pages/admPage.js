import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Actions } from "react-native-router-flux";


export default class AdministratorPage extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.space}></View>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => Actions.menu()}>
            <Image style={styles.containerlogo}
              source={require('../images/voltar.png')} />
          </TouchableOpacity>
          <Text style={styles.titleHeader}> Administrador</Text>
        </View>

        <ScrollView style={{ backgroundColor: '#3E3E3E' }}>

          <View style={styles.container2}>

            <View style={styles.space}></View>

            <TouchableOpacity onPress={() => Actions.input_devocional()} style={styles.button}>
              <View style={styles.blocsMenu}>
                <Image style={styles.icones}
                  source={require('../images/devocional.png')} />
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '300' }}>  Publicações</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.space}></View>
            <View style={styles.space}></View>

            <TouchableOpacity onPress={() => Actions.input_event()} style={styles.button}>
              <View style={styles.blocsMenu}>
                <Image style={styles.icones}
                  source={require('../images/calendar.png')} />
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '300' }}>  Eventos</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.space}></View>
            <View style={styles.space}></View>

            <TouchableOpacity onPress={() => Actions.input_devocional()} style={styles.button}>
              <View style={styles.blocsMenu}>
                <Image style={styles.icones}
                  source={require('../images/oracao.png')} />
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '300' }}>  Pedido de Oração</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.space}></View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E3E3E',
  },
  container2: {
    flex: 1,
    backgroundColor: '#3E3E3E',
  },
  space: {
    width: 17,
    height: 17,
  },
  icones: {
    justifyContent: "center",
    alignItems: "center",
    width: 27,
    height: 27,
  },
  titleHeader: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  header: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: "center",
    backgroundColor: "#363636",
    flexDirection: 'row',
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
});
