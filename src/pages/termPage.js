import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BackButton from '../components/buttons/BackButton';

import { Header, Left, Body } from 'native-base';

export default class TermAndPoliticsPage extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>


<Header transparent style={{ backgroundColor: "#FFF" }}>
<Left>
    <BackButton arrowWhite />
</Left>
<Body style={{ flex: 3, textAlign: "center" }}>
    <Text ellipsizeMode={"clip"} style={styles.textTitle}>
        Células</Text>
</Body>

</Header>



        <View style={{ flex: 1, backgroundColor: "blue" }}>
          <Text>Top</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "green" }}>
          <Text>Term and Politics</Text>
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
