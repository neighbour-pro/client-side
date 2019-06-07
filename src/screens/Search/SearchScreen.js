import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator, withNavigation } from "react-navigation";
import ProfessionalList from "../../components/Search/ProfessionalList";
import ProfessionalMap from "../../components/Search/ProfessionalMap";
import ProfessionalDetail from "../../components/Search/ProfessionalDetail";
import ProfessionalReviewList from "../../components/Search/ProfessionalReviewList";
import {
  NAV_HEADER_COLOR,
  NAV_HEADER_FONT_COLOR
} from "../../config/navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

class mapWithNavigation extends Component {
  render() {
    return;
  }
}

const mapIcon = withNavigation(mapWithNavigation);

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
      screen: ProfessionalReviewList
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
