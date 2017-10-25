import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';

import bannerImage from '../../../media/temp/little.jpg';

const { width } = Dimensions.get('window');

export default class SlideBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startswiper: false,
    };
  }

  componentWillMount(){
    setTimeout(() => {this.setState({startswiper: true})}, 500);
  }

  _renderSwiper() {
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
          <Image source={bannerImage} style={ styles.imageStyle }>
            <Text style={styles.cateTitle}>Slide 1</Text>
          </Image>
        </View>
        <View>
          <Image source={bannerImage} style={ styles.imageStyle }>
            <Text style={styles.cateTitle}>Slide 2</Text>
          </Image>
        </View>
        <View>
          <Image source={bannerImage} style={ styles.imageStyle }>
            <Text style={styles.cateTitle}>Slide 3</Text>
          </Image>
        </View>
      </Swiper>
    );
  }

  render() {
    return (
      <View style={ styles.container }>
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

//933 x 465
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

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
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnArrowSlide: {
    color: '#112146',
    fontSize: 45
  },
  cateTitle: {
    fontSize: 20,
    fontFamily: 'Avenir',
    color: '#9A9A9A'
  }
});
