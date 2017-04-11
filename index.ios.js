import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Layout from './src/pages/layout'
import ViewContainer from './src/components/ViewContainer'
import StatusBarBackground from './src/components/StatusBarBackground'

export default class testapp extends Component {
  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <Text style={ {textAlign: "center"} }>Booyah</Text>
      </ViewContainer>
    );
  }
}

AppRegistry.registerComponent('testapp', () => testapp);
