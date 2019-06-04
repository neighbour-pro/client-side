import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import UserProfile from '../../components/Profile/UserProfile';

export default createStackNavigator({
  UserProfile: {
    screen: UserProfile
  },
});