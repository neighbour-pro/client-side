import {createBottomTabNavigator} from 'react-navigation';
import SearchScreen from '../screens/Search/SearchScreen';
import MessageScreen from '../screens/Messages/MessagesScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

export default createBottomTabNavigator({
  Search: SearchScreen,
  Message: MessageScreen,
  Profile: ProfileScreen
});