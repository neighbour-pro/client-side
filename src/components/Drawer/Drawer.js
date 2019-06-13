import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import img from '../../../assets/images/logo.png';

export default class Drawer extends Component {

  navigateTo = (tab, section) => {
    this.props.navigation.navigate(tab, {section});
    this.props.navigation.closeDrawer();
  }

  render() {
    return (
      <SafeAreaView style={styles.drawerContainer}>
        <View style={styles.header}>
          <Image source={img} style={styles.headerImage}/>
          <Text style={styles.headerText}>Rita Sibarita</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>{}} style={styles.menuItem}>
            <Ionicons size={24} name='ios-log-out' color='#FAFAFA'/>
            <Text style={styles.menuItemText}>Menu item 1</Text>
            <Ionicons size={24} name='ios-arrow-forward' color='#FAFAFA'/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    height: Dimensions.get('window').height - 48,
    backgroundColor: '#FAFAFA',
    borderBottomLeftRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  headerImage: {
    borderRadius: 50/2,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#3333',
  },
  headerText: {
    fontSize: 18,
    padding: 10
  },
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 15,
    backgroundColor: '#333',
    paddingTop: 30,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuItemText: {
    color: '#FAFAFA',
    flexGrow: 1,
    flexShrink: 1,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10
  }
})
