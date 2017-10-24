import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Header from './Header/Header';

// import homeIconS from '../../media/appIcon/home.png';
import homeIcon from '../../media/appIcon/home0.png';
// import contactIconS from '../../media/appIcon/contact.png';
import contactIcon from '../../media/appIcon/contact0.png';

const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25,
    margin: 0,
    padding: 0
  },
});

export const Tabbar = TabNavigator(
  {
    ScreenHome: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={homeIcon}
            style={[styles.tabIcon, {tintColor: tintColor}]}
          />
        )
      }
    },
    ScreenContact: {
      screen: Contact,
      navigationOptions: {
        tabBarLabel: 'Contact',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={contactIcon}
            style={[styles.tabIcon, {tintColor: tintColor}]}
          />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: 'ScreenHome',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      tinColor: '#000000',
      activeTintColor: '#112146',
      inactiveTintColor: '#000000',
      showIcon: true,
      showLabel: true,
      lazyLoad: true,
      labelStyle: {
        fontSize: 12,
        padding: 0,
        margin: 0,
      },
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      style: {
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 10,
        paddingTop: 0,
        paddingBottom: 5,
      },
      tabStyle: {
        padding: 0,
        margin: 0
      }
    }
  }
);

export default class Main extends Component {
  openMenu() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <Header onOpen={this.openMenu.bind(this)} />
        <Tabbar />
      </View>
    );
  }
}
