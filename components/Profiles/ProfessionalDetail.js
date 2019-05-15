import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Loader from '../Loader/Loader';
import UserService from '../../services/UserService';

export default class ProfessionalDetail extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            professional: false,
            loaded: false
        }
        this.userService = new UserService();
    }

    componentDidMount(){
        this.userService.getProfessionalById(this.props.nextProp)
            .then(professional => {
                this.setState({
                    ...this.state,
                    professional: professional.data.user,
                    loaded:true
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.loaded ?
                        <View>

                            <View style={styles.profileHeader}>
                                <Image style={styles.imgProfile} source={{ uri: this.state.professional.userPhoto }} />
                                <Text style={styles.name}>{this.state.professional.name}</Text>
                                <Text style={styles.info}>Niñera</Text>
                                <Text style={styles.locationInfo}>Legazpi, Madrid</Text>
                            </View>
                            <View style={styles.hrLine} />

                            {/* <Text style={styles.description}>{this.state.professional.description}</Text>
                            <Text style={styles.proFeature}>SERVICES</Text>
                            <Text style={styles.description}>{this.state.professional.services}</Text>
                            <Text style={styles.proFeature}>REVIEWS</Text> */}
                            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.redirectTo('reviews', this.state.professional._id)}>
                            <Text style={styles.description}>Show reviews</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.redirectTo('', {professional_id: this.state.professional._id})}>
                                <Text>Send message</Text>
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