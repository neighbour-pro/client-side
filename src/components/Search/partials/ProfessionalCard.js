import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, Platform } from "react-native";

import logo from "../../../../assets/images/logo.png";
import { withNavigation } from "react-navigation";

class ProfessionalCard extends Component {
  render() {
    return (
      <View style={styles.cardPro}>
        <Image style={styles.image} source={logo} />

        <View style={styles.cardProContent}>
          <Text style={styles.name}>Rita Sibarita</Text>
          <Text style={styles.rating}>Rating: 4 / 5</Text>
          <TouchableHighlight
            style={styles.btnCard}
            onPress={() => this.props.navigation.navigate("ProfessionalDetail")}
          >
            <Text style={styles.subBtnCard}>Visit profile</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "white"
  },
  cardProContent: {
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  cardPro: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: Platform.OS === 'ios' ? "#fafafacc" : '#efefef',
    padding: 10,
    flexDirection: "row",
    borderRadius: 15,
    borderTopLeftRadius: 90,
    borderBottomLeftRadius: 90
  },

  name: {
    fontSize: 18,
    flex: 1,
    color: "#333",
    fontWeight: "bold"
  },
  rating: {
    fontSize: 14,
    flex: 1,
    alignSelf: "flex-start",
    color: "#333a"
  },
  btnCard: {
    marginTop: 10,
    height: 25,
    width: "100%",
    padding: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#6200ee",
    borderWidth: 2,
    borderColor: "#6200ee",
  },
  subBtnCard: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
    textTransform: "uppercase"
  },
});

export default withNavigation(ProfessionalCard);