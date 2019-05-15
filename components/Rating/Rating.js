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


export default class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ratingData: [
                { id: '1', image: "https://media.thetab.com/blogs.dir/4/files/2013/10/shez1-530x706.jpg", name: "Frank Odalthh", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
                { id: '2', image: "https://i.pinimg.com/originals/e3/ea/a5/e3eaa5fd55dc38d7ad2857dfde282376.jpg", name: "John DoeLink", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
                { id: '3', image: "https://media.thetab.com/blogs.dir/4/files/2013/10/shez1-530x706.jpg", name: "March SoulLaComa", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
                { id: '4', image: "https://i.pinimg.com/originals/e3/ea/a5/e3eaa5fd55dc38d7ad2857dfde282376.jpg", name: "Finn DoRemiFaso", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
                { id: '5', image: "https://media.thetab.com/blogs.dir/4/files/2013/10/shez1-530x706.jpg", name: "Maria More More", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
                { id: '6', image: "https://i.pinimg.com/originals/e3/ea/a5/e3eaa5fd55dc38d7ad2857dfde282376.jpg", name: "Clark June Boom!", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
                { id: '7', image: "https://media.thetab.com/blogs.dir/4/files/2013/10/shez1-530x706.jpg", name: "The googler", comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
            ]
        }
    }

    componentDidMount(){
        console.log(this.props);
    }

    render() {
        return (
            <FlatList style={styles.main} data={this.state.ratingData} extraData={this.state} ItemSeparatorComponent={() => {
                return (<View style={styles.separator} />)
            }}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={(item) => {
                    const Review = item.item;
                    return (
                        <View style={styles.containerRating}>

                            <TouchableOpacity onPress={() => { }}>
                                <Image style={styles.image} source={{ uri: Review.image }} />
                            </TouchableOpacity>

                            <View style={styles.content}>
                                <View style={styles.contentHeader}>
                                    <Text style={{ fontWeight: 'bold' }}>
                                        {Review.name}
                                        <Text style={{ color: 'orange', }}>
                                            *****
                                         </Text>
                                    </Text>
                                    <Text style={styles.dateStyle}>
                                        10 May.
                                    </Text>
                                </View>

                                <Text>{Review.comment}</Text>
                            </View>
                        </View>
                    );
                }} />
        );
    }
}
const styles = StyleSheet.create(style);  

