/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Adobe } from 'react-native-adobe-analytics';
import { StackNavigator } from 'react-navigation';

const additionalData = {
  'screen.category.l1': 'myproximus',
  'screen.category.l2': 'mybill',
  'screen.category.l3': 'landing',
  'app.language': 'nl',
  'app.name': 'myproximus',
  'app.version': '1.1.3',
  'user.customer_id': '67786786',
  'user.gid': '123456778',
  'user.segment': 'res',
};

class HomeScreen extends React.Component {
  
  render() {
    Adobe.init('ADBMobileConfig');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Send event"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    Adobe.trackState('DetailsScreen', additionalData);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Second Screen</Text>
        <Text>Press back button to send an event again</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}