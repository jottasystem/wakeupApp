import React, { Component } from "react"
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import { SliderBox } from 'react-native-image-slider-box';


import { Actions } from "react-native-router-flux";
import BackButton from '../components/buttons/BackButton';

import { Header, Left, Body } from 'native-base';

export default class BackupScreen extends Component {
  // static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      images: [
        '../images/banner.jpg',
        '../images/banner28.jpg',
        '../images/banner3.jpg',
    ]
    };
    }

  render() {
    return (
      <View style={styles.container}>

        <View style={{flexGrow: 0.5,justifyContent: 'space-between', alignItems: "center", backgroundColor: "#363636", flexDirection: 'row'}}>
          <Image style={styles.containerlogo }
          source={require('../images/logo.png')} />
          <TouchableOpacity onPress={() => Actions.profile()} style={styles.button}>
            <Image style={styles.perfil}
            source={require('../images/perfil.jpg')} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2.5, backgroundColor: "red"}}>
          <SliderBox images={this.state.images} />
        </View>        
        <View style={{ flex: 2.5, backgroundColor: "green" }}>
          <Text>footer</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: "pink" }}>
          <Text>footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  }
});
