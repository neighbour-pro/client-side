import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  Text,
  Container,
  Footer,
  FooterTab,
  Icon,
  Button
} from "native-base";

class ReveiwPage extends Component {
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <View style={styles.row0}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 4 }}>
                <Image
                  source={require("./images/profile.jpg")}
                  style={{
                    width: 155,
                    height: 155,
                    borderRadius: 90,
                    zIndex: 99,
                    top: 55
                  }}
                />
              </View>
              <View style={{ flex: 5 }}>
                <View style={{ flex: 1 }} />
                <View style={{ flex: 2 }}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 19,
                      fontWeight: "bold",
                      marginBottom: 10
                    }}
                  >
                    ANTONEY S. BATISTA
                  </Text>
                  <Text style={{ color: "#D6DADA", marginBottom: 7 }}>
                    Legazpi, Madrid
                  </Text>
                  <Text style={{ color: "#D6DADA", fontStyle: "italic" }}>
                    Logged in 3 days ago
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 3 }} />
              <View style={{ flex: 4, flexDirection: "row" }}>
                <TouchableOpacity style={{ flex: 1 }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "#0078D7",
                      borderRadius: 40,
                      marginTop: 7,
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 5
                    }}
                  >
                    <Text style={{ padding: 12, color: "white" }}>MESAGE</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "#0078D7",
                      borderRadius: 40,
                      marginTop: 7,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 5
                    }}
                  >
                    <Text style={{ padding: 12, color: "white" }}>REVIEW</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  row0: {
    width: "100%",
    height: 170,
    backgroundColor: "#0078D7"
  },
  row1: {
    width: "100%",
    height: 50,
    backgroundColor: "transparent",
    zIndex: -9
  },
  row2: {
    flex: 1,
    marginTop: -10,
    marginLeft: 10,
    marginRight: 10
  }
});

export default ReveiwPage;
