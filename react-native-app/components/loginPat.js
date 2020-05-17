import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class LoginPat extends Component {
    render(){
        return (
            <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txt}>Login</Text>
            </View>
            <Image source={require('../assets/login.png')} style={styles.img}/>
            <View style={styles.presbox}>
            <TextInput style={styles.input} defaultValue='Username'></TextInput>
            <TextInput style={styles.input} secureTextEntry={true}>Password</TextInput>

                <Text style={styles.btn} onPress={() => this.props.navigation.navigate('PatQr')}>Submit</Text>
            </View>
            
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
      marginBottom:20,
      marginTop:50,
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