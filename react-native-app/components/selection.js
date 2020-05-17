import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class Selection extends Component {
    render(){
        return (
            <View style={styles.container}>
            <Text style={{fontFamily: "Open Sans" ,fontSize: 40, alignSelf: "flex-start", marginTop: 60, marginLeft: 20, color: "#03256C"}}>I am a</Text>
            <Image source={require('../assets/doctors.png')} style={styles.img}/>
            <Text style={{fontFamily: "Open Sans" ,fontSize: 30, alignSelf: "center", color: "#03256C", marginTop: -5}} onPress={() => this.props.navigation.navigate('DocQr')}>Doctor</Text>
            <Image source={require('../assets/patient.png')} style={styles.img}/>
            <Text style={{fontFamily: "Open Sans" ,fontSize: 30, alignSelf: "center", color: "#03256C"}}onPress={() => this.props.navigation.navigate('PatQr')}>Patient</Text>
            <Image source={require('../assets/pharmacist.png')} style={styles.img}/>
            <Text style={{fontFamily: "Open Sans" ,fontSize: 30, alignSelf: "center", color: "#03256C", marginBottom: 70}}onPress={() => this.props.navigation.navigate('Login')}>Pharmacist</Text>
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
    flex: 0.3,
    resizeMode: 'contain',
    width: '30%',
  }
});
