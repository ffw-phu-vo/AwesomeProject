import React, { Component } from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

import global from '../global';
import getUser from '../../api/getUser';
import saveUser from '../../api/saveUser';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        pass: ''
    };
  }

  onSignIn() {
    fetch('http://dev-awesomeproject-d8.pantheonsite.io/user/login?_format=json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": "admin",
        "pass": "admin",
      })
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      this.props.navigation.goBack();
      saveUser(responseJson);
      global.onSignIn(responseJson);
    })
    .catch(err => console.log(err));
  }

  render() {
    const { wrap, inputStyle, bigButton, buttonText } = styles;
    const { name, pass } = this.state;
    return (
      <ScrollView style={wrap}>
        <View style={wrap}>
          <TouchableOpacity style={bigButton} onPress={() => this.props.navigation.goBack()}>
            <Text style={buttonText}>Back</Text>
          </TouchableOpacity>
          <TextInput
            style={inputStyle}
            placeholder="Enter your name"
            value={name}
            onChangeText={text => this.setState({ name: text })}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={inputStyle}
            placeholder="Enter your password"
            value={pass}
            onChangeText={text => this.setState({ pass: text })}
            secureTextEntry
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
            <Text style={buttonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    backgroundColor: '#112146',
    flex: 1
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 30
  },
  bigButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Avenir',
    color: '#fff',
    fontWeight: '400'
  }
});
