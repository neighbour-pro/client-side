import React, { Component } from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import SearchScreen from "../screens/Search/SearchScreen";
import AuthScreen from "../screens/Auth/AuthScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  NAV_TAB_ACTIVE_COLOR,
  NAV_TAB_INACTIVE_COLOR,
  NAV_TAB_ICON_SIZE,
  NAV_TAB_BG_ACTIVE_COLOR,
  NAV_TAB_BG_INACTIVE_COLOR
} from "../config/navigation";

const searchIcon = Platform.OS === "ios" ? "ios-search" : "ios-search";
const authIcon = Platform.OS === "ios" ? "ios-person" : "ios-person";

export default createBottomTabNavigator(
  {
    SearchTab: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={searchIcon}
            size={NAV_TAB_ICON_SIZE}
            color={tintColor}
          />
        )
      }
    },
    AuthTab: {
      screen: AuthScreen,
      navigationOptions: {
        tabBarLabel: "Auth",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={authIcon}
            size={NAV_TAB_ICON_SIZE}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'AuthTab',
    tabBarOptions: {
      activeTintColor: NAV_TAB_ACTIVE_COLOR,
      inactiveTintColor: NAV_TAB_INACTIVE_COLOR,
      activeBackgroundColor: NAV_TAB_BG_ACTIVE_COLOR,
      inactiveBackgroundColor: NAV_TAB_BG_INACTIVE_COLOR,
    }
  }
);
