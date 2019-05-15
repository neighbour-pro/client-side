import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class BackBottom extends React.Component {
  _goBack = () => console.log('Went back');
  _makeOffer = () => console.log('Carrito de la compra');

  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction
          onPress={this._goBack}
        />
        <Appbar.Content
          title="Nombre de la persona"
          subtitle="Última conexión"
        />
        <Appbar.Action icon="add" onPress={this._makeOffer} />
      </Appbar.Header>
    );
  }
}