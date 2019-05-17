import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Button, Avatar, Badge, Icon, withBadge } from 'react-native-elements';

import UserService from '../../services/UserService';
import Loader from '../Loader/Loader';
import TopBar from '../TopBar/TopBar';
import AuthService from '../../services/AuthService';


export default class ClientFinal extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            client: false,
            loaded: false
        }
        this.authService = new AuthService();
    }

    componentDidMount() {
        this.userService.getClientById(this.props.isLoggedIn._id)
            .then(response => {
                this.setState({
                    ...this.state,
                    client: response.data.user,
                    loaded: true
                })
            })
            .catch(err => console.log('Failed', err))
    }

    logout = () => {
        this.authService.logout()
            .then(response => {
                this.props.changeMenu()
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <React.Fragment>
                    <TopBar noOffer noBack/>

                {
                    this.state.loaded ?
                        <View>

                            <View style={styles.profileHeader}>
                                <Image style={styles.imgProfile} source={{ uri: this.state.client.userPhoto }} />
                                <Text style={styles.name}>{this.state.client.name}</Text>
                                <Text style={styles.locationInfo}>Legazpi, Madrid</Text>
                            </View>
                            {/* <View style={styles.hrLine} /> */}
                            <View style={{justifyContent: 'center'}}>
                            <View  style={{backgroundColor: '#d0d8e9'}}>
                            <Text style={styles.description}>{this.state.client.description}</Text>
                            </View>
                            </View>
                            <View style={{justifyContent: 'center'}}>
                            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.redirectTo('clientedit', this.state.client)}>
                                <Text style={styles.btnButton}>Edit</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.buttonLogout} onPress={() => this.logout()}>
                                <Text style={styles.btnButton}>Logout</Text>
                            </TouchableHighlight>
                            </View>

                            {/* <View style={{ width: '50%' }}>
                            </View> */}


                        </View> :
                        <Loader />
                }
            </React.Fragment>

        );
    }
}

const styles = StyleSheet.create({

    profileHeader: {
        backgroundColor: '#6200ee',
        paddingBottom: 20,

    },
    imgProfile: {
        width: 170,
        height: 170,
        borderRadius: 85,
        borderWidth: 4,
        borderColor: "#fff",
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 20
    },

    name: {
        marginTop: 210,
        fontSize: 20,
        color: "#fff",
        fontWeight: "900",
        textAlign: 'center'
    },
    info: {
        fontSize: 22,
        color: "#ff4a57",
        marginTop: 10,
        textAlign: 'center',
    },
    locationInfo: {
        fontSize: 18,
        color: "#959595",
        marginTop: 10,
        textAlign: 'center',
    },
    // hrLine: {
    //     borderBottomColor: 'black',
    //     borderBottomWidth: 1,
    //     marginLeft: 15,
    //     marginRight: 15,
    //     marginTop: 15,
    //     marginBottom: 15,
    // },
    description: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 20,
        color: "#696969",
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'center',
        // fontStyle: 'italic',
    },
    proFeature: {
        backgroundColor: '#eeeeee',
        alignSelf: 'stretch',
        textAlign: 'center',
        fontSize: 16,
        color: "#333333",
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        padding: 5,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginHorizontal: 20,
        borderRadius: 30,
        backgroundColor: "#d0d8e9",
      },
    buttonLogout: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 30,
        backgroundColor: "#ff4a57",
      },
      btnButton: {
        color: '#fff',
        fontSize: 16,
      }
});