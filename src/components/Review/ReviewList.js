import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList
} from "react-native";

let fakeId = 0;
import logo from "../../../assets/images/logo.png";

export default class ProfessionalReviewList extends Component {
  state = {
    reviews: new Array(10).fill({}).map(() => ({
      _id: (++fakeId).toString(),
      stars: Math.floor(Math.random() * 5),
      fromUserId: {
        name: "Rita Reviewer",
        createdAt: "2019-06-06"
      },
      comment: "Lorem ipsum dolor sit amet ".repeat(
        Math.floor(Math.random() * 30)
      )
    }))
  };

  render() {
    return (
      <FlatList
        style={styles.main}
        data={this.state.reviews}
        extraData={this.state}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={item => item._id}
        renderItem={item => {
          const review = item.item;
          return (
            <View style={styles.containerRating}>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Image style={styles.image} source={logo} />
                  <View style={styles.infoBox}>
                    <Text style={styles.name}>
                      {review.fromUserId.name}
                    </Text>
                    <Text style={styles.stars}>{"*".repeat(review.stars)}</Text>
                  </View>
                  <Text style={styles.dateStyle}>
                    {`${new Date(
                      review.fromUserId.createdAt
                    ).getDate()}/${new Date(
                      review.fromUserId.createdAt
                    ).getMonth()}/${new Date(
                      review.fromUserId.createdAt
                    ).getFullYear()}`}
                  </Text>
                </View>
                <Text>{review.comment}</Text>
              </View>
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#ffffff"
  },
  containerRating: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  content: {
    marginLeft: 16,
    flex: 1
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: 'center'
  },
  separator: {
    alignSelf: "center",
    width: "98%",
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  dateStyle: {
    fontSize: 11,
    color: "#808080"
  },
  infoBox: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  stars: {
    color: "orange",
    paddingHorizontal: 5,
    fontSize: 18
  }
});
