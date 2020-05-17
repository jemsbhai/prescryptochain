import React, { Component } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { StyleSheet, View, Image, Text } from 'react-native';


export default class DocQR extends Component {

    render() {
        return (
        <View style={styles.container}>
        <Image source={require('../assets/avatar.png')} style={styles.img}/>
        <Text style={styles.txt}>Dr. John Doe</Text>
          <QRCode
            value="Doctor's Key"
            size={200}
            backgroundColor='#EBF5FF'
            color='#03256C'
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
    },
    img: {
        flex: 0.2,
        resizeMode: 'contain',
        alignContent: 'flex-start',
        width: '20%',
        height: '20%',
        marginLeft: 20,
        marginTop: 100,
      },
      txt:{
          fontFamily:"Open Sans",
          fontSize: 30,
          color: '#2541B2',
          marginBottom: 80,

      }
});     