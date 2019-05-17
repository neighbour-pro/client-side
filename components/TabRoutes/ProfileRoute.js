import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Profile from '../Profiles/ClientFinal';
import Rating from '../Rating/Rating';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import ProList from '../Prolist/ProListView';
import Map from '../Map/Mapa';

import ProfessionalProfile from '../Profiles/ProfessionalFinal';
import ProfessionalEdit from '../Profiles/ProfessionalEdit';
import ClientProfile from '../Profiles/ClientFinal';
import ClientEdit from '../Profiles/ClientEdit';


export default class ProfileRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: '',
            nextProps: null
        }

    }

    componentDidMount() {
        if (this.props.isLoggedIn) {
            switch (this.props.isLoggedIn.role) {
                case 'Client':
                    this.setState({
                        ...this.state,
                        view: 'clientprofile'
                    });
                    break;
                case 'Professional':
                    this.setState({
                        ...this.state,
                        view: 'professionalprofile'
                    });
                    break;
            }
        }
    }

    redirectTo = (where, next) => this.setState({
        ...this.state,
        view: where,
        nextProps: next
    });

    render() {
        if (this.props.isLoggedIn) {
            switch (this.state.view) {
                case 'reviews':
                    return <Rating nextProps={this.state.nextProps} redirectTo={(where, next) => this.redirectTo(where, next)} isLoggedIn={this.props.isLoggedIn} />
                case 'clientedit':
                    return <ClientEdit nextProps={this.state.nextProps} redirectTo={(where, next) => this.redirectTo(where, next)} isLoggedIn={this.props.isLoggedIn} checkLoggedUser={() => this.props.checkLoggedUser()} />
                case 'clientprofile':
                    return <ClientProfile nextProps={this.state.nextProps} redirectTo={(where, next) => this.redirectTo(where, next)} isLoggedIn={this.props.isLoggedIn} />
                case 'professionaledit':
                    return <ProfessionalEdit nextProps={this.state.nextProps} redirectTo={(where, next) => this.redirectTo(where, next)} isLoggedIn={this.props.isLoggedIn} checkLoggedUser={() => this.props.checkLoggedUser()} />
                case 'professionalprofile':
                    return <ProfessionalProfile nextProps={this.state.nextProps} redirectTo={(where, next) => this.redirectTo(where, next)} isLoggedIn={this.props.isLoggedIn} />
                default:
                    return <ProfessionalProfile nextProps={this.state.nextProps} redirectTo={(where, next) => this.redirectTo(where, next)} isLoggedIn={this.props.isLoggedIn} />
            }
        } else {
            switch (this.state.view) {
                case 'signup':
                    return <Signup nextProps={this.state.nextProps} redirect={(where, next) => this.redirectTo(where, next)} changeMenu={(user) => this.props.changeMenu(user)} />
                case 'login':
                    return <Login nextProps={this.state.nextProps} redirect={(where, next) => this.redirectTo(where, next)} changeMenu={(user) => this.props.changeMenu(user)} />
                default:
                    return <Login nextProps={this.state.nextProps} redirect={(where, next) => this.redirectTo(where, next)} changeMenu={(user) => this.props.changeMenu(user)} />
            }
        }
    }

}