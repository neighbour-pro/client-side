import React, { Component } from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import SearchScreen from "../screens/Search/SearchScreen";
import MessageScreen from '../screens/Messages/MessagesScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import DrawerScreen from '../screens/Drawer/DrawerScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  NAV_TAB_ACTIVE_COLOR,
  NAV_TAB_INACTIVE_COLOR,
  NAV_TAB_ICON_SIZE
} from "../config/navigation";

const searchIcon = Platform.OS === "ios" ? "ios-search" : "ios-search";
const messageIcon = Platform.OS === "ios" ? "ios-mail" : "ios-mail";
const profileIcon = Platform.OS === "ios" ? "ios-person" : "ios-person";
const menuIcon = Platform.OS === "ios" ? "ios-menu" : "ios-menu";

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
    MessageTab: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarLabel: "Messages",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={messageIcon}
            size={NAV_TAB_ICON_SIZE}
            color={tintColor}
          />
        )
      }
    },
    ProfileTab: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={profileIcon}
            size={NAV_TAB_ICON_SIZE}
            color={tintColor}
          />
        )
      }
    },
    DrawerTab: {
      screen: DrawerScreen,
      navigationOptions: {
        tabBarLabel: "Menu",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={menuIcon}
            size={NAV_TAB_ICON_SIZE}
            color={tintColor}
          />
        ),
        tabBarOnPress: ({navigation, defaultHandler}) => {
          navigation.openDrawer();
          return; // Debería evitar el cambio a la tab
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: NAV_TAB_ACTIVE_COLOR,
      inactiveTintColor: NAV_TAB_INACTIVE_COLOR
    }
  }
);
