import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import axios from 'axios';



export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false
    }
  }

  doLogin() {
    axios.post('http://localhost:5000/api/auth/login', {
      email: this.state.email,
      password: this.state.password,
    })
      .then(response => this.props.changeMenu(response.data.user))
      .catch(response => this.setState({ ...this.state, error: true }));
  }

  render() {
    return (
      <View style={styles.container}>
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
                <Text>Email or password are wrong</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
});