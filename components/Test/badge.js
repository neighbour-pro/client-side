import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView
} from "react-native";

class Badgee extends Component {
  state = {};
  render() {
    return (
      <View style={Style.container}>
        <View style={{ flex: 1, padding: 5, margin: 10 }}>
          <View style={{ flex: 2, flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <Image
                source={require("./images/profile.jpg")}
                style={{ borderRadius: 70, width: 50, height: 50 }}
              />
            </View>
            <Text style={{ flex: 2, fontSize: 20 }}>Raul Contretas</Text>
            <View style={{ flex: 1 }}>
              <Image
                source={require("./images/five.png")}
                style={{ width: 70, height: 20 }}
              />
            </View>
          </View>
          <View style={{ flex: 4 }}>
            <Text
              style={{ fontSize: 15, paddingTop: 10, textAlign: "justify" }}
            >
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Badgee;

const Style = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 10
  }
});
