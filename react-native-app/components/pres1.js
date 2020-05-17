import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class Pres1 extends Component {
    state = {
        data: ''
     }
     componentDidMount = () => {
        fetch('https://woodle.ngrok.io/prescription/0.0.47396', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           this.setState({
              data: responseJson
           })
        })
        .catch((error) => {
           console.error(error);
        });
     }
    render(){
        return (
            <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/medicine.png')} style={styles.logo}/>
                <Text style={styles.txt}>Prescription</Text>
            </View>
            <View style={styles.presbox}>
            <Text style={styles.input}>{this.state.data.drug}</Text>
            <Text style={styles.input}>{this.state.data.dosage}</Text>
            <Text style={styles.input}>{this.state.data.refil}</Text>
            <Text style={styles.input}>{this.state.data.refilRount}</Text>
            <View style={{alignItems:'center'}}><QRCode
            value="0.0.47046"
            size={100}
            backgroundColor='#EBF5FF'
            color='#03256C'
          /></View>
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
  });