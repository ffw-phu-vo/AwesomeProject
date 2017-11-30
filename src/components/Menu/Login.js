import React, { Component } from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity, StyleSheet, AsyncStorage, Alert } from 'react-native';

import global from '../global';
import getUser from '../../api/getUser';
import saveUser from '../../api/saveUser';
import signIn from '../../api/signIn';

import { styles } from '../../styles/styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        pass: ''
    };
  }

  onSignIn() {
    const { name, pass } = this.state;
    signIn(name, pass)
    .then(responseJson => {
      if (responseJson.csrf_token !== undefined) {
        saveUser(responseJson);
        global.onSignIn(responseJson);
        Alert.alert(
          'Alert Title',
          'Successfully',
          [
            {text: 'OK', onPress: () => this.props.navigation.goBack()},
          ],
          { cancelable: false }
        );
      }
      else {
        Alert.alert(
          'Alert Title',
          responseJson.message,
          [
            {text: 'OK', onPress: () => {}},
          ],
          { cancelable: false }
        );
      }
    })
    .catch(err => {console.log(err)});
  }

  render() {
    const { wrap, inputStyle, bigButton, buttonText } = stylesForm;
    const { name, pass } = this.state;
    return (
      <ScrollView style={wrap}>
        <View>
          <View>
            <TouchableOpacity style={styles.btnArrowBackWrap} onPress={() => this.props.navigation.goBack()}>
              <Text style={[styles.btnArrowBack, styles.textWhite]}>‹</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.blockTitleWrap}>
              <Text style={[styles.blockTitle, styles.textWhite]}>Log in</Text>
            </View>
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
        </View>
      </ScrollView>
    );
  }
}


const stylesForm = StyleSheet.create({
  wrap: {
    padding: 10,
    backgroundColor: '#112146',
    flex: 1
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 20,
    paddingLeft: 30
  },
  bigButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '400'
  }
});
