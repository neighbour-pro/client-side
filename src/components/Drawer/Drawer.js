import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, Dimensions } from 'react-native';

export default class Drawer extends Component {

  navigateTo = (tab, section) => {
    this.props.navigation.navigate(tab, {section});
    this.props.navigation.closeDrawer();
  }

  render() {
    return (
      <SafeAreaView style={styles.drawerContainer}>
        <Text> Drawer Component </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    height: Dimensions.get('window').height - 48,
    backgroundColor: '#FAFAFA',
    borderBottomLeftRadius: 5,
  }
})
