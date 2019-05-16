import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableHighlight, Image, Alert, TouchableWithoutFeedback, } from 'react-native';
import AuthService from '../../services/AuthService';
import LoginStyle from './LoginStyle';


const logo = require ('../../src/images/nlogo.png');



export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false
    }
    this.authService = new AuthService();
  }

  doLogin() {
    this.authService.login({
      email: this.state.email,
      password: this.state.password,
    })
      .then(response => this.props.changeMenu(response.data))
      .catch(response => this.setState({ ...this.state, error: true }));
  }


  render() {
    return (

      <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoImg} source={logo}/>
        </View>
      
        <Text style={styles.welcome}>Login to your account</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize='none'
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

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.doLogin()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <View>
          {
            this.state.error ?
              <View>
                <Text style={styles.errMsg}>Email or password are wrong</Text>
              </View> :
              null
          }
        </View>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore-password')}>
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.redirect('signup')}>
          <Text>Create Account</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create(LoginStyle); 
