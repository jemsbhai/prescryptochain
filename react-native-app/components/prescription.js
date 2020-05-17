import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Prescription extends Component {
    render(){
        return (
            <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/medicine.png')} style={styles.logo}/>
                <Text style={styles.txt}>Prescription</Text>
            </View>
            <View style={styles.presbox}>
            <TextInput style={styles.input}>Medication</TextInput>
            <TextInput style={styles.input}>Dosage</TextInput>
            <TextInput style={styles.input}>Refill</TextInput>
            <TextInput style={styles.input}>Refill Count</TextInput>

                <Text style={styles.btn}>Submit</Text>
            </View>
            <Image source={require('../assets/pres.png')} style={styles.img}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#EBF5FF',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    img: {
      flex: 0.3,
      resizeMode: 'contain',
      alignSelf:'center',
      marginBottom:20
    },
    txt: {
        fontFamily:'Open Sans',
        fontSize: 35,
        color: '#EBF5FF',
        alignSelf:'center',
    },
    presbox:{
        flex:0.65,
        height:'70%',
        width:'90%',
        marginTop:30,
        marginBottom:50,
        backgroundColor:'#EDF5FF',
        borderRadius:20,
        alignSelf:'center'
    },
    logo:{
        flex:0.2,
        resizeMode:'contain',
        alignSelf:'center',
    },
    header:{
        flex:0.2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#03256C',
        width:'100%',
    },
    input:{
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        padding:15,
        fontFamily:'Open Sans',
        fontSize: 15,
        color:'#2541B2',
        marginBottom:20
    },
    btn:{
        fontFamily:'Open Sans',
        fontSize:25,
        backgroundColor:'#03256C',
        width:'27.5%',
        color:'#EEF5FF',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
        marginTop:20,
    }
  });