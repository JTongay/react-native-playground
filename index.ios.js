import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Layout from './src/pages/layout'

export default class testapp extends Component {
  render() {
    return (
      <Layout />
    );
  }
}

AppRegistry.registerComponent('testapp', () => testapp);
