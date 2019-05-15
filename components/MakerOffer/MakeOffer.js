import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';



export default class MakeOffer extends Component {

  constructor(props) {
    super(props);
    state = {
      offerTittle   : '',
      offerDescription: '',
      amount: 0,
    }
  }



  onClickListener = (viewId) => {
    Alert.alert("¡Atención!", "Botón pulsado: "+viewId);
  }



  render() {
    
    console.log(this.props)
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Login to your account</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Offer Tittle"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(offerTittle) => this.setState({offerTittle})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Description"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(offerDescription) => this.setState({offerDescription})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Amount(€)"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={(amount) => this.setState({amount})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Send offer</Text>
        </TouchableHighlight>
        <View>
        </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
});