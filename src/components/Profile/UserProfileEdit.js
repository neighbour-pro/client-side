import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";
import { TextInput } from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class UserProfileEdit extends Component {

  state = {
    name: 'Rita Sibarita',
    email: 'myemail@mail.com',
    description: 'I am Rita Sibarita',
    services: 'These are my services',
    phone: '756746483',
    error: false
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.profileHeader}>
          <Image style={styles.imgProfile} source={{ uri: 'https://img.archilovers.com/projects/c_383_63fe7970-a3e6-45e2-ba7d-7bfe6563e6f4.jpg' }} />
          <Text style={styles.name}>{this.state.name}</Text>
          <Text style={styles.locationInfo}>Legazpi, Madrid</Text>
        </View>
        <View style={styles.hrLine} />

        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your name"
          label="Name"
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          placeholder="Your email"
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder="Your description"
          label="Description"
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
          multiline
          numberOfLines={5}
          style={styles.textArea}
        />
        <TextInput
          placeholder="Your services"
          label="Services"
          value={this.state.services}
          onChangeText={services => this.setState({ services })}
          multiline
          numberOfLines={5}
          style={styles.textArea}
        />
        <TextInput
          placeholder="Your phone"
          label="Phone"
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        </View>
        
        {this.state.error ? <Text style={styles.error}>There are errors on the form</Text> : null}

        <TouchableHighlight
          style={styles.buttonContainer}
          // onPress={() => this.updateUser()}
        >
          <Text style={styles.saveButton}>Save</Text>
        </TouchableHighlight>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgProfile: {
      width: 170,
      height: 170,
      borderRadius: 85,
      borderWidth: 4,
      borderColor: "#333",
      marginBottom: 10,
      marginTop: 20,
      alignSelf: 'center'
  },
  name: {
      fontSize: 20,
      color: "#333333",
      fontWeight: "900",
      textAlign: 'center'
  },
  info: {
      fontSize: 16,
      color: "#00BFFF",
      marginTop: 10,
      textAlign: 'center',
  },
  locationInfo: {
      fontSize: 16,
      color: "#959595",
      marginTop: 10,
      textAlign: 'center',
  },
  hrLine: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginLeft: 15,
      marginRight: 15,
      marginTop: 15,
      marginBottom: 15,
  },
  description: {
      marginTop: 10,
      fontSize: 16,
      color: "#696969",
      marginLeft: 15,
      marginRight: 15,
      textAlign: 'center',
      // fontStyle: 'italic',
  },
  proFeature: {
      backgroundColor: '#eeeeee',
      alignSelf: 'stretch',
      textAlign: 'center',
      fontSize: 16,
      color: "#333333",
      marginTop: 20,
      marginLeft: 15,
      marginRight: 15,
      padding: 5,
  },
  textArea: {
    height: 200
  },
  saveButton: {
    marginTop: 15,
    fontSize: 18,
    borderColor: 'hsl(90, 60%, 60%)',
    borderRadius: 5,
    borderWidth: 2,
    textAlign: 'center',
    padding: 15,
    margin: 15,
  },
  error: {
    textAlign: 'center',
    fontSize: 16,
    color: 'hsl(0, 50%, 50%)',
    marginTop: 15
  },
  inputContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
  }
});