import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import ChatList from '../../components/Messages/ChatList';
import ChatDetail from '../../components/Messages/ChatDetail';
import {NAV_HEADER_COLOR, NAV_HEADER_FONT_COLOR} from '../../config/navigation';

export default createStackNavigator({
  ChatList: {
    screen: ChatList,
    navigationOptions: {
      title: 'Chat List'
    }
  },
  ChatDetail: {
    screen: ChatDetail,
  }
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: NAV_HEADER_COLOR
    },
    headerTintColor: NAV_HEADER_FONT_COLOR
  }
});