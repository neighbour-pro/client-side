import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Button, Avatar, Badge, Icon, withBadge } from 'react-native-elements';

import UserService from '../../services/UserService';
import Loader from '../Loader/Loader';
import TopBar from '../TopBar/TopBar';


export default class ClientFinal extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            client: false,
            loaded: false
        }
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
                            <View style={styles.hrLine} />

                            <Text style={styles.description}>{this.state.client.description}</Text>
                            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.redirectTo('clientedit')}>
                                <Text>Edit</Text>
                            </TouchableHighlight>

                            <View style={{ width: '50%' }}>
                            </View>


                        </View> :
                        <Loader />
                }
            </React.Fragment>

        );
    }
}

const styles = StyleSheet.create({

    // profileHeader: {
    //     backgroundColor: 'red',

    // },
    imgProfile: {
        width: 170,
        height: 170,
        borderRadius: 85,
        borderWidth: 4,
        borderColor: "#333",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 80
    },

    name: {
        marginTop: 280,
        fontSize: 20,
        color: "#333333",
        fontWeight: "900",
        textAlign: 'center'
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10,
        textAlign: 'center',
    },
    locationInfo: {
        fontSize: 16,
        color: "#959595",
        marginTop: 10,
        textAlign: 'center',
    },
    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
    },
    description: {
        marginTop: 10,
        fontSize: 16,
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
});