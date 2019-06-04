import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import ProfessionalList from '../../components/Search/ProfessionalList';
import ProfessionalMap from '../../components/Search/ProfessionalMap';
import ProfessionalDetail from '../../components/Search/ProfessionalDetail';

export default createStackNavigator({
  ProfessionalList: {
    screen: ProfessionalList
  },
  ProfessionalMap: {
    screen: ProfessionalMap
  },
  ProfessionalDetail: {
    screen: ProfessionalDetail
  }
});