import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import ListViewImage from '../../../media/temp/400x600.png';

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
      <View style={ styles.container } onLayout={this.getNewDimensions}>
        <View style={ styles.blockTitleWrap }>
            <Text style={ styles.blockTitle } >LIST VIEW</Text>
        </View>
        <View style={ styles.contentBlock }>
          <View style={ styles.listView }>
            <View
              style={[
                styles.listViewItem,
                {
                  width: imageWidth,
                }
              ]}
            >
              <TouchableOpacity onPress={ this.props.onOpen }>
                <Image
                  source={ListViewImage}
                  style={[
                    styles.imageStyle,
                    {
                      width: imageWidth,
                      height: imageHeight,
                    }
                  ]}
                />
                <Text style={ styles.listViewTitle }>List view item 1</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.listViewItem,
                {
                  width: imageWidth,
                }
              ]}
            >
              <TouchableOpacity onPress={ this.props.onOpen }>
                <Image
                  source={ListViewImage}
                  style={[
                    styles.imageStyle,
                    {
                      width: imageWidth,
                      height: imageHeight,
                    }
                  ]}
                />
                <Text style={ styles.listViewTitle }>List view item 2</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.listViewItem,
                {
                  width: imageWidth,
                }
              ]}
            >
              <TouchableOpacity onPress={ this.props.onOpen }>
                <Image
                  source={ListViewImage}
                  style={[
                    styles.imageStyle,
                    {
                      width: imageWidth,
                      height: imageHeight,
                    }
                  ]}
                />
                <Text style={ styles.listViewTitle }>List view item 1</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.listViewItem,
                {
                  width: imageWidth,
                }
              ]}
            >
              <TouchableOpacity onPress={ this.props.onOpen }>
                <Image
                  source={ListViewImage}
                  style={[
                    styles.imageStyle,
                    {
                      width: imageWidth,
                      height: imageHeight,
                    }
                  ]}
                />
                <Text style={ styles.listViewTitle }>List view item 2</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

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
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  listViewItem: {
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

