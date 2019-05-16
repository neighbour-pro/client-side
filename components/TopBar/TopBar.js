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
          title="Title"
          subtitle="Subtitle"
        />
        {
          !this.props.noOffer ?
          <Appbar.Action icon="add" onPress={this._onSearch} /> :
          null
        }
        {/* <Appbar.Action icon="more-vert" onPress={this._onMore} /> */}
      </Appbar.Header>
    );
  }
}
