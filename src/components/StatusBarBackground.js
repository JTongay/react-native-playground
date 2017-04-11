'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class StatusBarBackground extends React.Component {

  render(){
    return (
      <View style={[styles.statusBarBackground, {backgroundColor: this.props.backgroundColor}]}>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  statusBarBackground: {
    height: 20,
    backgroundColor: "white"
  }

})

export default StatusBarBackground
