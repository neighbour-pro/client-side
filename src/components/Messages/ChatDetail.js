import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import sendIcon from "../../../assets/images/filled-sent.png";

let fakeId = 0;

const maxNameLength = 40;

export default class ChatDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${
      navigation.state.params.title.length <= maxNameLength
        ? navigation.state.params.title
        : navigation.state.params.title.slice(0, maxNameLength - 3) + "..."
    }`
  });

  state = {
    textMessage: "",
    conversation: {
      messages: new Array(Math.floor(Math.random() * (15 - 4) + 4))
      .fill({})
      .map(() => ({
        _id: (++fakeId).toString(),
        date: new Date(),
        text: "Lorem ipsum ".repeat(Math.floor(Math.random() * (50 - 3) + 3))
      }))
    }
  };

  renderDate = date => (
    <Text style={styles.time}>
      {`${date.getHours() < 10 ? '0'+date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}`}
    </Text>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareFlatList
          ref="flatList"
          onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.conversation.messages}
          keyExtractor={item => {
            return item._id;
          }}
          renderItem={message => {
            const item = message.item;
            // let inMessage = item.user_id._id !== this.props.isLoggedIn._id;
            let inMessage = Math.random() < 0.5;
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text>{item.text}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            );
          }}
        />
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Write a message..."
              underlineColorAndroid="transparent"
              onChangeText={textMessage => this.setState({ textMessage })}
            />
          </View>

          <TouchableOpacity
            style={styles.btnSend}
            onPress={() => alert("Send Message")}
          >
            <Image source={sendIcon} style={styles.iconSend} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentList: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
    padding: 5
  },
  btnSend: {
    color: "#6200ee",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center"
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: "center"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
  },
  itemIn: {
    alignSelf: "flex-start",
    backgroundColor: 'hsl(90, 20%, 80%)',
  },
  itemOut: {
    alignSelf: "flex-end"
  },
  time: {
    alignSelf: "flex-end",
    margin: 15,
    fontSize: 12,
    color: "#808080"
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    padding: 5
  }
});
