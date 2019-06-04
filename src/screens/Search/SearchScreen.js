import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import ProfessionalList from '../../components/Search/ProfessionalList';
import ProfessionalMap from '../../components/Search/ProfessionalMap';
import ProfessionalDetail from '../../components/Search/ProfessionalDetail';
import ProfessionalReviewList from '../../components/Search/ProfessionalReviewList';

export default createStackNavigator({
  ProfessionalList: {
    screen: ProfessionalList,
    navigationOptions: {
      
    }
  },
  ProfessionalMap: {
    screen: ProfessionalMap
  },
  ProfessionalDetail: {
    screen: ProfessionalDetail
  },
  ProfessionalReviewList: {
    screen: ProfessionalReviewList
  }
});