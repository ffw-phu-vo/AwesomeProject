import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';

import ListViewImage from '../../../media/temp/sp1.jpeg';

export default class ListViewBlock extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.blockTitleWrap }>
            <Text style={ styles.blockTitle } >LIST VIEW</Text>
        </View>
        <View style={ styles.contentBlock }>
          <View style={ styles.listView }>
            <View style={ styles.listViewItem }>
              <Image source={ListViewImage} style={ styles.imageStyle } />
              <Text style={ styles.listViewTitle }>List view item 1</Text>
            </View>
            <View style={ styles.listViewItem }>
              <Image source={ListViewImage} style={ styles.imageStyle } />
              <Text style={ styles.listViewTitle }>List view item 2</Text>
            </View>
            <View style={ styles.listViewItem }>
              <Image source={ListViewImage} style={ styles.imageStyle } />
              <Text style={ styles.listViewTitle }>List view item 1</Text>
            </View>
            <View style={ styles.listViewItem }>
              <Image source={ListViewImage} style={ styles.imageStyle } />
              <Text style={ styles.listViewTitle }>List view item 2</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const { width } = Dimensions.get('window');
//452 x 361
const ListViewImageWidth = (width - 50) / 2;
const ListViewImageHeight = (ListViewImageWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    margin: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
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
    height: ListViewImageHeight,
    width: ListViewImageWidth
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  listViewItem: {
    width: ListViewImageWidth,
    marginBottom: 10,
    borderBottomWidth: 0,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 1,
  },
  listViewTitle: {
    color: '#D3D3CF',
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  }
});

