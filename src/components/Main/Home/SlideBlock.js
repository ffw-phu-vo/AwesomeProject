import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

import bannerImage from '../../../media/temp/960x540.png';

const { width } = Dimensions.get('window');

export default class SlideBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startswiper: false,
      screenWidth: Dimensions.get('window').width,
    };

    this.getNewDimensions = this.getNewDimensions.bind(this);
  }

  getNewDimensions(event){
    this.setState({
      screenWidth: Dimensions.get('window').width,
    });
  }

  componentWillMount(){
    setTimeout(() => {this.setState({startswiper: true})}, 500);
  }

  _renderSwiper() {
    const imageWidth = this.state.screenWidth - 40;
    const imageHeight = (imageWidth / 960) * 540;
    return(
      <Swiper
        width={imageWidth}
        height={imageHeight}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={3}
        autoplayDirection={true}
        dotColor="#FFF"
        activeDotColor="#112146"
        nextButton= {<Text style={styles.btnArrowSlide}>›</Text>}
        prevButton= {<Text style={styles.btnArrowSlide}>‹</Text>}
      >
        <View>
          <TouchableOpacity onPress={ this.props.onOpen }>
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
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={ this.props.onOpen }>
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
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={ this.props.onOpen }>
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
          </TouchableOpacity>
        </View>
      </Swiper>
    );
  }

  render() {
    return (
      <View style={styles.container} onLayout={this.getNewDimensions}>
        <View style={ styles.blockTitleWrap }>
          <Text style={ styles.blockTitle } >SLIDER</Text>
        </View>
        <View style={ styles.contentBlock }>
          {
           this.state.startswiper === true ?
           this._renderSwiper()
           : null
          }
        </View>
      </View>
    );
  }
}

// //960 x 540
// const imageWidth = width - 40;
// const imageHeight = (imageWidth / 960) * 540;

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
  imageStyle: {},
  btnArrowSlide: {
    color: '#112146',
    fontSize: 45
  },
  cateTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#112146'
  }
});
