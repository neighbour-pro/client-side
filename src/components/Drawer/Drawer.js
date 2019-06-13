import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import img from "../../../assets/images/logo.png";
import { FlatList } from "react-native-gesture-handler";

export default class Drawer extends Component {
  navigateTo = (tab, props = {}) => {
    this.props.navigation.navigate(tab, { ...props });
    this.props.navigation.closeDrawer();
  };

  render() {
    return (
      <SafeAreaView style={styles.drawerContainer}>
        <View style={styles.header}>
          <Image source={img} style={styles.headerImage} />
          <Text style={styles.headerText}>Rita Sibarita</Text>
        </View>
        <View style={styles.container}>
          {createMenuOptions(menuConfig, this)}
        </View>
      </SafeAreaView>
    );
  }
}

createMenuOptions = (config, self) => {
  return (
    <FlatList
      data={config.options}
      keyExtractor={(item, index) => item.name}
      renderItem={({item}) => (
          <TouchableOpacity id={item.name} onPress={() => self.navigateTo(item.goTo)} style={styles.menuItem}>
            {
              item.descriptionIcon && <Ionicons size={config.iconSize} name={Platform.OS === 'ios' ? item.descriptionIconIos : item.descriptionIconAndroid} color={config.iconColor} />
            }
            <Text style={[styles.menuItemText, item.textStyle]}>{item.label}</Text>
            {
              item.nextIcon && <Ionicons size={config.iconSize} name={Platform.OS === 'ios' ? config.nextIconIos : config.nextIconAndroid} color={config.iconColor} />
            }
          </TouchableOpacity>
        )
      }
    />
  );
};

const menuConfig = {
  iconSize: 24,
  iconColor: "#FAFAFA",
  options: [
    {
      name: 'professionalList',
      descriptionIcon: true,
      descriptionIconIos: "ios-search",
      descriptionIconAndroid: "md-search",
      label: "Look for professionals",
      nextIcon: true,
      textStyle: {},
      goTo: "ProfessionalList"
    },
    {
      name: 'editProfile',
      descriptionIcon: true,
      descriptionIconIos: "ios-settings",
      descriptionIconAndroid: "md-settings",
      label: "Edit profile",
      nextIcon: true,
      textStyle: {},
      goTo: "UserProfileEdit"
    },
    {
      name: 'logout',
      descriptionIcon: true,
      descriptionIconIos: "ios-log-out",
      descriptionIconAndroid: "md-log-out",
      label: "Logout",
      nextIcon: false,
      textStyle: {},
      goTo: "Auth"
    },
  ],
  nextIconIos: "ios-arrow-forward",
  nextIconAndroid: "md-arrow-forward"
};

const styles = StyleSheet.create({
  drawerContainer: {
    height: Dimensions.get("window").height - 48,
    backgroundColor: "#FAFAFA",
    borderBottomLeftRadius: 5
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FAFAFA"
  },
  headerImage: {
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#3333"
  },
  headerText: {
    fontSize: 18,
    padding: 10
  },
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 15,
    backgroundColor: "#333",
    paddingTop: 30
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  menuItemText: {
    color: "#FAFAFA",
    flexGrow: 1,
    flexShrink: 1,
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 10
  }
});
