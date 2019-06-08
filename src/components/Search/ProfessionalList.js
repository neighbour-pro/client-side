import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableHighlight,
  Platform
} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { Searchbar } from 'react-native-paper';

import logo from "../../../assets/images/logo.png";
import { SafeAreaView } from "react-navigation";

export default class ProfessionalList extends Component {
  state = {
    query: ""
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView style={styles.contentList}>
        <Searchbar
          style={styles.searchTop}
          placeholder="Search nearby..."
          onChangeText={query => this.setState({ query })}
          value={this.state.query}
        />
          {listMock}
          {listMock}
          {listMock}
          {listMock}
          {listMock}
          {listMock}
          {listMock}
          {listMock}
          {listMock}
          {listMock}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d8e9"
  },
  contentList: {
    flex: 1
  },
  cardProContent: {
    marginLeft: 20,
    marginTop: 10
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "white"
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
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    // backgroundColor: "#fafafaaa",
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
    // borderColor: 'transparent',
    color: "white"
  },
  subBtnCard: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
    textTransform: "uppercase"
  },
  searchTop: {
    paddingLeft: 10,
    marginTop: 0,
    shadowOpacity: 0,
    marginHorizontal: 21,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: Platform.OS === 'ios' ? '#fafafacc' : '#f0f0f0',
    // backgroundColor: "red",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }
});

const listMock = (
  <View style={styles.cardPro}>
    <Image style={styles.image} source={logo} />

    <View style={styles.cardProContent}>
      <Text style={styles.name}>Rita Sibarita</Text>
      <Text style={styles.rating}>Rating: 4 / 5</Text>
      <TouchableHighlight
        style={styles.btnCard}
        onPress={() => alert("Go to professional detail")}
      >
        <Text style={styles.subBtnCard}>Visit profile</Text>
      </TouchableHighlight>
    </View>
  </View>
);
