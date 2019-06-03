/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Neighbour Pro App</Text>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: StatusBar.currentHeight,
    backgroundColor: 'red',
  }
})
