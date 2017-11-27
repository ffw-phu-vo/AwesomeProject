import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Main from './Main/Main';
import Menu from './Menu/Menu';

import getUser from '../api/getUser';
import saveUser from '../api/saveUser';
import global from './global';

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
  constructor(props) {
    super(props);
    // saveUser(null);
  }

  componentDidMount() {
    getUser()
    .then(responseJson => {
      console.log('-------test2-------');
      console.log(responseJson);
      if (responseJson != null) {
        global.onSignIn(responseJson);
      }
    });
  }

  render() {
    return (
      <SideMenuBar />
    );
  }
}

// import React, { Component } from 'react';
// import { ActivityIndicator, ListView, Text, View } from 'react-native';
// import getBannerView from '../api/getBannerView';
// import global from './global';

// export default class Movies extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       dataSource: [],
//     }
//   }

//   componentDidMount() {
//     getBannerView()
//     .then((responseJson) => {
//       this.setState({
//         isLoading: false,
//         dataSource: responseJson[0],
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   }

//   render() {
//     const { dataSource } = this.state;
//     if (this.state.isLoading) {
//       return (
//         <View style={{flex: 1, paddingTop: 20}}>
//           <ActivityIndicator />
//         </View>
//       );
//     }

//     return (
//       <View style={{flex: 1, paddingTop: 20}}>
//         <Text>{dataSource.title}</Text>
//       </View>
//     );
//   }
// }
