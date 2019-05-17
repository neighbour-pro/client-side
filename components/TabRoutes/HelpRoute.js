import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Logout from '../Logout/Logout';
import AuthService from '../../services/AuthService';

export default class HelpRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: '',
        }
        this.authService = new AuthService();
    }

    componentDidMount(){
        this.authService.logout()
            .then(response => {
                this.props.changeMenu()
            })
            .catch(err => console.error(err));
    }

    render() {
        {
            switch(this.state.view){
                default:
                return <Logout changeMenu/>
            }
        }
    }

}