import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ProListView from '../Prolist/ProListView';

export default class HelpRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: '',
        }
    }
    render() {
        {
            switch(this.state.view){
                default:
                return <ProListView/>
            }
        }
    }

}