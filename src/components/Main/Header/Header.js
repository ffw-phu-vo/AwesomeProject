import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  StyleSheet
} from 'react-native';

import icLogoWhite from '../../../media/appIcon/logo_white.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.row1}>
          <TouchableOpacity onPress={ this.props.onOpen }>
            <Image source={icMenu} style={styles.iconStyle} />
          </TouchableOpacity>
          <Image source={icLogoWhite} style={styles.iconLogo} />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 7.5,
        backgroundColor: '#112146',
        padding: 10,
        justifyContent: 'space-around'
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: {
        height: height / 23,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingVertical: 0
    },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 25, height: 25 },
    iconLogo: { width: 73, height: 25 }
});
