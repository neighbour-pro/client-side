import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert } from 'react-native';

import { Container, Header, Content, Icon, Picker, Form } from "native-base";

import axios from 'axios';


export default class LoginView extends Component {

  doSignup() {
    axios.post('http://localhost:5000/api/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.pass_match,
      role: this.state.selected
    })
      .then(response => this.props.changeMenu(response.data.user))
      .catch(response => this.setState({ ...this.state, error: true }));
  }

  constructor(props) {
    super(props);

    this.state = {
      error: false,
      selected: undefined,
      name: '',
      email: '',
      password: '',
      pass_match: '',

    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Create a new account</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Full name"
            keyboardType="default"
            underlineColorAndroid='transparent'
            onChangeText={(name) => this.setState({ name })} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize = 'none'
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Repeat password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(pass_match) => this.setState({ pass_match })} />
        </View>

        <View style={styles.dropdownContainer}>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="I am..."
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Professional" value="Professional" />
              <Picker.Item label="Not professional" value="Client" />
            </Picker>
          </Form>
        </View>


        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.doSignup()}>
          <Text style={styles.loginText}>Create account</Text>
        </TouchableHighlight>
        {
          this.state.error ?
            <View>
              <Text>All fields are required</Text>
            </View>
            :
            null
        }

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.redirect('login')}>
          <Text>Back to login</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  dropdownContainer: {
    borderBottomColor: '#F5FCFF',
    // backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',

  }
});