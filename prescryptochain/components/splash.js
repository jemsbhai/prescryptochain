import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Splash extends Component{
    render(){
        return(
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.img}/>
            <Button
                onPress={() => this.props.navigation.navigate('Selection')}
                title="Get Started"
                color="#03256C"
            />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBF5FF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      flex: 1,
      resizeMode: 'contain',
      width: '30%',
    }
  });