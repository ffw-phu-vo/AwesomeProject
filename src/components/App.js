import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

// StatusBar.setHidden(true);

// export const HomeStack = StackNavigator(
//   {
//     Screen_Home: {
//       screen: Home,
//     },
//     Screen_ChangeInfo: {
//       screen: ChangeInfo,
//     },
//     Screen_Authentication: {
//       screen: Authentication
//     },
//     Screen_OrderHistory: {
//       screen: OrderHistory
//     },
//   },
//   {
//     headerMode: 'none'
//   }
// );

export default class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}
