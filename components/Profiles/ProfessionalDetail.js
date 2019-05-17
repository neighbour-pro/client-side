import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import Loader from '../Loader/Loader';
import UserService from '../../services/UserService';
import TopBar from '../TopBar/TopBar';



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
                <TopBar noOffer redirectTo={(where, next) => this.props.redirectTo(where, next)} route=''/>
                {
                    this.state.loaded ?
                    <ScrollView contentContainerStyle={{flexGrow:1, justifyContent: 'space-between',}}>

                            <View style={styles.profileHeader}>
                                <Image style={styles.imgProfile} source={{ uri: this.state.professional.userPhoto }} />
                                <Text style={styles.name}>{this.state.professional.name}</Text>
                                {/* <Text style={styles.info}>Niñera</Text> */}
                                <Text style={styles.locationInfo}>Legazpi, Madrid</Text>
                            </View>
                            {/* <View style={styles.hrLine} /> */}
                            <View style={{backgroundColor: '#d0d8e9'}}>
                            <Text style={styles.description}>{this.state.professional.description}</Text>
                            <Text style={styles.proFeature}>SERVICES</Text>
                            <Text style={styles.description}>{this.state.professional.services}</Text>
                            </View>
                            {/* <Text style={styles.proFeature}>REVIEWS</Text> */}
                            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.redirectTo('reviews', this.state.professional._id)}>
                            <Text style={styles.btnButton}>Show reviews</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.buttonContainer2} onPress={() => this.props.changeTabIndex(2, {professional_id: this.state.professional._id})}>
                                <Text style={styles.btnButton2} >Send message</Text>
                            </TouchableHighlight>
{/* 
                            <View style={{ width: '50%' }}>
                            </View> */}


                        </ScrollView> :
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
        marginBottom: 10,
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
        fontSize: 18,
        color: "#d0d8e9",
        fontWeight: "600",
        marginTop: 10,
        textAlign: 'center',
    },
    locationInfo: {
        fontSize: 16,
        color: "#d0d8e9",
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
        marginTop: 30,
        marginBottom: 40,
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
        overflow: 'hidden',
        borderRadius: 15,
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
    buttonContainer2: {
        marginBottom: 20,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 30,
        backgroundColor: "#71798a",
      },
      btnButton: {
        color: '#71798a',
        fontSize: 16,
        fontWeight: 'bold',
      },
      btnButton2: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      }
});