import * as React from 'react';
import { BottomNavigation, Text, Menu } from 'react-native-paper';
import ProfileRoute from '../TabRoutes/ProfileRoute';
import SearchRoute from '../TabRoutes/SearchRoute';

import AuthService from '../../services/AuthService';
import Loader from '../Loader/Loader';

// Routes

export default class NavGuest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      routes: [
        { key: 'searchMap', title: 'Search', icon: 'search'},
        { key: 'profile', title: 'Profile', icon: 'person'},
      ],
      loaded: false,
      isLoggedIn: false
    };
    this.authService = new AuthService();
  }

  componentDidMount() {
    this.authService.isLogged()
      .then(res => {
        this.setState({
          ...this.state,
          loaded: true,
          isLoggedIn: res.data
        })
      })
      .catch(err => {
        this.setState({
          ...this.state,
          loaded: true,
          isLoggedIn: false
        })
        this.props.changeMenu();
      });
  }

  changeTabIndex = (n) => this.setState({
    ...this.state,
    index: n
  })

  ProfileRoutes = () => <ProfileRoute isLoggedIn={this.state.isLoggedIn} changeMenu={(user)=>this.props.changeMenu(user)} changeTabIndex={(n)=>this.changeTabIndex(n)}/>;
  SearchRoutes = () => <SearchRoute isLoggedIn={this.state.isLoggedIn} changeMenu={(user)=>this.props.changeMenu(user)} changeTabIndex={(n)=>this.changeTabIndex(n)}/>;
  
  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    profile: this.ProfileRoutes,
    searchMap: this.SearchRoutes,
  });

  render() {

    return (
      <React.Fragment>
        {
          this.state.loaded ?
            this.state.isLoggedIn ?
              <View>
                <Text>You are not logged!</Text>
              </View>
              :
              <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
              />
            :
            <Loader />
        }
      </React.Fragment>
    );
  }
}

