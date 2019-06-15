import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

export default class OfferDetail extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>The offer title</Text>
        <Text style={styles.description}>{'Lorem ipsum dolor sit amet'.repeat(30)}</Text>
        <Text style={styles.price}>45.56€</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatDetail')} style={[styles.btn, styles.reject]}>
            <Text style={styles.btnText}>Reject</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatDetail')} style={[styles.btn, styles.accept]}>
            <Text style={styles.btnText}>Accept</Text>
          </TouchableOpacity>
        </View>
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
  }
});