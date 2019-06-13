import React, { Component } from "react";
import { View, Text, ScrollView, Image, StyleSheet, TouchableHighlight, SafeAreaView } from "react-native";

import img from '../../../assets/images/logo.png';

export default class UserProfile extends Component {

  state = {
    name: 'Rita Sibarita',
    description: 'Lorem ipsum dolor sit amet',
    services: 'These are my services',
    reviews: [{},{},{}]
  }

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
      >
        <View style={styles.profileHeader}>
          <Image
            style={styles.imgProfile}
            source={img}
          />
          <Text style={styles.name}>{this.state.name}</Text>
          <Text style={styles.locationInfo}>Legazpi, Madrid</Text>
        </View>
        <View style={styles.hrLine} />

        <Text style={styles.description}>
          {this.state.description}
        </Text>
        <Text style={styles.proFeature}>SERVICES</Text>
        <Text style={styles.description}>
          {this.state.services}
        </Text>
        {this.state.reviews.length !== 0 ? (
          <React.Fragment>
            <Text style={styles.proFeature}>REVIEWS</Text>
            <TouchableHighlight
              style={styles.buttonContainer}
              // onPress={() => this.props.redirectTo("reviews")}
            >
              <Text style={styles.description}>Show reviews</Text>
            </TouchableHighlight>
          </React.Fragment>
        ) : null}
        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('UserProfileEdit')}
        >
          <Text style={styles.editButton}>EDIT</Text>
        </TouchableHighlight>

        <View style={{ width: "50%" }} />
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imgProfile: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 4,
    borderColor: "#333",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 80
  },

  name: {
    marginTop: 280,
    fontSize: 20,
    color: "#333333",
    fontWeight: "900",
    textAlign: "center"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
    textAlign: "center"
  },
  locationInfo: {
    fontSize: 16,
    color: "#959595",
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
    marginTop: 10,
    fontSize: 16,
    color: "#696969",
    marginLeft: 15,
    marginRight: 15,
    textAlign: "center"
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
    padding: 5
  },
  editButton: {
    marginTop: 15,
    fontSize: 18,
    borderColor: 'hsl(90, 60%, 60%)',
    borderRadius: 5,
    borderWidth: 2,
    textAlign: 'center',
    padding: 15,
    margin: 15,
  }
});
