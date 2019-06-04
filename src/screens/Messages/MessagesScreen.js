import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import ChatList from '../../components/Messages/ChatList';
import ChatDetail from '../../components/Messages/ChatDetail';

export default createStackNavigator({
  ChatList: {
    screen: ChatList
  },
  ChatDetail: {
    screen: ChatDetail
  }
});