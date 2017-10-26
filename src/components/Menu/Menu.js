import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Menu extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F8F7F9'}}>
        <Text style={{fontSize: 24}}>Welcome to Menu</Text>
      </View>
    );
  }
}

