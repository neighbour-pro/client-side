import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ProListView from '../Prolist/ProListView';
import Map from '../Map/Mapa';
import ProfessionalDetail from '../Profiles/ProfessionalDetail';
import Rating from '../Rating/Rating';

export default class SearchRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: '',
            nextProp: null
        }
    }

    redirectTo = (where, next) => {
        this.setState({
            ...this.state,
            view: where,
            nextProp: next
        })
    }

    render() {
            switch (this.state.view) {
                case 'reviews':
                    return <Rating nextProp={this.state.nextProp} redirectTo={(where,next) => this.redirectTo(where, next)} isLoggedIn={this.props.isLoggedIn}/>
                case 'professional':
                    return <ProfessionalDetail nextProp={this.state.nextProp} isLoggedIn={this.props.isLoggedIn} changeTabIndex={(n)=>this.props.changeTabIndex(n)} redirectTo={(where, next) => this.redirectTo(where, next)}/>
                case 'map':
                    return <Map nextProp={this.state.nextProp} isLoggedIn={this.props.isLoggedIn} changeTabIndex={(n)=>this.props.changeTabIndex(n)} redirectTo={(where, next) => this.redirectTo(where, next)}/>
                default:
                    return <ProListView nextProp={this.state.nextProp} isLoggedIn={this.props.isLoggedIn} changeTabIndex={(n)=>this.props.changeTabIndex(n)} redirectTo={(where, next) => this.redirectTo(where, next)}/>
            }
    }

}