import React, { Component } from 'react';
import { View, Text, Button,SafeAreaView } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Text> Login Component </Text>
        <Button title='Switch to Signup' onPress={()=>this.props.navigation.navigate('Signup')}/>
      </SafeAreaView>
    );
  }
}
