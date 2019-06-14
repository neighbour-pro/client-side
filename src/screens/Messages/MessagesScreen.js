import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import ChatList from '../../components/Messages/ChatList';
import ChatDetail from '../../components/Messages/ChatDetail';
import {NAV_HEADER_COLOR, NAV_HEADER_FONT_COLOR} from '../../config/navigation';
import MakeOffer from '../../components/Offer/MakeOffer';
import OfferList from '../../components/Offer/OfferList';
import OfferDetail from '../../components/Offer/OfferDetail';
import Payment from '../../components/Offer/Payment';

export default createStackNavigator({
  ChatList: {
    screen: ChatList,
    navigationOptions: {
      title: 'Chat List'
    }
  },
  ChatDetail: {
    screen: ChatDetail,
  },
  MakeOffer: {
    screen: MakeOffer
  },
  OfferList: {
    screen: OfferList
  },
  OfferDetail: {
    screen: OfferDetail
  },
  Payment: {
    screen: Payment
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