import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Main from './Main/Main';
import Menu from './Menu/Menu';

import { DrawerNavigator } from 'react-navigation';

export const SideMenuBar = DrawerNavigator(
  {
    ScreenTabbar: {
      screen: Main,
    }
  },
  {
    drawerWidth: Dimensions.get('window').width - 60,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
  }
);

export default class App extends Component {
  render() {
    return (
      <SideMenuBar />
    );
  }
}

// import React, { Component } from 'react';
// import { ActivityIndicator, ListView, Text, View } from 'react-native';

// export default class Movies extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount() {
//     return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.setState({
//           isLoading: false,
//           dataSource: ds.cloneWithRows(responseJson.movies),
//         }, function() {
//           // do something with new state
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View style={{flex: 1, paddingTop: 20}}>
//           <ActivityIndicator />
//         </View>
//       );
//     }

//     return (
//       <View style={{flex: 1, paddingTop: 20}}>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
//         />
//       </View>
//     );
//   }
// }
