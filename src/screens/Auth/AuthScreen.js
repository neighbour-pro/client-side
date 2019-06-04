import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from '../../components/Auth/Login';
import Signup from '../../components/Auth/Signup';

export default createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null
    }
  }
});