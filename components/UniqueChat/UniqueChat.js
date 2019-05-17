import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, TextInput, FlatList, Button } from 'react-native';
import ConversationService from '../../services/ConversationService';
import Loader from '../Loader/Loader';
import io from 'socket.io-client';
import config from '../../config/config';
import TopBar from '../TopBar/TopBar'



export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      conversation: [],
      loaded: false
    };
    this.conversationService = new ConversationService();
    this.socket = io(config.SERVER_URL);
    this.counter = 0;
  }

  componentDidMount() {
    console.log(this.props.nextProps)
    this.socket.emit('join', this.props.nextProps);
    this.socket.on('msg', message => {
      console.log('Socket:', message)
      const newMessage = {
        _id: ++this.counter,
        text: message.message,
        user_id: {
          _id: message.user_id,
          name: message.user_name
        }
      };

      const conversation = this.state.conversation;
      conversation.messages.push(newMessage);
      this.setState({
        ...this.state,
        conversation,
      });
      // this.getMessages();
    })
    this.socket.open();
    this.getMessages();
  }

  componentWillUnmount() {
    this.socket.close();
  }

  renderDate = (date) => {
    return (
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }

  getMessages = () => {
    return this.conversationService.getConversationMessages(this.props.nextProps)
      .then(conversation => {
        console.log(conversation.data.conversation)
        this.setState({
          ...this.state,
          conversation: conversation.data.conversation,
          loaded: true,
          name_address: ''
        })
      })
      .catch(err => console.log(err));
  }

  sendMessage = () => {
    this.socket.emit('message', {
      conversation_id: this.props.nextProps,
      message: this.state.name_address,
      user_name: this.props.isLoggedIn.name,
      user_id: this.props.isLoggedIn._id
    });

    const post = {
      text: this.state.name_address,
      userId: this.props.isLoggedIn._id,
    }
    this.conversationService.sendMessage(this.props.nextProps, post)
      .then(res => this.getMessages())
      .catch(err => console.log(err));
  }

  render() {

    return (
      <React.Fragment>


        {
          this.state.loaded ?
            <React.Fragment>
              {this.props.isLoggedIn.role === 'Professional' ? <TopBar redirectTo={(where, next) => this.props.redirectTo(where, next)}/> : <TopBar noOffer redirectTo={(where, next) => this.props.redirectTo(where, next)}/>}
              <View style={styles.container}>
                <FlatList
                  ref='flatList'
                  onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
                  style={styles.list}
                  data={this.state.conversation.messages}
                  keyExtractor={(item) => {
                    return item._id;
                  }}
                  renderItem={(message) => {
                    const item = message.item;
                    console.log(item)
                    let inMessage = item.user_id !== this.props.isLoggedIn._id;
                    let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                    return (
                      <View style={[styles.item, itemStyle]}>
                        {!inMessage && this.renderDate(item.date)}
                        <View style={[styles.balloon]}>
                          <Text>{item.text}</Text>
                        </View>
                        {inMessage && this.renderDate(item.date)}
                      </View>
                    )
                  }} />
                <View style={styles.footer}>
                  <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                      placeholder="Write a message..."
                      underlineColorAndroid='transparent'
                      onChangeText={(name_address) => this.setState({ name_address })} />
                  </View>

                  <TouchableOpacity style={styles.btnSend} onPress={() => this.sendMessage()}>
                    <Image source={{ uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png" }} style={styles.iconSend} />
                  </TouchableOpacity>
                </View>
              </View>
            </React.Fragment> 
            :
            <Loader />
        }
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: "#00BFFF",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize: 12,
    color: "#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#eeeeee",
    borderRadius: 300,
    padding: 5,
  },
});  