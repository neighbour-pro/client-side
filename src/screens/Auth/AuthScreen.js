import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from '../../components/Auth/Login';
import Signup from '../../components/Auth/Signup';

export default createStackNavigator({
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  }
});