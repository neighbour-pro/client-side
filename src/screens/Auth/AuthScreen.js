import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from '../../components/Auth/Login';
import Signup from '../../components/Auth/Signup';
import ResetPassword from '../../components/Auth/ResetPassword';
import {
  NAV_HEADER_COLOR,
  NAV_HEADER_FONT_COLOR
} from "../../config/navigation";

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
      title: 'Sign up'
    }
  },
  ResetPassword: {
    screen: ResetPassword,
    navigationOptions: {
      title: 'Reset Password'
    }
  },
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: NAV_HEADER_COLOR
    },
    headerTintColor: NAV_HEADER_FONT_COLOR
  }
});