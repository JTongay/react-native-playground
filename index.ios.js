import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

import PeopleIndexScreen from './src/pages/PeopleIndexScreen'

export default class testapp extends React.Component {

  render() {
    return (
      <Navigator />
    );
  }
}

const styles = StyleSheet.create({

})

AppRegistry.registerComponent('testapp', () => testapp);
