import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import bannerImage from '../../../media/temp/960x540.png';

const { width } = Dimensions.get('window');

export default class HeroBanner extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity onPress={ this.props.onOpen }>
          <View style={ styles.blockTitleWrap }>
              <Text style={ styles.blockTitle } >BANNER</Text>
          </View>
          <View style={ styles.contentBlock }>
            <Image source={bannerImage} style={ styles.imageStyle } />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

//960 x 540
const imageWidth = width - 40;
const imageHeight = (imageWidth / 960) * 540;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    margin: 10,
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 1,
  },
  blockTitleWrap: {
    marginBottom: 10,
  },
  blockTitle: {
    fontSize: 18,
    color: '#AFAEAF'
  },
  contentBlock: {
    marginBottom: 0,
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth
  }
});
