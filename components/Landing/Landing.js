import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Badge, Text } from "native-base";

class LandingPage extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require("./image/bg.jpg")}
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <View
              style={{
                height: 315,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View>
                <Image
                  source={require("./image/logo.png")}
                  style={{
                    width: 250,
                    height: 170
                  }}
                />
              </View>
            </View>

            <View
              style={{
                height: 180,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <Badge
                style={{
                  width: "65%",
                  height: 130,
                  backgroundColor: "white",
                  alignSelf: "center"
                }}
              >
                <Text
                  style={{
                    color: "black",
                    textAlign: "left",
                    marginLeft: 5,
                    fontSize: 17,
                    marginTop: 15
                  }}
                >
                  Headline
                </Text>
                <Text
                  style={{
                    color: "black",
                    textAlign: "left",
                    marginLeft: 5,
                    fontSize: 13
                  }}
                >
                  blah blah blah blah blah blah blah blah blah blah blah blah
                </Text>
              </Badge>
            </View>

            <View
              style={{
                height: 120,
                justifyContent: "flex-start",
                alignItems: "flex-start"
              }}
            >
              <TouchableOpacity
                style={{
                  height: 45,
                  width: "80%",
                  backgroundColor: "#553DE9",
                  borderRadius: 35,
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "white",
                      alignSelf: "center",
                      fontSize: 16
                    }}
                  >
                    Create Account
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 45,
                  width: "80%",
                  backgroundColor: "white",
                  borderRadius: 35,
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "#553DE9",
                      alignSelf: "center",
                      fontSize: 16
                    }}
                  >
                    Create Account
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});

export default LandingPage;
