/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Nav from './components/Nav/Nav'



export default class App extends Component {

  state = {
    isLoggedIn: false
  }

  render() {
    return (
      <Nav/>
    );
    
  }
}


