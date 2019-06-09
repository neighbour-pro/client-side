import React, { Component } from "react";
import { Platform, Dimensions } from "react-native";
import { createBottomTabNavigator, createDrawerNavigator } from "react-navigation";
import SearchScreen from "../screens/Search/SearchScreen";
import MessageScreen from '../screens/Messages/MessagesScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import Drawer from '../components/Drawer/Drawer';
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  NAV_TAB_ACTIVE_COLOR,
  NAV_TAB_INACTIVE_COLOR,
  NAV_TAB_ICON_SIZE,
  DRAWER_DIMENSIONS,
  DRAWER_OVERLAY_COLOR,
  NAV_TAB_BG_ACTIVE_COLOR,
  NAV_TAB_BG_INACTIVE_COLOR
} from "../config/navigation";

const searchIcon = Platform.OS === "ios" ? "ios-search" : "ios-search";
const messageIcon = Platform.OS === "ios" ? "ios-mail" : "ios-mail";
const profileIcon = Platform.OS === "ios" ? "ios-person" : "ios-person";
const menuIcon = Platform.OS === "ios" ? "ios-menu" : "ios-menu";

const Tabs = createBottomTabNavigator(
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
      screen: ProfileScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: "Menu",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={menuIcon}
            size={NAV_TAB_ICON_SIZE}
            color={tintColor}
          />
        ),
        tabBarOnPress: () => navigation.openDrawer()
      })
    }
  },
  {
    initialRouteName: 'MessageTab',
    tabBarOptions: {
      activeTintColor: NAV_TAB_ACTIVE_COLOR,
      inactiveTintColor: NAV_TAB_INACTIVE_COLOR,
      activeBackgroundColor: NAV_TAB_BG_ACTIVE_COLOR,
      inactiveBackgroundColor: NAV_TAB_BG_INACTIVE_COLOR,
    }
  }
);

export default createDrawerNavigator(
  {
    Tabs,
  },
  {
    drawerWidth: Dimensions.get('window').width*DRAWER_DIMENSIONS,
    drawerPosition: 'right',
    contentComponent: props => <Drawer {...props} />,
    drawerBackgroundColor: 'transparent',
    hideStatusBar: false,
    overlayColor: DRAWER_OVERLAY_COLOR,
    drawerType: 'front'
  }
)
