import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';


export default class Logo extends Component <{}>{
      render(){
        return(
          <View style={styles.container}>
                <Image style={styles.ubicacion_logo} source= {require('./imagenes/logo.png')}/>
                <Text style={styles.Anuncio}> Bienvenido a Parq Pereira! </Text>
                <Text style={styles.perfil}> Administrador de Sitio </Text>
          </View>
        )
      }


}


const styles = StyleSheet.create({
  ubicacion_logo:{
    width: 50,
    height:100,
  },
  container: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Anuncio: {
    marginVertical: 15,
    fontSize: 25,
    color: '#ffd600'
  },
  perfil: {
    marginVertical: 5,
    fontSize: 15,
    color: '#eeeeee'
  },
  });
