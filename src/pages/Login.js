import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../components/Logo';
import Form from '../components/Form';
import User_map from '../components/User_map';

export default class Login extends Component <{}>{
    navegar(){
        Actions.Mapa()

    }
      render(){
        return(
          <View style= {styles.container}>
              <Logo/>
              <Form/>
              <TouchableOpacity onPress={this.navegar}><Text> Belen </Text></TouchableOpacity>

          </View>
        )
      }


}


const styles = StyleSheet.create({
  letra: {
    color: '#ffffff',
    fontSize: 18,
  },
  container: {
    backgroundColor : '#616161',
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  registrer_content:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',

  },

  registrer_text:{
    color: '#ffffff',
    fontSize: 18,
  },
  });
