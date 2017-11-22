import ResponsiveStylesheet from "react-native-responsive-stylesheet";
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  ListView,
  Button,
  TouchableOpacity
} from 'react-native';

import global from '../../global';

import { white, gray, textColor, primaryColor, styles } from '../../../styles/styles';

import getListViewView from '../../../api/getListViewView';

import listViewImage from '../../../media/temp/400x600.png';

export default class ListViewBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: Dimensions.get('window').width,
      listView: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      page: 0,
      isLoadMoreBtn: true,
    };

    this.getNewDimensions = this.getNewDimensions.bind(this);
    this.onFetchNewData = this.onFetchNewData.bind(this);
  }

  componentDidMount() {
    // fetch('http://dev-awesomeproject-d8.pantheonsite.io/api/slider')
    // .then((response) => response.json())
    getListViewView(0)
    .then((responseJson) => {
      // console.log('------Slider------');
      // console.log(responseJson);
      arr = responseJson;
      this.setState({
        listView: this.state.listView.cloneWithRows(arr),
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  onFetchNewData() {
    var newPage = this.state.page + 1;
    // fetch('http://dev-awesomeproject-d8.pantheonsite.io/api/slider')
    // .then((response) => response.json())
    getListViewView(newPage)
    .then((responseJson) => {
      // console.log('------Slider------');
      // console.log(responseJson);
      if (responseJson.length != 0) {
        arr = arr.concat(responseJson);
        // console.log('------Slider test------');
        // console.log(arr);
        this.setState({
          listView: this.state.listView.cloneWithRows(arr),
          page: newPage,
        });
      }
      else {
        this.setState({
          isLoadMoreBtn: false,
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getNewDimensions(event){
    this.setState({
      screenWidth: Dimensions.get('window').width,
    });
  }

  render() {
    //400 x 600
    let imageWidth = (this.state.screenWidth - 50) / 2;
    let imageHeight = (imageWidth / 400) * 600;
    if (this.state.screenWidth > 480) {
      imageWidth = (this.state.screenWidth - 100) / 2;
      imageHeight = (imageWidth / 400) * 600;
    }
    const { isLoadMoreBtn } = this.state;
    let btnLoadMore = null;
    if (isLoadMoreBtn) {
      btnLoadMore = <TouchableOpacity onPress={this.onFetchNewData}>
                      <Text style={listViewstyles.btnLoadMore}>Load more</Text>
                    </TouchableOpacity>
    }

    return (
      <View
        style={[styles.container, listViewstyles.container]}
        onLayout={this.getNewDimensions}
      >
        <View style={ styles.blockTitleWrap }>
          <Text style={ styles.blockTitle } >LIST VIEW</Text>
        </View>
        <View style={ styles.contentBlock }>
          <ListView
            contentContainerStyle={listViewstyles.listView}
            dataSource={this.state.listView}
            renderRow={(rowData) =>
              <View style={[listViewstyles.listViewItem, {width: imageWidth}]}>
                <TouchableOpacity onPress={(nid) => this.props.onOpen(rowData.nid)}>
                  <Image
                    source={{ uri: `${global.baseUrl}${rowData.field_image}` }}
                    style={{width: imageWidth, height: imageHeight}}
                  />
                  <Text style={listViewstyles.listViewTitle}>{rowData.title}</Text>
                </TouchableOpacity>
              </View>
            }
          />
          {btnLoadMore}
        </View>
      </View>
    );
  }
}

const listViewstyles = ResponsiveStylesheet.createSized("min-width", {
  0: {
    container: {
      paddingBottom: 0,
    },
    listView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    listViewItem: {
      flexDirection: 'row',
      marginBottom: 10,
      borderBottomWidth: 0,
      shadowColor: gray,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 0,
      elevation: 1
    },
    listViewTitle: {
      color: textColor,
      paddingHorizontal: 10,
      paddingVertical: 8,
      fontSize: 16,
    },
    btnLoadMore: {
      color: white,
      backgroundColor: primaryColor,
      padding: 10,
      fontSize: 16,
      textAlign: 'center',
    }
  },
  480: {
    listViewItem: {
      marginBottom: 20,
    }
  }
});

