import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  SafeAreaView
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { Searchbar } from "react-native-paper";
import ProfessionalCard from "./partials/ProfessionalCard";

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
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
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
  searchTop: {
    paddingLeft: 10,
    marginTop: 0,
    shadowOpacity: 0,
    marginHorizontal: 21,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: Platform.OS === "ios" ? "#fafafacc" : "#f0f0f0",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }
});
