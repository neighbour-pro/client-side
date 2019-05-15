import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AuthService from '../../services/AuthService';

export default class Logout extends Component {
    constructor(props){
        super(props);
        this.authService = new AuthService;
    }

    componentDidMount(){
        this.authService.logout()
            .then(response => console.log('Logged out'))
            .catch(err => console.error(err));
    }
  
    render() {
    return (
      <View>
        <Text> Logout </Text>
      </View>
    )
  }
}
