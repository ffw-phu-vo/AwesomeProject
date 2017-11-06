import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

import global from '../../global';

import { styles } from '../../../styles/styles';

import bannerImage from '../../../media/temp/960x540.png';

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

  renderSwiper() {
    let imageWidth = this.state.screenWidth - 40;
    let imageHeight = (imageWidth / 960) * 540;
    if (this.state.screenWidth > 480) {
      imageWidth = this.state.screenWidth - 80;
      imageHeight = (imageWidth / 960) * 540;
    }
    const { slider } = this.props;
    // console.log('------Slider Component------');
    // console.log(slider);
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
        { slider.map(item => (
          <TouchableOpacity onPress={ this.props.onOpen } key={item.nid}>
            <Image
              source={{ uri: `${global.baseUrl}${item.field_image}` }}
              style={{width: imageWidth,height: imageHeight}}
            />
          </TouchableOpacity>
        )) }
      </Swiper>
    );
  }

  render() {
    return (
      <View style={styles.container} onLayout={this.getNewDimensions}>
        <View style={ styles.blockTitleWrap }>
          <Text style={ styles.blockTitle } >SLIDER</Text>
        </View>
        <View>
          {
           this.state.startswiper === true ?
           this.renderSwiper()
           : null
          }
        </View>
      </View>
    );
  }
}
