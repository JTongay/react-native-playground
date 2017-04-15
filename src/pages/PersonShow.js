import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator,
  TouchableOpacity
} from 'react-native';
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

export default class PersonShowScreen extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props);
    return (
      <ViewContainer style={{backgroundColor: "dodgerblue"}}>
        <StatusBarBackground />
        <Text style={styles.personName}>{`${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`}</Text>
      </ViewContainer>
    );
  }


}

const styles = StyleSheet.create({
  personName: {
    marginLeft: 25
  },
})
