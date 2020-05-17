import React, { Component } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { StyleSheet, View, Image, Text } from 'react-native';


export default class DocQR extends Component {
    state = {
        data: ''
     }
     componentDidMount = () => {
        fetch('https://woodle.ngrok.io/doctor/5ec04ec9f80f9328703088b0', {
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
    render() {
        return (
        <View style={styles.container}>
        <Image source={require('../assets/avatar.png')} style={styles.img}/>
        <Text style={styles.txt}>{this.state.data.name}</Text>
          <QRCode
            value={this.state.data.id}
            size={200}
            backgroundColor='#EBF5FF'
            color='#03256C'
          />
          <Text style={styles.btn} onPress={() => this.props.navigation.navigate('DocScan')}>Scan Patient's Code</Text>
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

      },
      btn:{
        fontFamily:'Open Sans',
        fontSize:25,
        backgroundColor:'#03256C',
        width:'60%',
        color:'#EEF5FF',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
        marginTop:60,
    }
});     