import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

import style from './RatingStyles'
import UserService from '../../services/UserService';
import Loader from '../Loader/Loader';
import TopBar from '../TopBar/TopBar';


export default class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            professional: false
        }
        this.userService = new UserService();
    }

    componentDidMount(){
        console.log(this.props);
        this.userService.getReviewsFromProfessional(this.props.nextProp)
            .then(reviews => {
                this.setState({
                    ...this.state,
                    professional: reviews.data.user,
                    loaded: true
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    ...this.state,
                    loaded: true
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <TopBar noOffer redirectTo={(where, next) => this.props.redirectTo(where, next)} route='professional' nextProps={this.state.professional._id}/>
                {
                    this.state.loaded ? 
                    <FlatList style={styles.main} data={this.state.professional.reviews} extraData={this.state} ItemSeparatorComponent={() => {
                        return (<View style={styles.separator} />)
                    }}
                        keyExtractor={(item) => {
                            return item._id;
                        }}
                        renderItem={(item) => {
                            console.log(item)
                            const review = item.item;
                            return (
                                <View style={styles.containerRating}>
        
                                    <TouchableOpacity onPress={() => { }}>
                                        <Image style={styles.image} source={{ uri: review.fromUserId.userPhoto }} />
                                    </TouchableOpacity>
        
                                    <View style={styles.content}>
                                        <View style={styles.contentHeader}>
                                            <Text style={{ fontWeight: 'bold' }}>
                                                {review.fromUserId.name}
                                                <Text style={{ color: 'orange', }}>
                                                    {'*'.repeat(review.stars)}
                                                 </Text>
                                            </Text>
                                            <Text style={styles.dateStyle}>
                                                {`${new Date(review.createdAt).getDate()}/${new Date(review.createdAt).getMonth()}/${new Date(review.createdAt).getFullYear()}`}
                                            </Text>
                                        </View>
        
                                        <Text>{review.comment}</Text>
                                    </View>
                                </View>
                            );
                        }} /> :
                        <Loader/>
                }
            </React.Fragment>
        );
    }
}
const styles = StyleSheet.create(style);  

