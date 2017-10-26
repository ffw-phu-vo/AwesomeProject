import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Main from './Main/Main';
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
