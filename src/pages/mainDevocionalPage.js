import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList,
} from 'react-native';
import { Actions } from "react-native-router-flux";
import Axios from "axios";
import API from "../config/AppConstants"
import { Card } from 'react-native-elements';

export default class NotificationPage extends Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      devocional: []
    }
    this.getDevocinal()
  }

  getDevocinal() {
    Axios.get(API.URL.URLPROD + "devocional/").then((sucess) => {
      console.log("devocional", sucess)
      if (sucess.data) {

        this.setState({ devocional: sucess.data.docs })
      }
    }).catch((error) => {
      console.log("error", error)
    })
  }
  render() {
    let data = this.state.devocional
    console.log("dataa", data)
    return (

      <ScrollView style={{ backgroundColor: '#3E3E3E' }}>

        <View style={styles.container}>

          <View style={styles.space}></View>

          <View style={styles.header}>
            <TouchableOpacity onPress={() => Actions.menu()}>
              <Image style={styles.containerlogo}
                source={require('../images/voltar.png')} />
            </TouchableOpacity>
            <Text style={styles.titleHeader}> Devocionais</Text>
          </View>


          <View style={styles.space}></View>

          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) =>
              <TouchableOpacity onPress={() => Actions.devocional({ item })} style={styles.button}>
                <Card
                  containerStyle={{ backgroundColor: 'grey', borderColor: 'grey' }}
                  wrapperStyle={{ backgroundColor: 'grey' }}>
                  <Text style={{ marginBottom: 10, color: 'white', fontSize: 16 }}>
                    {item.titlePray}
                  </Text>
                </Card>
              </TouchableOpacity>





            }
          />







          {/* <TouchableOpacity onPress={() => Actions.devocional()} style={styles.button}>
            <Card
              containerStyle={{ backgroundColor: 'grey', borderColor: 'grey' }}
              wrapperStyle={{ backgroundColor: 'grey' }}>
              <Text style={{ marginBottom: 10, color: 'white', fontSize: 16 }}>
                Não desista de sonhar
            </Text>
            </Card>
          </TouchableOpacity> */}

          {/* <TouchableOpacity onPress={() => Actions.devocional()} style={styles.button}>
            <Card
              containerStyle={{ backgroundColor: 'grey', borderColor: 'grey' }}
              wrapperStyle={{ backgroundColor: 'grey' }}>
              <Text style={{ marginBottom: 10, color: 'white', fontSize: 16 }}>
                Ruja como um leão
            </Text>
            </Card>
          </TouchableOpacity> */}

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
  icones: {
    justifyContent: "center",
    alignItems: "center",
    width: 37,
    height: 41,
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
});
