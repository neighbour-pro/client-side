import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Modal,
  SafeAreaView,
  ScrollView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import img from "../../../assets/images/logo.png";

export default class PendingReviews extends Component {
  state = {
    modalVisible: false,
    selectedIndex: null,
    reviews: new Array(Math.floor(Math.random() * (5 - 2) + 2))
      .fill({})
      .map((_, index) => ({
        _id: index.toString(),
        img,
        name: "Rita Server",
        offer: {
          title: "The service",
          description: "Lorem ipsum".repeat(500),
          price: "32.54€"
        }
      }))
  };

  render() {
    return (
      <React.Fragment>
        <FlatList
          data={this.state.reviews}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.container}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.infoContainer}>
                <Image source={item.img} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    modalVisible: true,
                    selectedIndex: item._id
                  });
                }}
                style={[styles.btn, styles.serviceDetails]}
              >
                <Text style={styles.btnText}>
                  <Ionicons
                    size={24}
                    color="#FAFAFA"
                    name={Platform.OS === "ios" ? "ios-paper" : "md-paper"}
                  />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("AddReview")}
                style={[styles.btn, styles.addReview]}
              >
                <Text style={styles.btnText}>Add review</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {this.state.selectedIndex !== null && (
          <Modal
            visible={this.state.modalVisible}
            transparent={false}
            animationType="slide"
            // onRequestClose={() => this.setState({ modalVisible: false })}
          >
            <SafeAreaView>
              <ScrollView style={styles.modalScroll} contentContainerStyle={styles.modalContainer}>
                <Text style={styles.modalTitle}>
                  {this.state.reviews[this.state.selectedIndex].offer.title}
                </Text>
                <Text style={styles.modalDescription}>
                  {
                    this.state.reviews[this.state.selectedIndex].offer
                      .description
                  }
                </Text>
                <Text style={styles.modalPrice}>
                  {this.state.reviews[this.state.selectedIndex].offer.price}
                </Text>
                <View style={styles.actions}>
                  <TouchableOpacity
                    style={[styles.btn, styles.close]}
                    onPress={() => {
                      this.setState({
                        modalVisible: false,
                        selectedIndex: null
                      });
                    }}
                  >
                    <Text style={styles.btnText}>Close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.btn, styles.addReview]}
                    onPress={() => {
                      this.setState({
                        modalVisible: false,
                        selectedIndex: null
                      });
                      this.props.navigation.navigate("AddReview");
                    }}
                  >
                    <Text style={styles.btnText}>Add Review</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </SafeAreaView>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderColor: "#333",
    borderRadius: 15,
    borderWidth: 1,
    marginVertical: 20
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 125,
    paddingHorizontal: 10,
  },
  image: {
    borderRadius: 50 / 2,
    width: 50,
    height: 50
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10
  },
  btnText: {
    color: "#FAFAFA",
    fontSize: 16
  },
  serviceDetails: {
    backgroundColor: "hsl(30, 50%, 50%)"
  },
  addReview: {
    backgroundColor: "hsl(90, 50%, 50%)"
  },
  modal: {
    flex: 1,
    backgroundColor: "red"
  },
  modalScroll: {
    minHeight: '100%'
  },
  modalContainer: {
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20
  },
  modalDescription: {
    alignSelf: 'flex-start',
    padding: 15
  },
  modalPrice: {
    alignSelf: 'flex-start',
    color: 'hsl(30, 50%, 50%)',
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  close: {
    backgroundColor: "hsl(0, 50%, 50%)"
  }
});
