import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Profile from '../Profiles/ClientFinal';
import Rating from '../Rating/Rating';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import ProList from '../Prolist/ProListView';
import Map from '../Map/Mapa';


export default class ProfileRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: true,
            view: 'map',

        }
    }
    render() {
        if (this.state.loggedUser) {
            switch (this.state.view) {
                case 'rating':
                    return <Rating />
                case 'prolist':
                    return <ProList />
                case 'map':
                    return <Map />
                default:
                    return <Profile />
            }
        } else {
            switch (this.state.view) {
                case 'signup':
                    return <Signup />
                case 'prolist':
                    return <ProList />
                case 'map':
                    return <Map />
                default:
                    return <Login />
            }
        }
    }

}