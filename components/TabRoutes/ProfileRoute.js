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

    redirectTo = where => this.setState({
        ...this.state,
        view: where
    });

    render() {
        if (this.props.isLoggedIn) {
            switch (this.state.view) {
                case 'reviews':
                    return <Rating redirectTo={(where) => this.redirectTo(where)} isLoggedIn={this.props.isLoggedIn} />
                case 'clientedit':
                    return <ClientEdit redirectTo={(where) => this.redirectTo(where)} isLoggedIn={this.props.isLoggedIn} checkLoggedUser={() => this.props.checkLoggedUser()} />
                case 'clientprofile':
                    return <ClientProfile redirectTo={(where) => this.redirectTo(where)} isLoggedIn={this.props.isLoggedIn} />
                case 'professionaledit':
                    return <ProfessionalEdit redirectTo={(where) => this.redirectTo(where)} isLoggedIn={this.props.isLoggedIn} checkLoggedUser={() => this.props.checkLoggedUser()} />
                case 'professionalprofile':
                    return <ProfessionalProfile redirectTo={(where) => this.redirectTo(where)} isLoggedIn={this.props.isLoggedIn} />
                default:
                    return <ProfessionalProfile redirectTo={(where) => this.redirectTo(where)} isLoggedIn={this.props.isLoggedIn} />
            }
        } else {
            switch (this.state.view) {
                case 'signup':
                    return <Signup redirect={(where) => this.redirectTo(where)} changeMenu={(user) => this.props.changeMenu(user)} />
                case 'login':
                    return <Login redirect={(where) => this.redirectTo(where)} changeMenu={(user) => this.props.changeMenu(user)} />
                default:
                    return <Login redirect={(where) => this.redirectTo(where)} changeMenu={(user) => this.props.changeMenu(user)} />
            }
        }
    }

}