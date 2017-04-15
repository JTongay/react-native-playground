import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import PeopleIndexScreen from './src/pages/PeopleIndexScreen'
import PersonShowScreen from './src/pages/PersonShow'

export default class testapp extends React.Component {

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
        initialRoute={{ident: "PeopleIndex"}}
        ref = "appNavigator"
        style = {styles.navigatorStyles}
        renderScene = {this._renderScene}
         />
    );
  }
}

const styles = StyleSheet.create({

  navigatorStyles: {

  }

})

AppRegistry.registerComponent('testapp', () => testapp);
