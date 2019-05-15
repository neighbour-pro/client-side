import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      concat: null,
      coords: [],
      x: 'false',
      coordLatitude: 40.3925321,
      coordLongitude: -3.6982669
    }

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      });
    //   this.mergeDirections()
    }, (error) => this.setState({ error: error.message }), {
      enableHighAccuracy: false, timeout: 20000, maximumAge: 1000
    })
  }

//   getDirections = async (startLocation, endLocation) => {
//     try {
//       let response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLocation }&destination=${ endLocation }`);
//       let responseJSON = await response.json();
//       let points = Polyline.decode(responseJSON.routes[0].overview_polyline.points);
//       let coords = points.map((point, index) => {
//         return {
//           latitude: point[0],
//           longitude: point[1]
//         }
//       });
//       this.setState({ coords });
//       this.setState({ x: 'true' });
//       return coords
//     } catch (e) {
//       console.log(e)
//       this.setState({ x: 'error' });
//       return e
//     }
//   };

//   mergeDirections = () => {
//     if (this.state.latitude !== null && this.state.longitude !== null) {
//       let concatDirections = this.state.latitude + ',' + this.state.longitude;
//       this.setState({ concat: concatDirections }, () => {
//         this.getDirections(concatDirections, '37.782722,-122.406439')
//       });
//     }
//   };

  render() {
    return (
      <MapView style={styles.map} initialRegion={{
        latitude: 40.3925321,
        longitude: -3.6982669,
        latitudeDelta: 1,
        longitudeDelta: 1
      }}>
        { !!this.state.latitude && !!this.state.longitude && this.state.x === 'true' &&
          <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor={'red'}
          />
        }

        { !!this.state.latitude && !!this.state.longitude && this.state.x === 'error' &&
        <MapView.Polyline
          coordinates={[
            { latitude: this.state.latitude, longitude: this.state.longitude },
            { latitude: this.state.coordLatitude, longitude: this.state.coordLongitude },
          ]}
          strokeWidth={2}
          strokeColor={'red'}
        />
        }

        { !!this.state.latitude && !!this.state.longitude &&
          <MapView.Marker
            coordinate={{
              "latitude": this.state.latitude, "longitude": this.state.longitude
            }} title={"Your location"} />
        }

        {/* { !!this.state.coordLatitude && !!this.state.coordLongitude &&
        <MapView.Marker
          coordinate={{
            "latitude": this.state.coordLatitude, "longitude": this.state.coordLongitude
          }} title={"Your destination"} />
        } */}
      </MapView>

      
      // <View style={styles.container}>
      //   <Text>{ this.state.latitude }</Text>
      //   <Text>{ this.state.longitude }</Text>
      //   <Text>{ this.state.error }</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;