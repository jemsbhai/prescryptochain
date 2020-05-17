import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class DocMenu extends Component {
    render(){
        return (
            <View style={styles.container}>
            <Image source={require('../assets/menubg.png')} style={styles.bg}/>
            
            <Text style={styles.txt} onPress={() => this.props.navigation.navigate('DocQr')}>Profile</Text>
            <Text style={styles.txt} onPress={() => this.props.navigation.navigate('DocScan')}>Patient</Text>
            <TouchableOpacity style={styles.img} onPress={() => this.props.navigation.navigate('DocQr')}><Image source={require('../assets/x.png')} style={{flex:0.2, resizeMode:'contain', marginTop:50}}/></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1768AC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt:{
        fontFamily:'Open Sans',
        fontSize:50,
        color:'#EBF5FF',
        marginBottom:20,
    },
    img: {
      },
    bg: {
        flex:0.8,
        resizeMode:'contain',
        alignSelf:'center',
        marginBottom:70,
        marginTop:40,
    }
  });
  