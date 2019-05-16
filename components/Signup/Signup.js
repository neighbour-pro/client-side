import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert } from 'react-native';

import { Container, Header, Content, Icon, Picker, Form } from "native-base";

import AuthService from '../../services/AuthService';

const logo = require ('../../src/images/nlogo.png');
import SignupStyles from './SignupStyles'


export default class LoginView extends Component {

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

    this.authService = new AuthService();
  }

  doSignup() {
    this.authService.signup({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.pass_match,
      role: this.state.selected
    })
      .then(response => this.props.changeMenu(response.data.user))
      .catch(response => {
        console.log(response);
        this.setState({ ...this.state, error: true })
      });
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
       <View style={styles.logo}>
        <Image style={styles.logoImg} source={logo}/>
        </View>
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
              <Text style={styles.errMsg}>All fields are required</Text>
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
const styles = StyleSheet.create(SignupStyles); 

