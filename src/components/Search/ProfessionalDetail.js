import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

import logo from "../../../assets/images/logo.png";
import { NavigationActions } from "react-navigation";

export default class ProfessionalDetail extends Component {
  state = {
    name: "Rita Sibarita",
    description: "I am the greatest in the world!",
    services: "These are my services"
  };

  render() {
    return (
      <SafeAreaView>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between"
          }}
        >
          <View style={styles.profileHeader}>
            <Image style={styles.imgProfile} source={logo} />
            <Text style={styles.name}>{this.state.name}</Text>
            <Text style={styles.locationInfo}>Legazpi, Madrid</Text>
          </View>
          <View style={{ backgroundColor: "#d0d8e9" }}>
            <Text style={styles.description}>{this.state.description}</Text>
            <Text style={styles.proFeature}>SERVICES</Text>
            <Text style={styles.description}>{this.state.services}</Text>
          </View>
          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() =>
              this.props.navigation.navigate("ProfessionalReviewList")
            }
          >
            <Text style={styles.btnButton}>Show reviews</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonContainer2}
            onPress={() => this.props.navigation.navigate('ChatDetail', {title: this.state.name})}
          >
            <Text style={styles.btnButton2}>Send message</Text>
          </TouchableHighlight>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  profileHeader: {
    backgroundColor: "#6200ee",
    paddingBottom: 20
  },
  imgProfile: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 4,
    borderColor: "#fff",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 20
  },

  name: {
    marginTop: 210,
    fontSize: 20,
    color: "#fff",
    fontWeight: "900",
    textAlign: "center"
  },
  info: {
    fontSize: 18,
    color: "#d0d8e9",
    fontWeight: "600",
    marginTop: 10,
    textAlign: "center"
  },
  locationInfo: {
    fontSize: 16,
    color: "#d0d8e9",
    marginTop: 10,
    textAlign: "center"
  },
  hrLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15
  },
  description: {
    marginTop: 30,
    marginBottom: 40,
    fontSize: 16,
    color: "#696969",
    marginLeft: 15,
    marginRight: 15,
    textAlign: "center"
    // fontStyle: 'italic',
  },
  proFeature: {
    backgroundColor: "#eeeeee",
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: 16,
    color: "#333333",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    padding: 5,
    overflow: "hidden",
    borderRadius: 15
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#d0d8e9"
  },
  buttonContainer2: {
    marginBottom: 20,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#71798a"
  },
  btnButton: {
    color: "#71798a",
    fontSize: 16,
    fontWeight: "bold"
  },
  btnButton2: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
