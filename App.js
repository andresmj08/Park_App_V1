/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import Login from './src/pages/Login';
import User_map from './src/components/User_map';
import Routes from './src/pages/Routes';

export default    class App extends Component <{}> {
  render() {
    return (
      <View style= {styles.container}>
        <StatusBar barStyle= 'light-content'  backgroundColor= '#ffd600'/>
        <Login/>

      </View>
      )

  }
}

 class Map_user extends Component <{}> {
  render() {
    return (
      <View style= {styles.container}>
        <StatusBar barStyle= 'light-content'  backgroundColor= '#ffd600'/>
        <User_map/>

      </View>
      )

  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor : '#616161',
    flex : 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  letra: {
    color: '#ffffff',
    fontSize: 18,
  },



  });
