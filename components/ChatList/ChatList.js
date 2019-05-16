import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Searchbar } from 'react-native-paper';

import pStyles from './ChatListStyles'
import ConversationService from '../../services/ConversationService';

export default class ChatList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstQuery: '',
      conversations: []
    };
    this.conversationService = new ConversationService();
  }

  componentDidMount(){
    console.log(this.props)
    this.conversationService.getConversations(this.props.isLoggedIn._id)
      .then(conversations => {
        this.setState({
          ...this.state,
          conversations: conversations.data.conversations
        });
      })
      .catch(err => console.log(err))
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
        
        <FlatList style={styles.contentList} columnWrapperStyle={styles.listContainer} data={this.state.conversations} keyExtractor={(item) => {
          return item._id;
        }}

          renderItem={({ item }) => {
            console.log(item)
            return (
              <TouchableOpacity style={styles.cardPro} onPress={() => { this.clickEventListener(item) }}>
                <Image style={styles.image} source={{ uri: item.professional_id.userPhoto }} />

                <View style={styles.cardProContent}>
                  <Text style={styles.name}>{item.professional_id.name}</Text>
                  <TouchableOpacity style={styles.btnCard} onPress={() => this.props.redirectTo('uniquechat', item._id)}>
                    <Text style={styles.subBtnCard}>Go to chat</Text>
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