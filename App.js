import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import LoggedNavigator from './src/router/LoggedNavigator';
import GuestNavigator from './src/router/GuestNavigator';

const isLogged = false;

const TabNavigator = isLogged ? LoggedNavigator : GuestNavigator;

export default createAppContainer(TabNavigator);