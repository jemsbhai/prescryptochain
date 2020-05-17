import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Prescription extends Component {

    constructor() {
        super();
        this.state = { 
          drug: '',
          dosage: '', 
          refil: '',
          refilRount:'',
        }
      }
      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }

 prescription= async () =>{
        fetch('https://woodle.ngrok.io/prescription', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "doctor": "5ec04ec9f80f9328703088b0",
                "patient" : "5ec04ed9f80f9328703088b1",
                "prescription": 
                {
                    "drug": this.state.drug,
                    "dosage": this.state.dosage,
                    "refil": this.state.refil,
                    "refilRount": this.state.refilRount
                }
            })
      })
          .then((response) => response.json())
          .then((responseJson) => {
       console.log(responseJson);
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
            <Text style={styles.label}>Drug</Text><TextInput style={styles.input} value={this.state.drug} onChangeText={(val) => this.updateInputVal(val, 'drug')}></TextInput>
            <Text style={styles.label}>Dosage</Text><TextInput style={styles.input} value={this.state.dosage} onChangeText={(val) => this.updateInputVal(val, 'dosage')}></TextInput>
            <Text style={styles.label}>Refill</Text><TextInput style={styles.input} value={this.state.refil} onChangeText={(val) => this.updateInputVal(val, 'refil')}></TextInput>
            <Text style={styles.label}>Refill Count</Text><TextInput style={styles.input} value={this.state.refilRount} onChangeText={(val) => this.updateInputVal(val, 'refilRount')}></TextInput>

                <TouchableOpacity onPress={() => this.prescription()}><Text style={styles.btn} >Submit</Text></TouchableOpacity>
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
      flex: 0.25,
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
    label:{
        fontFamily:'Open Sans',
        fontSize: 15,
        color:'#2541B2',
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
        marginTop:0,
    }
  });