import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Login from './Login';

import { DrawerNavigator } from 'react-navigation';

import getUser from '../../api/getUser';
import saveUser from '../../api/saveUser';
import global from '../global';

export class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    global.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(user) {
    if (user != null) {
      const { uid } = user.current_user;
      fetch('http://dev-awesomeproject-d8.pantheonsite.io/user/'+ uid + '?_format=json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ user: responseJson });
        console.log('-------test-------');
        console.log(responseJson);
      })
      .catch(err => console.log(err));
    }
    else {
      this.setState({ user: null });
    }
  }

  onSignOut() {
    fetch('http://dev-awesomeproject-d8.pantheonsite.io/user/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html',
      }
    })
    .then(() => {
      saveUser(null);
      global.onSignIn(null);
    })
    .catch(err => console.log(err));
  }

  render() {
    const { wrap, inputStyle, bigButton, buttonText } = styles;
    const { user } = this.state;

    let mainMenuMK = '';
    if (user == null) {
      mainMenuMK = (
        <View>
          <TouchableOpacity style={bigButton} onPress={() => this.props.navigation.navigate('ScreenLogin')}>
            <Text style={buttonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={bigButton} onPress={() => {}}>
            <Text style={buttonText}>Create new account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={bigButton} onPress={this.onSignOut.bind(this)}>
            <Text style={buttonText}>SIGN OUT</Text>
          </TouchableOpacity>
        </View>
      );
    }
    else {
      mainMenuMK = (
        <View>
          <Image
            source={{uri: user.user_picture[0].url}}
            style={{width: 100, height: 100}}
          />
          <Text style={buttonText}>Name: {user.name[0].value}</Text>
          <Text style={buttonText}>Mail: {user.mail[0].value}</Text>
          <TouchableOpacity style={bigButton} onPress={this.onSignOut.bind(this)}>
            <Text style={buttonText}>SIGN OUT</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <ScrollView style={wrap}>
      {mainMenuMK}
      </ScrollView>
    );
  }
}

const MenuDrawer = DrawerNavigator(
  {
    ScreenMenu: {
      screen: MainMenu,
    },
    ScreenLogin: {
      screen: Login,
    },
  },
  {
    drawerPosition: 'left',
  }
);

export default class Menu extends Component {
  render() {
    return (
      <MenuDrawer />
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
    color: '#fff',
    fontWeight: '400'
  }
});
