import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView,
  Platform
  
} from "react-native";
import { Icon, Form, Picker } from "native-base";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import logo from "../../../assets/images/logo.png";

export default class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    pass_match: '',
    role: '',
    error: false
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.logo}>
            <Image style={styles.logoImg} source={logo} />
          </View>
          <Text style={styles.welcome}>Create a new account</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Full name"
              keyboardType="default"
              underlineColorAndroid="transparent"
              onChangeText={name => this.setState({ name })}
            />
          </View>

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

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Repeat password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={pass_match => this.setState({ pass_match })}
            />
          </View>

          <View style={Platform.OS === 'ios' ? styles.iosPicker : null}>
            <Form style={Platform.OS === 'android' ? styles.androidRoleContainer : styles.iosRoleContainer}>
              {
                Platform.OS === 'android' ?
                <Text>Select your role: </Text> :
                null
              }
              <Picker
                mode="dropdown"
                placeholder="I am..."
                placeholderStyle={{color: '#333', width: 100}}
                iosIcon={
                  <Icon
                    name="arrow-dropdown-circle"
                    style={{ color: "#007aff", fontSize: 25 }}
                  />
                }
                selectedValue={this.state.role}
                onValueChange={role => this.setState({role})}
              >
                <Picker.Item label="Professional" value="Professional" />
                <Picker.Item label="Not professional" value="Client" />
              </Picker>
            </Form>
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => alert("Signup button")}
          >
            <Text style={styles.loginText}>Create account</Text>
          </TouchableHighlight>
          {this.state.error ? (
            <View>
              <Text style={styles.errMsg}>All fields are required</Text>
            </View>
          ) : null}

          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text>Back to login</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d0d8e9",
    paddingHorizontal: 60
  },
  errMsg: {
    color: "#ff4a57"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    marginBottom: 40,
    color: "#333333"
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
    color: "white"
  },
  iosPicker: {
    borderBottomColor: "#F5FCFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  androidRoleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 45,
    width: 250,
    marginBottom: 20,
    alignItems: 'center',
  },
  iosRoleContainer: {
    width: 250
  },
  logo: {
    width: 130,
    height: 130,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: "#6200ee",
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  logoImg: {
    margin: 0,
    width: 120,
    height: 120
  }
});
