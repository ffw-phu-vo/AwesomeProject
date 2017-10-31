import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { gray, textColor, styles } from '../../../styles/styles';

import listViewImage from '../../../media/temp/400x600.png';

export default class ListViewBlock extends Component {
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
    //400 x 600
    const imageWidth = (this.state.screenWidth - 50) / 2;
    const imageHeight = (imageWidth / 400) * 600;

    return (
      <View style={[styles.container, listViewstyles.container]} onLayout={this.getNewDimensions}>
        <View style={ styles.blockTitleWrap }>
          <Text style={ styles.blockTitle } >LIST VIEW</Text>
        </View>
        <View style={ styles.contentBlock }>
          <View style={ listViewstyles.listView }>
            <View style={[listViewstyles.listViewItem, {width: imageWidth}]}>
              <TouchableOpacity onPress={ this.props.onOpen }>
                <Image
                  source={listViewImage}
                  style={{width: imageWidth, height: imageHeight}}
                />
                <Text style={listViewstyles.listViewTitle}>List view item 1</Text>
              </TouchableOpacity>
            </View>
            <View style={[listViewstyles.listViewItem, {width: imageWidth}]}>
              <TouchableOpacity onPress={ this.props.onOpen }>
                <Image
                  source={listViewImage}
                  style={{width: imageWidth, height: imageHeight}}
                />
                <Text style={listViewstyles.listViewTitle}>List view item 2</Text>
              </TouchableOpacity>
            </View>
            <View style={[listViewstyles.listViewItem, {width: imageWidth}]}>
              <TouchableOpacity onPress={ this.props.onOpen }>
                <Image
                  source={listViewImage}
                  style={{width: imageWidth, height: imageHeight}}
                />
                <Text style={listViewstyles.listViewTitle}>List view item 3</Text>
              </TouchableOpacity>
            </View>
            <View style={[listViewstyles.listViewItem, {width: imageWidth}]}>
              <TouchableOpacity onPress={ this.props.onOpen }>
                <Image
                  source={listViewImage}
                  style={{width: imageWidth, height: imageHeight}}
                />
                <Text style={listViewstyles.listViewTitle}>List view item 4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const listViewstyles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  listViewItem: {
    marginBottom: 10,
    borderBottomWidth: 0,
    shadowColor: gray,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 1,
  },
  listViewTitle: {
    color: textColor,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  }
});

