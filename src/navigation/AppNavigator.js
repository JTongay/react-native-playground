'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import PeopleIndexScreen from '../pages/PeopleIndexScreen'
import PersonShowScreen from '../pages/PersonShow'

export default class AppNavigator extends React.Component {

  _renderScene(route, navigator){
    var globalNavigatorProps = { navigator }
    switch(route.ident){
      case "PeopleIndex":
        return (
          <PeopleIndexScreen {...globalNavigatorProps} />
        )
      case "PersonShow":
        return (
          <PersonShowScreen {...globalNavigatorProps} person={route.person} />
        )
      default:
        return (
          <Text>You Fucked Up!!</Text>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref = "appNavigator"
        style = {styles.navigatorStyles}
        renderScene = {this._renderScene}
        configureScene={(route)=> ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
        })}
         />
    );
  }
}

const styles = StyleSheet.create({

  navigatorStyles: {

  }

})
