import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import global from '../global';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      userInfo: {}
    };
  }

  componentDidMount() {
    const { uid } = global.userLogin.current_user;
    // fetch('http://dev-awesomeproject-d8.pantheonsite.io/user/1?_format=json', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(responseJson => {
    //     console.log('---------test 33-----------');
    //     console.log(responseJson);
    // })
    // .catch(err => console.log(err));
  };

  onSignOut() {
    fetch('http://dev-awesomeproject-d8.pantheonsite.io/user/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html',
      }
    })
    .catch(err => console.log(err));
  }

  render() {
    const { wrap, inputStyle, bigButton, buttonText } = styles;
    const { isLoading, userInfo } = this.state;
    if (isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={wrap}>
        <Image
          source={{uri: userInfo.user_picture[0].url}}
          style={{width: userInfo.user_picture[0].width, height: userInfo.user_picture[0].height}}
        />
        <Text>Name: {userInfo.name[0].value}</Text>
        <Text>Mail: {userInfo.mail[0].value}</Text>
        <TouchableOpacity style={bigButton} onPress={this.onSignOut.bind(this)}>
          <Text style={buttonText}>SIGN OUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrap: {
    padding: 10
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
