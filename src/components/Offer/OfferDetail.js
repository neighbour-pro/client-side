import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

export default class OfferDetail extends Component {

  state = {
    title: 'The offer title',
    description: 'Lorem ipsum dolor sit amet'.repeat(30),
    price: '45.56€',
    status: ['pending', 'accepted', 'rejected'][0]
  }

  renderPendingActions = () => (
    <View style={styles.actions}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[styles.btn, styles.reject]}>
        <Text style={styles.btnText}>Reject</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[styles.btn, styles.accept]}>
        <Text style={styles.btnText}>Accept</Text>
      </TouchableOpacity>
    </View>
  );

  renderAcceptedActions = () => (
    <View style={[styles.actions, styles.infoContainer, styles.acceptedActions]}>
      <Text style={styles.acceptedText}>This offer was accepted</Text>
    </View>
  );

  renderRejectedActions = () => (
    <View style={[styles.actions, styles.infoContainer, styles.rejectedActions]}>
      <Text style={styles.rejectedText}>This offer was rejected</Text>
    </View>
  );

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{this.state.title}</Text>
        <Text style={styles.description}>{this.state.description}</Text>
        <Text style={styles.price}>{this.state.price}</Text>
        {
          this.state.status === 'pending' ?
            this.renderPendingActions() :
          this.state.status === 'accepted' ?
            this.renderAcceptedActions() :
            this.renderRejectedActions()
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    paddingVertical: 10
  },
  price: {
    alignSelf: 'center',
    fontSize: 18
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  acceptedActions: {
    backgroundColor: 'hsl(90, 50%, 30%)',
  },
  rejectedActions: {
    backgroundColor: 'hsl(0, 50%, 50%)',
  },
  infoContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  btn: {
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    color: '#FAFAFA'
  },
  reject: {
    backgroundColor: 'hsl(0, 50%, 50%)',
  },
  accept: {
    backgroundColor: 'hsl(90, 50%, 50%)',
  },
  acceptedText: {
    color: '#FAFAFA'
  },
  rejectedText: {
    color: '#FAFAFA'
  }
});