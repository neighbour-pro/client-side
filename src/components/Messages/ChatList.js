import React, { Component } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, Platform } from "react-native";
import {Searchbar} from 'react-native-paper';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';

import img from '../../../assets/images/logo.png';
let fakeId = 0;

const maxNameCharacters = 40;
const maxLastMessageCharacters = 50;

export default class ChatList extends Component {
  state = {
    firstQuery: "",
    conversations: new Array(10).fill({}).map(() => ({
      _id: ++fakeId,
      professional_id: {
        name: `Rita Sibarita ${fakeId}`
      },
      lastMessage: `This is the last message sent by another user ${fakeId*Math.floor(Math.random()*10)}`
    }))
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Searchbar
          style={styles.searchTop}
          placeholder="Find conversation..."
          onChangeText={query => this.setState({ firstQuery: query })}
          value={this.state.firstQuery}
        />
        <KeyboardAwareFlatList
          style={styles.contentList}
          data={this.state.conversations}
          keyExtractor={item => {
            return item._id.toString();
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.cardPro}
                onPress={() => this.props.navigation.navigate('ChatDetail', {title: item.professional_id.name})}
              >
                <Image
                  style={styles.image}
                  source={img}
                />

                <View style={styles.cardProContent}>
                  <Text style={styles.name}>{item.professional_id.name.length <= maxNameCharacters ? item.professional_id.name : item.professional_id.name.slice(0, maxNameCharacters-3) + '...'}</Text>
                  <Text style={styles.lastMessage}>{item.lastMessage.length <= maxLastMessageCharacters ? item.lastMessage : item.lastMessage.slice(0, maxLastMessageCharacters-3) + '...'}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#ebf0f7"
  },
  contentList: {
    flex: 1,
  },
  cardProContent: {
    marginLeft: 20,
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#ebf0f7"
  },

  cardPro: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: Platform.OS === 'ios' ? '#fafafacc' : '#f0f0f0',
    padding: 10,
    flexDirection: "row",
    borderRadius: 30
  },
  name: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold"
  },
  lastMessage: {
    fontSize: 12,
  },
  searchTop: {
    shadowOpacity: 0,
    marginHorizontal: 21,
    marginTop: 30,
    paddingLeft: 15,
    marginBottom: 10,
    borderRadius: 30,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Platform.OS === 'ios' ? '#fafafacc' : '#f0f0f0',
  }
};
