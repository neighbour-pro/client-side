import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, FlatList, Alert } from 'react-native';
import { Searchbar } from 'react-native-paper';

import pStyles from './ProlistStyles'
import UserService from '../../services/UserService';
import Loader from '../Loader/Loader';
import TopBar from '../TopBar/TopBar';

export default class ProListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      professionalList: false,
      loaded: false
    };
    this.userService = new UserService();
  }

  componentDidMount() {
    
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position);
      this.setState({
        ...this.state,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      }, () => {

        this.userService.getProfessionalNearMe(this.state.longitude, this.state.latitude)
          .then(response => {
            this.setState({
              ...this.state,
              professionalList: response.data.users,
              loaded: true
            })
          })
          .catch(err => console.log(err));
      });
      //   this.mergeDirections()
    }, (error) => {
      console.log(error)
      this.setState({
        ...this.state, error: error.message, latitude: 40.3925321,
        longitude: -3.6982669
      }), {
          enableHighAccuracy: false, timeout: 20000, maximumAge: 1000
        }
    })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.loaded ?
            <View style={styles.container}>
            <TopBar noOffer noBack/>
              <Searchbar
                style={styles.searchTop}
                placeholder="Search professionals nearby..."
                onChangeText={query => { this.setState({ ...this.state, query: query }); }}
                value={this.state.query}
              />

              <FlatList redirectTo={(where, next) => this.props.redirectTo(where, next)} style={styles.contentList} columnWrapperStyle={styles.listContainer} data={this.state.professionalList} keyExtractor={(item) => {
                return item.professional_id;
              }}

                renderItem={({ item }) => {
                  return (
                    <View style={styles.cardPro}>
                      <Image style={styles.image} source={{ uri: item.image }} />

                      <View style={styles.cardProContent}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.rating}>Rating: {parseFloat(item.avg_rate).toFixed(2)}</Text>
                        <TouchableHighlight style={styles.btnCard} onPress={() => {
                          this.props.isLoggedIn ?
                            this.props.redirectTo('professional', item.professional_id) :
                            this.props.changeTabIndex(1, {professional_id: item.professional_id})
                        }}>
                          <Text style={styles.subBtnCard}>Visit profile</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                  )
                }} />
            </View> :
            <Loader />
        }
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create(pStyles);  