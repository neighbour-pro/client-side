import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Searchbar } from 'react-native-paper';

import pStyles from './ProlistStyles'

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
    };
  }

  clickEventListener = (item) => {
    Alert.alert('Message', 'Item clicked. ' + item.name);
  }

  render() {
    const { firstQuery } = this.state;
    return (
      <View style={styles.container}>

        <Searchbar
          style={styles.searchTop}
          placeholder="Search professionals nearby..."
          onChangeText={query => { this.setState({ firstQuery: query }); }}
          value={firstQuery}
        />
        
        <FlatList style={styles.contentList} columnWrapperStyle={styles.listContainer} data={this.state.cardsData} keyExtractor={(item) => {
          return item.id;
        }}

          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.cardPro} onPress={() => { this.clickEventListener(item) }}>
                <Image style={styles.image} source={{ uri: item.image }} />

                <View style={styles.cardProContent}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.rating}>{item.rating}</Text>
                  <TouchableOpacity style={styles.btnCard} onPress={() => this.clickEventListener(item)}>
                    <Text style={styles.subBtnCard}>Visit profile</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create(pStyles);  