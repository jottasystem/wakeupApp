import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BackButton from '../components/buttons/BackButton';

import { Header, Left, Body } from 'native-base';

export default class BackupScreen extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>


        <View style={{ flex: 1, backgroundColor: "blue" }}>
          <Text>Core</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "green" }}>
          <Text>core</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "pink" }}>
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
});
