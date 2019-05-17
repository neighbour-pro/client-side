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
            <View style={styles.container}>
                <Text style={styles.titleEdit}>Edit your profile</Text>
                {/* <View style={styles.profileHeader}> */}
                    {/* <Image style={styles.imgProfile} source={{ uri: 'https://img.archilovers.com/projects/c_383_63fe7970-a3e6-45e2-ba7d-7bfe6563e6f4.jpg' }} /> */}
                    {/* <Text style={styles.locationInfo}>Legazpi, Madrid</Text> */}
                {/* </View> */}
                {/* <View style={styles.hrLine} /> */}
                
                <TextInput
                style={styles.txtInput}
                    placeholder='your name'
                    label='name'
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                />
                <TextInput
                style={styles.txtInput}
                    placeholder='your email'
                    label='email'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput
                style={styles.txtInput}
                    placeholder='Your profile description'
                    label='description'
                    value={this.state.description}
                    onChangeText={description => this.setState({ description })}
                />
                <TextInput
                style={styles.txtInput}
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
                <TouchableHighlight onPress={() => this.saveAndRedirect()}>
                    <Text style={styles.titleEdit}>Save</Text>
                </TouchableHighlight>

                <View>
                </View>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: '#d0d8e9',
      },
      txtInput: {
          borderRadius: 30,
          marginVertical: 10,
          backgroundColor: 'transparent',
      },
      titleEdit:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginBottom: 40,
        color: '#333',
      },


});