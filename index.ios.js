import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  TabBarIOS,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import AppNavigator from './src/navigation/AppNavigator'

{/*<AppNavigator
        initialRoute={{ident: "PeopleIndex"}} />*/}

export default class testapp extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      selectedTab: "tab1"
    }
  }

  render(){
    return (
      <TabBarIOS 
        selectedTab={this.state.selectedTab}>

        <TabBarIOS.Item
          selected={this.state.selectedTab === "tab1"}
          title={`TAB 1`}
          onPress={()=> this.setState({selectedTab: "tab1"})}>
          <AppNavigator initialRoute={{ident: "PeopleIndex"}} />
        </TabBarIOS.Item>

        <TabBarIOS.Item 
          selected={this.state.selectedTab === "tab2"}
          title={`TAB 2`}
          onPress={()=> this.setState({selectedTab: "tab2"})}>
          <AppNavigator 
          initialRoute={{ident: "PersonShow",
                         person: {firstName: 'Joey', lastName: 'Tongay', age: 27} 
                         }} />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }



}

AppRegistry.registerComponent('testapp', () => testapp);
