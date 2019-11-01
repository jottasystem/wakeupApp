import React, { Component, PureComponent } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import colors from '../../styles/colors';

export default props => (
  <Button  style={props.active ? styles.containeActive : styles.containe} onPress={props.onPress}>
      <Image resizeMode={"contain"} style={props.active ? styles.icone_active : styles.icone} source={props.icon} />
      <Text style={props.active ? styles.textTab_active : styles.textTab}>{props.title}</Text>
  </Button>
);


const styles = StyleSheet.create({
  containe: {
    alignItems: 'center'
  },
  containeActive: {
    alignItems: 'center',
    backgroundColor: "#757575",
  },
  textTab: {
    fontSize: 12,
    color: "white",
    opacity:0.8

  },
  textTab_active: {
    fontSize: 12,
    color: "white"
  },
  icone: {
    width: 27,
    height: 27,
    tintColor: "white",
    opacity:0.8
  },
  icone_active: {
    width: 31,
    height: 31,
    tintColor: "white"
  },
})