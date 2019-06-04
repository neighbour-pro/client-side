/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Neighbour Pro App</Text>
          <Ionicon name='ios-arrow-up' size={48} color='#333'/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
