/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AuthService from './services/AuthService';

import Nav from './components/Nav/Nav';
import NavGuest from './components/Nav/NavGuest';
import Loader from './components/Loader/Loader';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      loaded: false
    }
    this.authService = new AuthService();
  }

  
  componentDidMount(){
    this.checkLoggedUser();
  }

  checkLoggedUser = () =>{
    this.authService.isLogged()
    .then(res => {
      this.setState({
        ...this.state,
        loaded: true,
        isLoggedIn: res.data
      })
    })
    .catch(err => {
      console.log(err)
      this.setState({
        ...this.state,
        loaded: true,
        isLoggedIn: false
      })
    });
  }

  changeToLoggedMenu(user){
    this.setState({
      ...this.state,
      isLoggedIn: user,
      loaded: true
    })
  }

  changeToGuestMenu(){
    this.setState({
      ...this.state,
      isLoggedIn: false,
      loaded: true
    })
  }
  
  render() {
    return (
      <React.Fragment>
        {
          this.state.loaded ?
            this.state.isLoggedIn ?
            <Nav changeMenu={()=>this.changeToGuestMenu()} checkLoggedUser={()=>this.checkLoggedUser()}/> :
            <NavGuest changeMenu={(user)=>this.changeToLoggedMenu(user)}/>
            :
            <Loader/>
        }
      </React.Fragment>
    );

  }
}


