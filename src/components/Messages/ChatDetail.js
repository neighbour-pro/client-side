import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform
} from "react-native";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import sendIcon from "../../../assets/images/filled-sent.png";
import Ionicons from "react-native-vector-icons/Ionicons";

let fakeId = 0;

const maxNameLength = 40;

export default class ChatDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${
      navigation.state.params.title.length <= maxNameLength
        ? navigation.state.params.title
        : navigation.state.params.title.slice(0, maxNameLength - 3) + "..."
    }`,
    headerRight: (
      <TouchableOpacity
        style={styles.makeOffer}
        onPress={() => navigation.navigate("MakeOffer")}
      >
        <Ionicons
          size={36}
          color="#FAFAFA"
          name={Platform.OS === "ios" ? "ios-add" : "md-add"}
        />
      </TouchableOpacity>
    )
  });

  state = {
    textMessage: "",
    conversation: {
      messages: new Array(Math.floor(Math.random() * (15 - 4) + 4))
        .fill({})
        .map(() => ({
          _id: (++fakeId).toString(),
          date: new Date(),
          text: "Lorem ipsum ".repeat(Math.floor(Math.random() * (50 - 3) + 3)),
          type: Math.random() > .5 ? 'offer' : "message",
          title: 'The service',
          price: '45.56€',
          status: ['pending', 'accepted', 'rejected'][Math.floor(Math.random()*3)]
        }))
    }
  };

  renderDate = date => (
    <Text style={styles.time}>
      {`${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      }`}
    </Text>
  );

  renderPendingOffer = (item) => (
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('OfferDetail')} style={styles.offer}>
      <Text style={styles.offerHelp}>Click for more details:</Text>
      <View style={styles.offerContent}>
        <Text style={styles.offerTitle}>{item.title}</Text>
        <Text style={styles.offerPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  renderAcceptedOffer = (item) => (
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('OfferDetail')} style={[styles.offer, styles.acceptedOffer]}>
      <Text style={[styles.offerHelp, styles.offerHelpAccepted]}>Click for more details:</Text>
      <View style={styles.offerContent}>
        <Ionicons size={32} color='#FAFAFA' name={Platform.OS === 'ios' ? 'ios-checkmark-circle' : 'md-checkmark-circle'}/>
        <Text style={[styles.offerTitle, styles.offerTitleAccepted]}>{item.title}</Text>
        <Text style={[styles.offerPrice, styles.offerPriceAccepted]}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  renderRejectedOffer = (item) => (
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('OfferDetail')} style={[styles.offer, styles.rejectedOffer]}>
      <Text style={[styles.offerHelp, styles.offerHelpRejected]}>Click for more details:</Text>
      <View style={styles.offerContent}>
        <Ionicons size={32} color='#FAFAFA' name={Platform.OS === 'ios' ? 'ios-close-circle' : 'md-close-circle'}/>
        <Text style={[styles.offerTitle, styles.offerTitleRejected]}>{item.title}</Text>
        <Text style={[styles.offerPrice, styles.offerPriceRejected]}>{item.price}</Text>
      </View>
    </TouchableOpacity>
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
              <React.Fragment>
                {item.type === "message" ? (
                  <View style={[styles.item, itemStyle]}>
                    {!inMessage && this.renderDate(item.date)}
                    <View style={[styles.balloon]}>
                      <Text>{item.text}</Text>
                    </View>
                    {inMessage && this.renderDate(item.date)}
                  </View>
                ) : (
                  item.status === 'pending' ? (
                    this.renderPendingOffer(item)
                  ) :
                  item.status === 'accepted' ? (
                    this.renderAcceptedOffer(item)
                  ) :
                    this.renderRejectedOffer(item)
                )}
              </React.Fragment>
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
    flex: 1
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
    padding: 15
  },
  itemIn: {
    alignSelf: "flex-start",
    backgroundColor: "hsl(90, 20%, 80%)"
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
  },
  makeOffer: {
    paddingHorizontal: 15
  },
  offer: {
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#333',
    padding: 15,
  },
  acceptedOffer: {
    backgroundColor: 'hsl(90, 50%, 30%)',
  },
  rejectedOffer: {
    backgroundColor: 'hsl(0, 50%, 50%)',
  },
  offerHelp: {
    alignSelf: 'center',
    marginBottom: 5,
  },
  offerHelpAccepted: {
    color: '#FAFAFA'
  },
  offerHelpRejected: {
    color: '#FAFAFA'
  },
  offerContent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    maxWidth: '75%'
  },
  offerTitleAccepted: {
    color: '#FAFAFA'
  },
  offerTitleRejected: {
    color: '#FAFAFA'
  },
  offerPrice: {
    fontSize: 16,
    color: 'hsl(90, 50%, 30%)',
    paddingHorizontal: 5
  },
  offerPriceAccepted: {
    color: '#FAFAFA',
  },
  offerPriceRejected: {
    color: '#FAFAFA',
  }
});
