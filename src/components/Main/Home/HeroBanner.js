import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import global from '../../global';

import { styles } from '../../../styles/styles';

export default class HeroBanner extends Component {
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
    //960 x 540
    let imageWidth = this.state.screenWidth - 40;
    let imageHeight = (imageWidth / 960) * 540;
    if (this.state.screenWidth > 480) {
      imageWidth = this.state.screenWidth - 80;
      imageHeight = (imageWidth / 960) * 540;
    }
    const { bannerImage } = this.props;

    return (
      <View style={ styles.container } onLayout={this.getNewDimensions}>
        <View style={ styles.blockTitleWrap }>
          <Text style={ styles.blockTitle } >BANNER</Text>
          <Text>{imageWidth}</Text>
          <Text>{imageHeight}</Text>
        </View>
        <TouchableOpacity onPress={ this.props.onOpen }>
          <View>
            <Image
              source={{ uri: `${global.baseUrl}${bannerImage}` }}
              style={{width: imageWidth, height: imageHeight}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
