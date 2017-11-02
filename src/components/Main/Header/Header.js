import ResponsiveStylesheet from "react-native-responsive-stylesheet";
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

import { primaryColor, styles } from '../../../styles/styles';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: Dimensions.get('window').width,
    };

    this.getNewDimensions = this.getNewDimensions.bind(this);
  }

  getNewDimensions(event){
    this.setState({
      screenWidth: Dimensions.get('window').width,
    });
  }

  render() {
    return (
      <View style={headerStyles.wrapHeader} onLayout={this.getNewDimensions}>
        <TouchableOpacity onPress={ this.props.onOpen }>
          <Image source={icMenu} style={headerStyles.iconStyle} />
        </TouchableOpacity>
        <View style={headerStyles.textInputSearchWrap}>
          <TextInput
            style={headerStyles.textInputSearch}
            placeholder="Search..."
            underlineColorAndroid="transparent"
          />
        </View>
        <Image source={icLogoWhite} style={headerStyles.iconLogoStyle} />
      </View>
    );
  }
}

const headerStyles = ResponsiveStylesheet.createSized("min-width", {
  0: {
    wrapHeader: {
      backgroundColor: primaryColor,
      paddingVertical: 20,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    iconStyle: { width: 25, height: 25 },
    iconLogoStyle: { width: 73, height: 25 },
    textInputSearchWrap: {
      flex: 1,
      paddingHorizontal: 10,
      // height: 25,
    },
    textInputSearch: {
      backgroundColor: '#FFF',
      paddingHorizontal: 10,
      paddingTop: 7,
      paddingBottom: 3,
      height: 25,
      lineHeight: 1,
    }
  },
  480: {
    wrapHeader: {
      paddingHorizontal: 20,
    }
  }
});
