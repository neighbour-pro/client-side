import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class TopBar extends React.Component {

constructor(props){
  super(props);
}

  _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  // _onMore = () => console.log('Shown more');

  render() {
    return (
      <Appbar.Header>
        {
          !this.props.noBack ?
          <Appbar.BackAction
          onPress={()=>this.props.redirectTo(this.props.route, this.props.nextProps)}
        /> : 
        null
        }
        <Appbar.Content
          title={this.props.title}
          subtitle={this.props.subtitle}
        />
        {
          !this.props.noOffer ?
          <Appbar.Action icon="add" onPress={this._onSearch} /> :
          null
        }
        {
          this.props.showMap ?
          <Appbar.Action icon="map" onPress={()=>this.props.redirectTo('map')} /> :
          null
        }
        {
          this.props.showList ?
          <Appbar.Action icon="list" onPress={()=>this.props.redirectTo('')} /> :
          null
        }

        {/* <Appbar.Action icon="more-vert" onPress={this._onMore} /> */}
      </Appbar.Header>
    );
  }
}
