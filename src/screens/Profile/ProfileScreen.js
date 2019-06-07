import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import UserProfile from "../../components/Profile/UserProfile";
import {
  NAV_HEADER_COLOR,
  NAV_HEADER_FONT_COLOR
} from "../../config/navigation";

export default createStackNavigator(
  {
    UserProfile: {
      screen: UserProfile
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
