import React, { Component } from 'react';
import { Text, ScrollView, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { styles } from '../../../styles/styles';

import HeroBanner from './HeroBanner';
import SlideBlock from './SlideBlock';
import ListViewBlock from './ListViewBlock';
import DetailA from './DetailA';
import DetailB from './DetailB';
import DetailC from './DetailC';

class ContentHome extends Component {
  openScreenDetailA() {
    this.props.navigation.navigate('ScreenDetailA');
  };

  openScreenDetailB() {
    this.props.navigation.navigate('ScreenDetailB');
  };

  openScreenDetailC() {
    this.props.navigation.navigate('ScreenDetailC');
  }

  openGoBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ScrollView style={ styles.wrap }>
        <HeroBanner onOpen={this.openScreenDetailA.bind(this)} />
        <SlideBlock onOpen={this.openScreenDetailB.bind(this)} />
        <ListViewBlock onOpen={this.openScreenDetailC.bind(this)} />
      </ScrollView>
    );
  }
}

export const DetailStack = StackNavigator(
  {
    ScreenContentHome: {
      screen: ContentHome,
    },
    ScreenDetailA: {
      screen: DetailA,
    },
    ScreenDetailB: {
      screen: DetailB,
    },
    ScreenDetailC: {
      screen: DetailC,
    },
  },
  {
    headerMode: 'none'
  }
);

export default class Main extends Component {
  render() {
    return (
      <DetailStack />
    );
  }
}
