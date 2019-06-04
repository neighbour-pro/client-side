import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import SearchScreen from '../screens/Search/SearchScreen';
import AuthScreen from '../screens/Auth/AuthScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default createBottomTabNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-search' size={24} color={tintColor}/>
    }
  },
  Auth: {
    screen: AuthScreen,
    navigationOptions: {
      tabBarLabel: 'Auth',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-person' size={24} color={tintColor}/>
    }
  }
},{
  tabBarOptions: {
    activeTintColor: 'purple',
    inactiveTintColor: '#333',
  }
});