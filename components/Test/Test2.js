import {Container, Header, Title, Button, Icon} from 'native-base';
import React, {Component, View} from 'react-native';
​
export default class HeaderExample extends Component {
    render() {
        return (
            <View>
              <Container>
                <Header>
                    <Button transparent>
                        <Icon name="ios-arrow-left" />
                    </Button>

                    <Title>Header</Title>

                    <Button transparent>
                        <Icon name="navicon"/>
                    </Button>
                </Header>
            </Container>
            </View>
        );
    }
}