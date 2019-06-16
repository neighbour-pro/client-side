import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {TextInput} from 'react-native-paper';

export default class Payment extends Component {

  state = {
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Payment for: Offer title</Text>
        <Text style={styles.price}>Price: 54.65€</Text>
        <TextInput style={[styles.input]} label='Card Number' value={this.state.cardNumber} onChangeText={()=>this.setState({cardNumber})}/>
        <TextInput style={[styles.input]} label='Expiration Month' value={this.state.expMonth} onChangeText={()=>this.setState({expMonth})}/>
        <TextInput style={[styles.input]} label='Expiration Year' value={this.state.expYear} onChangeText={()=>this.setState({expYear})}/>
        <TextInput style={[styles.input]} label='CVV' value={this.state.cvv} onChangeText={()=>this.setState({cvv})}/>
        <TouchableOpacity style={styles.btn} onPress={()=>{}}>
          <Text style={styles.btnText}>Pay</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18
  },
  input: {
    marginVertical: 5
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'hsl(90, 50%, 30%)',
    borderRadius: 10,
  },
  btnText: {
    color: '#FAFAFA',
    textAlign: 'center'
  }
});