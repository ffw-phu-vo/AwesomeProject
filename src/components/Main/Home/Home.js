import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import HeroBanner from './HeroBanner';
import SlideBlock from './SlideBlock';
import ListViewBlock from './ListViewBlock';

export default class Main extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
        <HeroBanner />
        <SlideBlock />
        <ListViewBlock />
      </ScrollView>
    );
  }
}
