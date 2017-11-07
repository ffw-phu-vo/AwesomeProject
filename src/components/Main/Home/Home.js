import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  ActivityIndicator
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// API
import getBannerView from '../../../api/getBannerView';
import getSliderView from '../../../api/getSliderView';

// Style
import { styles } from '../../../styles/styles';

// Components
import HeroBanner from './HeroBanner';
import SlideBlock from './SlideBlock';
import ListViewBlock from './ListViewBlock';
import DetailA from './DetailA';
import DetailB from './DetailB';
import DetailC from './DetailC';

class ContentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      banner: [],
      slider: [],
    }
  }

  componentDidMount() {
    // fetch('http://dev-awesomeproject-d8.pantheonsite.io/api/banner')
    // .then((response) => response.json())
    getBannerView()
    .then((responseJson) => {
      // console.log('------banner------');
      // console.log(responseJson[0]);
      this.setState({
        isLoading: false,
        banner: responseJson[0],
      });
    })
    .catch((error) => {
      console.error(error);
    });

    // fetch('http://dev-awesomeproject-d8.pantheonsite.io/api/slider')
    // .then((response) => response.json())
    getSliderView()
    .then((responseJson) => {
      // console.log('------Slider------');
      // console.log(responseJson);
      this.setState({
        isLoading: false,
        slider: responseJson,
      });
    })
    .catch((error) => {
      console.error(error);
    });
  };

  openScreenDetailA() {
    this.props.navigation.navigate('ScreenDetailA', { banner: this.state.banner });
  };

  openScreenDetailB(nid) {
    this.props.navigation.navigate('ScreenDetailB', { nid: nid });
    // console.log('------Slider Detail------');
    // console.log(nid);
  };

  openScreenDetailC() {
    this.props.navigation.navigate('ScreenDetailC');
  }

  openGoBack() {
    this.props.navigation.goBack();
  }

  render() {
    const { isLoading, banner, slider } = this.state;
    if (isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <ScrollView style={ styles.wrap }>
        <HeroBanner onOpen={this.openScreenDetailA.bind(this)} bannerImage={banner.field_image} />
        <SlideBlock onOpen={this.openScreenDetailB.bind(this)} slider={slider} />
        <ListViewBlock onOpen={this.openScreenDetailC.bind(this)} />
      </ScrollView>
    );
  }
}

export const DetailStack = StackNavigator(
  {
    ScreenContentHome: {
      screen: ContentHome,
    },
    ScreenDetailA: {
      screen: DetailA,
    },
    ScreenDetailB: {
      screen: DetailB,
    },
    ScreenDetailC: {
      screen: DetailC,
    },
  },
  {
    headerMode: 'none'
  }
);

export default class Main extends Component {
  render() {
    return (
      <DetailStack />
    );
  }
}
