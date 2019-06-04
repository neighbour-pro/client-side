import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
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
        <Button title="Go to map" onPress={()=>this.props.navigation.navigate('ProfessionalMap')}/>
      </View>
    );
  }
}
