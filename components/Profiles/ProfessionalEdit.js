import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Button, Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import UserService from '../../services/UserService';
import { TextInput } from 'react-native-paper';




export default class ProfessionalEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            description: '',
            services: '',
            error: false
        }
        this.userService = new UserService();
    }

    componentDidMount() {
        this.setState({
            name: this.props.isLoggedIn.name,
            email: this.props.isLoggedIn.email,
            phone: this.props.isLoggedIn.phone,
            description: this.props.isLoggedIn.description,
            services: this.props.isLoggedIn.services,
        })
    }

    updateUser = () => {
        this.userService.updateClient(this.props.isLoggedIn._id, this.state)
            .then(res => {
                this.props.checkLoggedUser()
                this.props.redirectTo('professionalprofile')
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    ...this.state,
                    error:true
                });
            })
    }

    render() {
        return (
            <View>

                <View style={styles.profileHeader}>
                    {/* <Image style={styles.imgProfile} source={{ uri: 'https://img.archilovers.com/projects/c_383_63fe7970-a3e6-45e2-ba7d-7bfe6563e6f4.jpg' }} /> */}
                    {/* <Text style={styles.name}>PROFESSIONAL EDITED</Text> */}
                    {/* <Text style={styles.info}>Niñera</Text> */}
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
                    placeholder='your description'
                    label='description'
                    value={this.state.description}
                    onChangeText={description => this.setState({ description })}
                />
                <TextInput
                    placeholder='your services'
                    label='services'
                    value={this.state.services}
                    onChangeText={services => this.setState({ services })}
                />
                <TextInput
                    placeholder='your phone'
                    label='phone'
                    value={this.state.phone}
                    onChangeText={phone => this.setState({ phone })}
                />
                {/* <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
                <Text style={styles.proFeature}>SERVICES</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
                <Text style={styles.proFeature}>REVIEWS</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text> */}
                {/* () => this.props.redirectTo('professionaledit') */}
                {
                    this.state.error ?
                        <Text>There are errors on the form</Text> :
                        null
                }
                
                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.updateUser()}>
                    <Text>Save</Text>
                </TouchableHighlight>

                <View style={{ width: '50%' }}>
                </View>


            </View>

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