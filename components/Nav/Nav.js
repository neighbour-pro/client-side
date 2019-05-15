import * as React from 'react';
import { BottomNavigation, Text, Menu } from 'react-native-paper';
import ProfileRoute from '../TabRoutes/ProfileRoute';
import MessageRoute from '../TabRoutes/MessageRoute';
import SearchRoute from '../TabRoutes/SearchRoute';
import HelpRoute from '../TabRoutes/HelpRoute'
import AuthService from '../../services/AuthService';

export default class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 1,
      routes: [
        { key: 'help', title: 'Help', icon: 'help' },
        { key: 'searchMap', title: 'Search', icon: 'search' },
        { key: 'inbox', title: 'Messages', icon: 'chat' },
        { key: 'profile', title: 'Profile', icon: 'person' },
      ],
      loaded: false,
      isLoggedIn: false
    };
    this.authService = new AuthService();
  }

  componentDidMount() {
    this.authService.isLogged()
      .then(res => this.setState({
        ...this.state,
        loaded: true,
        isLoggedIn: res.data
      }))
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

  
  ProfileRoutes = () => <ProfileRoute isLoggedIn={this.state.isLoggedIn} changeMenu={(user)=>this.props.changeMenu(user)} changeTabIndex={(n)=>this.changeTabIndex(n)} />
  MessageRoutes = () => <MessageRoute isLoggedIn={this.state.isLoggedIn} changeMenu={(user)=>this.props.changeMenu(user)} changeTabIndex={(n)=>this.changeTabIndex(n)} />
  SearchRoutes = () => <SearchRoute isLoggedIn={this.state.isLoggedIn} changeMenu={(user)=>this.props.changeMenu(user)} changeTabIndex={(n)=>this.changeTabIndex(n)}/>
  HelpRoutes = () => <HelpRoute isLoggedIn={this.state.isLoggedIn} changeMenu={(user)=>this.props.changeMenu(user)} changeTabIndex={(n)=>this.changeTabIndex(n)}/>;

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    profile: this.ProfileRoutes,
    inbox: this.MessageRoutes,
    searchMap: this.SearchRoutes,
    help: this.HelpRoutes
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

