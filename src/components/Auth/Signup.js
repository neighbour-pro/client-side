import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Text> Signup Component </Text>
        <Button title='Switch to Login' onPress={()=>this.props.navigation.navigate('Login')}/>
      </SafeAreaView>
    );
  }
}
