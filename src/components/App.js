import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

import Menu from './Menu/Menu';

import { DrawerNavigator } from 'react-navigation';

export const SideMenuBar = DrawerNavigator(
  {
    ScreenTabbar: {
      screen: Main,
    }
  },
  {
    drawerWidth: Dimensions.get('window').width - 60,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
  }
);

export default class App extends Component {
  render() {
    return (
      <SideMenuBar />
    );
  }
}
