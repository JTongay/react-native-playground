import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Layout from './src/pages/layout'
import ViewContainer from './src/components/ViewContainer'

export default class testapp extends Component {
  render() {
    return (
      <ViewContainer>
        <Layout />
      </ViewContainer>
    );
  }
}

AppRegistry.registerComponent('testapp', () => testapp);
