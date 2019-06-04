import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ProfessionalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>ProfessionalList Component</Text>
        <Ionicons name='ios-search' size={48} color='red'/>
      </View>
    );
  }
}
