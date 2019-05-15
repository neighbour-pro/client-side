/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Nav from './components/Nav/Nav';
import NavGuest from './components/Nav/NavGuest';
import Loader from './components/Loader/Loader';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      loaded: false
    }
  }


  render() {
    return (
      <React.Fragment>
        {
          this.state.loaded ?
            this.state.isLoggedIn ?
              <Nav /> :
              <NavGuest />
            :
            <Loader/>
        }
      </React.Fragment>
    );

  }
}


