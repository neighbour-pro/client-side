import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Button, Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import UserService from '../../services/UserService';



export default class ClientEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            description: '',
            error: false,
        }
        this.userService = new UserService();
    }

    componentDidMount(){
        this.setState({
            name: this.props.nextProps.name,
            email: this.props.nextProps.email,
            phone: this.props.nextProps.phone,
            description: this.props.nextProps.description
        });
    }

    saveAndRedirect = () => {
        this.userService.updateClient(this.props.isLoggedIn._id, this.state)
            .then(res => {
                this.props.checkLoggedUser()
                this.props.redirectTo('clientprofile');
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    ...this.state,
                    error: true
                })
            });
    }

    render() {
        return (
            <View>

                <View style={styles.profileHeader}>
                    {/* <Image style={styles.imgProfile} source={{ uri: 'https://img.archilovers.com/projects/c_383_63fe7970-a3e6-45e2-ba7d-7bfe6563e6f4.jpg' }} /> */}
                    <Text style={styles.locationInfo}>Legazpi, Madrid</Text>
                </View>
                <View style={styles.hrLine} />
                <TextInput
                    placeholder='your name'
                    label='name'
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                />
                <TextInput
                    placeholder='your email'
                    label='email'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput
                    placeholder='Your profile description'
                    label='description'
                    value={this.state.description}
                    onChangeText={description => this.setState({ description })}
                />
                <TextInput
                    placeholder='your phone number'
                    label='phone'
                    value={this.state.phone}
                    onChangeText={phone => this.setState({ phone })}
                />
                {
                    this.state.error ?
                        <Text>The form has some errors</Text> :
                        null
                }
                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.saveAndRedirect()}>
                    <Text>Save</Text>
                </TouchableHighlight>

                <View style={{ width: '50%' }}>
                </View>


            </View>

        );
    }
}

const styles = StyleSheet.create({

    profileHeader: {
        paddingTop: 80,

    },
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