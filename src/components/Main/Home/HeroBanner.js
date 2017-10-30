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
    const imageWidth = this.state.screenWidth - 40;
    const imageHeight = (imageWidth / 960) * 540;
    return (
      <View style={ styles.container } onLayout={this.getNewDimensions}>
          <View style={ styles.blockTitleWrap }>
            <Text style={ styles.blockTitle } >BANNER</Text>
          </View>
          <TouchableOpacity onPress={ this.props.onOpen }>
            <View style={ styles.contentBlock }>
              <Image
                source={bannerImage}
                style={[
                  styles.imageStyle,
                  {
                    width: imageWidth,
                    height: imageHeight,
                  }
                ]}
              />
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

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
  imageStyle: {}
});
