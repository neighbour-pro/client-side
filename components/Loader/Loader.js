import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Config from 'react-native-config'

export default class Loader extends Component {
    render() {
        return (
            <View style={{flex:1, paddingTop: 180, paddingLeft: 80}}>
                <Text>Loading...</Text>
            </View>
        )
    }
}
