import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import MapView from "react-native-maps";

import myLocation from '../../../assets/images/location.png';

const defaultLatitude = 40.3925321;
const defaultLongitude = -3.6982669;
let fakeId = 0;

export default class ProfessionalMap extends Component {
  state = {
    latitude: null,
    longitude: null,
    concat: null,
    coords: [],
    x: "false",
    coordLatitude: defaultLatitude,
    coordLongitude: defaultLongitude,
    professionals: [],
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(
          {
            ...this.state,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          },
          () => {
            this.setState({
              ...this.state,
              professionals: new Array(15).fill(null).map(professional => ({
                _id: ++fakeId,
                latitude:
                  Math.random() > 0.5
                    ? defaultLatitude + Math.random() / 100
                    : defaultLatitude - Math.random() / 100,
                longitude:
                  Math.random() > 0.5
                    ? defaultLongitude + Math.random() / 100
                    : defaultLongitude - Math.random() / 100,
                title: `Rita Sibarita ${fakeId}`,
                subtitle: `Rating: ${(Math.random() * 5).toFixed(2)}/5`
              }))
            });
          }
        );
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: defaultLatitude,
            longitude: defaultLongitude,
            latitudeDelta: 0.08,
            longitudeDelta: 0.08
          }}
          annotations={this.state.professionals}
        >
          {!!this.state.latitude &&
            !!this.state.longitude &&
            this.state.x === "true" && (
              <MapView.Polyline
                coordinates={this.state.coords}
                strokeWidth={2}
                strokeColor={"red"}
              />
            )
          }

          {!!this.state.latitude &&
            !!this.state.longitude &&
            this.state.x === "error" && (
              <MapView.Polyline
                coordinates={[
                  {
                    latitude: this.state.latitude,
                    longitude: this.state.longitude
                  },
                  {
                    latitude: this.state.coordLatitude,
                    longitude: this.state.coordLongitude
                  }
                ]}
                strokeWidth={2}
                strokeColor={"red"}
              />
            )}

          {!!this.state.latitude && !!this.state.longitude && (
            <MapView.Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude
              }}
              title={"Your location"}
            >
              <Image
                source={myLocation}
                style={{
                  width: 30,
                  height: 40
                }}
              />
            </MapView.Marker>
          )}

          {this.state.professionals.map((pro, index) => {
            return (
              <MapView.Marker
                key={index}
                coordinate={{
                  latitude: pro.latitude,
                  longitude: pro.longitude
                }}
                title={pro.title}
                description={pro.subtitle}
                onCalloutPress={() => {
                  alert('Go to professional detail')
                }}
              />
            );
          })}
        </MapView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
