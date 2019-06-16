import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

import img from "../../../assets/images/logo.png";
let fakeId = 0;

export default class OfferList extends Component {
  state = {
    offers: new Array(10).fill(null).map(() => ({
      _id: (++fakeId).toString(),
      professional: {
        name: "Rita " + fakeId,
        img
      },
      title: "The offer title",
      state: ["pending", "accepted", "rejected"][Math.floor(Math.random() * 3)]
    }))
  };

  renderCard = item => (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <Image style={styles.professionalImg} source={item.professional.img} />
        <View style={styles.info}>
          <Text style={styles.professionalName}>{item.professional.name}</Text>
          <Text style={styles.offerTitle}>{item.title}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.btn, styles.btnPay]}
        onPress={() => this.props.navigation.navigate("Payment")}
      >
        <Text style={styles.btnText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );

  renderAcceptedCard = item => (
    <View style={[styles.card, styles.acceptedCard]}>
      <View style={styles.contentContainer}>
        <Image style={styles.professionalImg} source={item.professional.img} />
        <View style={styles.info}>
          <Text style={styles.professionalName}>{item.professional.name}</Text>
          <Text style={styles.offerTitle}>{item.title}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => this.props.navigation.navigate("OfferDetail")}
      >
        <Text style={styles.btnText}>View offer</Text>
      </TouchableOpacity>
    </View>
  );

  renderRejectedCard = item => (
    <View style={[styles.card, styles.rejectedCard]}>
      <View style={styles.contentContainer}>
        <Image style={styles.professionalImg} source={item.professional.img} />
        <View style={styles.info}>
          <Text style={styles.professionalName}>{item.professional.name}</Text>
          <Text style={styles.offerTitle}>{item.title}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => this.props.navigation.navigate("OfferDetail")}
      >
        <Text style={styles.btnText}>View offer</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <FlatList
        data={this.state.offers}
        keyExtractor={item => item._id}
        style={styles.container}
        renderItem={({ item }) =>
          item.state === "pending"
            ? this.renderCard(item)
          : item.state === "accepted"
            ? this.renderAcceptedCard(item)
            : this.renderRejectedCard(item)
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  card: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  acceptedCard: {
    backgroundColor: "hsl(90, 50%, 70%)"
  },
  rejectedCard: {
    backgroundColor: "hsl(0, 50%, 70%)"
  },
  contentContainer: {
    flexDirection: 'row'
  },
  professionalImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    padding: 10
  },
  info: {
    marginHorizontal: 5
  },
  professionalName: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 5
  },
  offerTitle: {
    color: "#666"
  },
  btn: {
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "hsl(30, 50%, 50%)",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: "#FAFAFA"
  },
  btnPay: {
    backgroundColor: 'hsl(90, 50%, 30%)',
  }
});
