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
                    {/* <Text style={styles.locationInfo}>Legazpi, Madrid</Text> */}
                </View>
                {/* <View style={styles.hrLine} /> */}
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


});