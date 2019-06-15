import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator, withNavigation } from "react-navigation";
import ProfessionalList from "../../components/Search/ProfessionalList";
import ProfessionalMap from "../../components/Search/ProfessionalMap";
import ProfessionalDetail from "../../components/Search/ProfessionalDetail";
import ReviewList from "../../components/Review/ReviewList";
import AddReview from '../../components/Review/AddReview';
import PendingReviews from '../../components/Review/PendingReviews';
import {
  NAV_HEADER_COLOR,
  NAV_HEADER_FONT_COLOR
} from "../../config/navigation";
import Ionicons from "react-native-vector-icons/Ionicons";


export default createStackNavigator(
  {
    ProfessionalList: {
      screen: ProfessionalList,
      navigationOptions: ({ navigation }) => ({
        title: "Professional List",
        headerRight: (
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfessionalMap")}
          >
            <Ionicons size={24} name="ios-map" color={NAV_HEADER_FONT_COLOR} />
          </TouchableOpacity>
        ),
        headerRightContainerStyle: {
          paddingRight: 30
        }
      })
    },
    ProfessionalMap: {
      screen: ProfessionalMap,
      navigationOptions: ({ navigation }) => ({
        title: "Map",
        headerRight: (
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfessionalList")}
          >
            <Ionicons size={24} name="ios-list" color={NAV_HEADER_FONT_COLOR} />
          </TouchableOpacity>
        ),
        headerRightContainerStyle: {
          paddingRight: 30
        },
        headerLeft: null
      })
    },
    ProfessionalDetail: {
      screen: ProfessionalDetail
    },
    ProfessionalReviewList: {
      screen: ReviewList
    },
    AddReview: {
      screen: AddReview
    },
    PendingReviews: {
      screen: PendingReviews
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: NAV_HEADER_COLOR
      },
      headerTintColor: NAV_HEADER_FONT_COLOR
    }
  }
);
