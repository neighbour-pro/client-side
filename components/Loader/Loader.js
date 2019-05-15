import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Loader extends Component {
    render() {
        return (
            <View style={{flex:1, paddingTop: 180, paddingLeft: 80}}>
                <Text>{process.env.REACT_APP_SERVER_URL}</Text>
            </View>
        )
    }
}
