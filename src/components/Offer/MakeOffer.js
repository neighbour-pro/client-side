import React, { Component } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';


export default class MakeOffer extends Component {

  state = {
    title: '',
    services: '',
    price: ''
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.scroll}>
        <Text style={styles.title}>Make a new offer to:</Text>
        <Text style={styles.client}>Rita Sibarita</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} label='Title' placeholder='Title of the service' value={this.state.title} onChangeText={title => this.setState({title})}/>
          <TextInput style={[styles.input, styles.textArea]} placeholder='The services you want to offer' label='Services' value={this.state.services} onChangeText={services => this.setState({services})} multiline/>
          <TextInput style={styles.input} label='Price' placeholder='50.00' value={this.state.price} onChangeText={price => this.setState({price})}/>
        </View>
        <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.goBack()}>
          <Text style={styles.btnText}>Make Offer</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
  },
  client: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  inputContainer: {
    marginVertical: 10
  },
  input: {
    marginVertical: 5
  },
  textArea: {
    height: 200
  },
  btn: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: 'hsl(90, 50%, 50%)',
    borderRadius: 10,
  },
  btnText: {
    color: '#FAFAFA',
    fontSize: 16,
    textAlign: 'center'
  }
});