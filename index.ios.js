import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import Layout from './src/pages/layout'
import ViewContainer from './src/components/ViewContainer'
import StatusBarBackground from './src/components/StatusBarBackground'

const people = [
  {
    firstName: 'Joey',
    lastName: 'Tongay',
    age: 27
  },
  {
    firstName: 'Erin',
    lastName: 'Miller',
    age: 28
  },
  {
    firstName: 'Beans',
    lastName: 'Vinny',
    age: 4
  }
]

export default class testapp extends React.Component {

  constructor(props){
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }
  }

  render() {

    return (
      <ViewContainer>
        <StatusBarBackground backgroundColor={"skyblue"} />
        <Text style={ {textAlign: "center"} }>Booyah</Text>
        <ListView
          style = {{marginTop: 100}}
          dataSource = {this.state.peopleDataSource}
          renderRow = {(person)=> { return this._renderPersonRow(person) }}
           />
      </ViewContainer>
    );
  }

  _renderPersonRow(person){
    return (
      <View style={styles.personRow}>
        <Text style={styles.personName}>{person.firstName}</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  personRow: {
    justifyContent: "center"
  },
  personName: {

  }
})

AppRegistry.registerComponent('testapp', () => testapp);
