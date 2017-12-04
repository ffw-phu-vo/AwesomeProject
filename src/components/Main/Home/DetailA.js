import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  WebView
} from 'react-native';
import HTMLView from 'react-native-htmlview';

import global from '../../global';

import { styles, stylesHtml } from '../../../styles/styles';

export default class DetailA extends Component {
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
    let imageWidth = this.state.screenWidth - 40;
    let imageHeight = (imageWidth / 960) * 540;
    if (this.state.screenWidth > 480) {
      imageWidth = this.state.screenWidth - 80;
      imageHeight = (imageWidth / 960) * 540;
    }
    const { banner } = this.props.navigation.state.params;
    const fieldDescription = banner.field_description.replace(/\n/g, '');
    const fieldBody = banner.body.replace(/\n/g, '');
    return (
      <ScrollView style={ styles.wrap }>
        <View style={styles.container} onLayout={this.getNewDimensions}>
          <View>
            <TouchableOpacity style={styles.btnArrowBackWrap} onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.btnArrowBack}>‹</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.blockTitleWrap}>
              <Image
                source={{ uri: `${global.baseUrl}${banner.field_image}` }}
                style={{width: imageWidth, height: imageHeight}}
              />
            </View>
            <View style={styles.blockTitleWrap}>
              <Text style={styles.blockTitle}>{banner.title}</Text>
            </View>
            <HTMLView
              value={fieldDescription}
              addLineBreaks={false}
              stylesheet={stylesHtml}
            />
            <HTMLView
              value={fieldBody}
              addLineBreaks={false}
              stylesheet={stylesHtml}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
