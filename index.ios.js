import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

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
      <TouchableOpacity style={styles.personRow} onPress={(event)=> console.log(person)}>
        <Text style={styles.personName}>{`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" style={styles.personMoreIcon} />
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 50
  },
  personName: {
    marginLeft: 25
  },
  personMoreIcon: {
    color: "green",
    height: 20,
    width: 20,
    marginRight: 25
  }
})

AppRegistry.registerComponent('testapp', () => testapp);
