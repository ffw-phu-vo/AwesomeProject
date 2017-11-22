import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import global from '../../global';

// API
import getListViewDetailView from '../../../api/getListViewDetailView';

// Style
import { styles } from '../../../styles/styles';

export default class DetailB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      listViewDetail: []
    }

    this.getNewDimensions = this.getNewDimensions.bind(this);
  }

  componentDidMount() {
    const { nid } = this.props.navigation.state.params;
    // console.log('------Slider Detail------');
    // console.log(nid);

    // fetch('http://dev-awesomeproject-d8.pantheonsite.io/api/slider')
    // .then((response) => response.json())
    getListViewDetailView(nid)
    .then((responseJson) => {
      // console.log('------Slider Detail------');
      // console.log(responseJson);
      this.setState({
        isLoading: false,
        listViewDetail: responseJson[0],
      });
    })
    .catch((error) => {
      console.error(error);
    });
  };

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
    const { isLoading, listViewDetail } = this.state;
    if (isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
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
              <Text style={styles.blockTitle}>{listViewDetail.title}</Text>
            </View>
            <View style={styles.blockTitleWrap}>
              <Image
                source={{ uri: `${global.baseUrl}${listViewDetail.field_image}` }}
                style={{width: imageWidth, height: imageHeight}}
              />
            </View>
            <Text>{listViewDetail.field_description}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
