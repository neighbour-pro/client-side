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
      <KeyboardAwareScrollView>
        <Text>Make a new offer to:</Text>
        <Text>Rita Sibarita</Text>
        <View>
          <TextInput label='Title' placeholder='Title of the service' value={this.state.title} onChangeText={title => this.setState({title})}/>
          <TextInput style={styles.textArea} placeholder='The services you want to offer' label='Services' value={this.state.services} onChangeText={services => this.setState({services})} multiline/>
          <TextInput label='Price' placeholder='50.00' value={this.state.price} onChangeText={price => this.setState({price})}/>
        </View>
        <TouchableOpacity onPress={()=>alert('Make Offer')}>
          <Text>Make Offer</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textArea: {
    height: 200
  }
});