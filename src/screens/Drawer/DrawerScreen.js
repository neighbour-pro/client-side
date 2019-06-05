import {createDrawerNavigator} from 'react-navigation';
import Drawer from '../../components/Drawer/Drawer';
import {Dimensions} from 'react-native';

export default createDrawerNavigator({
  Drawer: {
    screen: () => null
  }
},
{
  drawerWidth: Dimensions.get('window').width*.9,
  drawerPosition: 'right',
  contentComponent: Drawer,
  navigationOptions: {
    drawerLockMode: 'unlocked',
  }
})