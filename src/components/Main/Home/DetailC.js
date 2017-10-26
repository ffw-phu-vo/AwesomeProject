import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class DetailC extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F8F7F9'}}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Back"
        />
        <Text style={{fontSize: 24}}>Welcome to Detail C!</Text>
      </View>
    );
  }
}
