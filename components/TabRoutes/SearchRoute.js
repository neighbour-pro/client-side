import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ProListView from '../Prolist/ProListView';
import Map from '../Map/Mapa';

export default class SearchRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: '',
        }
    }
    render() {
        {
            switch (this.state.view) {
                case 'map':
                    return <Map isLoggedIn={this.state.isLoggedIn} changeTabIndex={(n)=>this.props.changeTabIndex(n)}/>
                default:
                    return <ProListView isLoggedIn={this.state.isLoggedIn} changeTabIndex={(n)=>this.props.changeTabIndex(n)}/>
            }
        }
    }

}