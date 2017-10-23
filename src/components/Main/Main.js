import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './Home/Home';
import Contact from './Contact/Contact';

export const Tabbar = TabNavigator(
  {
    ScreenHome: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home'
      }
    },
    ScreenContact: {
      screen: Contact,
      navigationOptions: {
        tabBarLabel: 'Contact'
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: 'ScreenHome',
    swipeEnabled: true,
    tabBarOptions: {
      tinColor: '#000000',
      activeTintColor: '#21144A',
      inactiveTintColor: '#000000',
      // showIcon: true,
      showLabel: true,
      lazyLoad: true,
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      style: {
        backgroundColor: '#EEEEEE',
      }
    }
  }
);

export default class Main extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#3664C9'}}>
        <Text>Welcome to Main!</Text>
        <Tabbar />
      </View>
    );
  }
}
