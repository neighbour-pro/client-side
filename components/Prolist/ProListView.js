import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Searchbar } from 'react-native-paper';

import pStyles from './ProlistStyles'
import UserService from '../../services/UserService';
import Loader from '../Loader/Loader';

export default class ProListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardsData: [
        { id: '1', name: "User 1", image: "https://media.thetab.com/blogs.dir/4/files/2013/10/shez1-530x706.jpg", rating: 'Valoración: 4,9 de 5' },
        { id: '2', name: "User 2", image: "https://i.pinimg.com/originals/e3/ea/a5/e3eaa5fd55dc38d7ad2857dfde282376.jpg", rating: 'Valoración: 4,8 de 5' },
        { id: '3', name: "User 3", image: "https://media.thetab.com/blogs.dir/4/files/2013/10/shez1-530x706.jpg", rating: 'Valoración: 4,7 de 5' },
        { id: '4', name: "User 4", image: "https://i.pinimg.com/originals/e3/ea/a5/e3eaa5fd55dc38d7ad2857dfde282376.jpg", rating: 'Valoración: 4,6 de 5' },
        { id: '5', name: "User 5", image: "https://media.thetab.com/blogs.dir/4/files/2013/10/shez1-530x706.jpg", rating: 'Valoración: 4,5 de 5' },
      ],
      firstQuery: '',
      loaded: false
    };
    this.userService = new UserService();
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position);
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      }, () => {
        
        this.userService.getProfessionalNearMe(this.state.longitude, this.state.latitude)
          .then(response => {
            console.log(response.data.users)
            this.setState({
              ...this.state,
              professionalList: response.data.users,
              loaded:true
            })
          })
      });
    //   this.mergeDirections()
    }, (error) => {
      console.log(error)
      this.setState({ error: error.message, latitude: 40.3925321,
        longitude: -3.6982669 }), {
        enableHighAccuracy: false, timeout: 20000, maximumAge: 1000
      }
    })
  }

  clickEventListener = (item) => {
    Alert.alert('Message', 'Item clicked. ' + item.name);
  }

  render() {
    const { firstQuery } = this.state;
    return (
      <React.Fragment>
        {
          this.state.loaded ?
          <View style={styles.container}>

        <Searchbar
          style={styles.searchTop}
          placeholder="Search professionals nearby..."
          onChangeText={query => { this.setState({ firstQuery: query }); }}
          value={firstQuery}
        />
        
        <FlatList style={styles.contentList} columnWrapperStyle={styles.listContainer} data={this.state.professionalList} keyExtractor={(item) => {
          return item.professional_id;
        }}

          renderItem={( {item} ) => {
            return (
              <TouchableOpacity style={styles.cardPro} onPress={() => { this.clickEventListener(item) }}>
                <Image style={styles.image} source={{ uri: item.image }} />

                <View style={styles.cardProContent}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.rating}>Rating: {parseFloat(item.avg_rate).toFixed(2)}</Text>
                  <TouchableOpacity style={styles.btnCard} onPress={() => {
                    this.props.isLoggedIn ? 
                    this.clickEventListener(item) :
                    this.props.changeTabIndex(1)
                  }}>
                    <Text style={styles.subBtnCard}>Visit profile</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )
          }} />
      </View> :
      <Loader/>
        }
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create(pStyles);  