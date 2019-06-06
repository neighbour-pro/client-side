import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput, TouchableHighlight,
  Image,
  KeyboardAvoidingView
} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import logo from "../../../assets/images/logo.png";


export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: false
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={styles.scroll} behavior='padding'>
        <View style={styles.logo}>
          <Image style={styles.logoImg} source={logo} />
        </View>

        <Text style={styles.welcome}>Login to your account</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => alert('Try Login')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <View>
          {this.state.error ? (
            <View>
              <Text style={styles.errMsg}>Email or password are wrong</Text>
            </View>
          ) : null}
        </View>

        <TouchableHighlight
          onPress={() => alert('Go to reset password')}
        >
          <Text style={styles.bottomText}>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.bottomText}>Create Account</Text>
        </TouchableHighlight>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d0d8e9"
  },
  scroll: {
    flex:1, 
    alignItems:'center',
    paddingHorizontal: 60,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    marginBottom: 40,
    color: "#333"
  },
  errMsg: {
    color: "#ff4a57"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#6200ee"
  },
  loginText: {
    color: "#fff",
    fontSize: 15
  },
  logo: {
    width: 130,
    height: 130,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  logoImg: {
    margin: 0,
    width: 120,
    height: 120
  },
  bottomText: {
    marginTop: 15,
    fontSize: 18,
    height: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  }
});
