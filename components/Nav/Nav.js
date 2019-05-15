import * as React from 'react';
import { BottomNavigation, Text, Menu } from 'react-native-paper';
import Login from '../Login/Login'
import Rating from '../Rating/Rating'
import Profile from '../Profiles/ClientFinal'
// import ProList from '../Prolist/ProListView'
import Map from '../Test/Test3'
import Signup from '../Signup/Signup'
import ProfileRoute from '../TabRoutes/ProfileRoute';
import MessageRoute from '../TabRoutes/MessageRoute';
import SearchRoute from '../TabRoutes/SearchRoute';
import HelpRoute from '../TabRoutes/HelpRoute'


// Routes

const MapRoute = () => <Map/>;

const LoginRoute = () => <Login/>;
const SignupRoute = () => <Signup />;
const ProListRoute = () => 'Hola mundo';
const AddReviewRoute = () => 'Hola add review';
const ReviewListRoute = () => 'Hola review list';

const InboxRoute = () => <Rating />;
const UniqueChatRoute = () => 'Unique Chat Rute';


const ProfileRoutes = () => <ProfileRoute />;
const MessageRoutes = () => <MessageRoute />;
const SearchRoutes = () => <SearchRoute/>;
//


export default class Nav extends React.Component {
  state = {
    index: 1,
    routes: [
      { key: 'help', title: 'Help', icon: 'help' },
      { key: 'searchMap', title: 'Search', icon: 'search' },
      { key: 'inbox', title: 'Messages', icon: 'chat' },
      { key: 'profile', title: 'Profile', icon: 'person' },
    ],
  };
  
  HelpRoutes(){
    return <HelpRoute/>;
  }

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    profile: ProfileRoutes,
    inbox: MessageRoutes,
    searchMap: SearchRoutes,
    help: this.HelpRoutes
  });

  /*
   signup: SignupRoute,
    login: LoginRoute,
    help: LoginRoute,
    inbox: InboxRoute,
    uniqueChat: UniqueChatRoute,
    profile: ProfileRoute,
    searchMap: MapRoute,
    searchList: ProListRoute,
    addReview: AddReviewRoute,
    reviewList: ReviewListRoute,
  */

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

