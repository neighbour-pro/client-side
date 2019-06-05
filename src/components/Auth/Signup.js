import React, { Component } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
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
            // onChangeText={name => this.setState({ name })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            // onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            // onChangeText={password => this.setState({ password })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Repeat password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            // onChangeText={pass_match => this.setState({ pass_match })}
          />
        </View>

        <View style={styles.dropdownContainer}>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="I am..."
              iosIcon={
                <Icon
                  name="arrow-dropdown-circle"
                  style={{ color: "#007aff", fontSize: 25 }}
                />
              }
              style={{ width: undefined }} // ¿?
              // selectedValue={this.state.selected}
              // onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Professional" value="Professional" />
              <Picker.Item label="Not professional" value="Client" />
            </Picker>
          </Form>
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => alert('Signup button')}
        >
          <Text style={styles.loginText}>Create account</Text>
        </TouchableHighlight>
        {true ? (
          <View>
            <Text style={styles.errMsg}>All fields are required</Text>
          </View>
        ) : null}

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => alert("Go to login")}
        >
          <Text>Back to login</Text>
        </TouchableHighlight>
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
  dropdownContainer: {
    borderBottomColor: "#F5FCFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row"
  },
  logo: {
    width: 130,
    height: 130,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: "#6200ee",
    marginBottom: 10,
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  logoImg: {
    margin: 0,
    width: 120,
    height: 120
  }
});
