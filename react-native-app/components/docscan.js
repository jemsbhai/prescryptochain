import * as React from 'react';
import { Image,Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

export default class Scan extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    data: '',
  };

  async componentDidMount() {
    this.getPermissionsAsync();
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
  

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          justifyContent:'flex-start',
          backgroundColor: '#EBF5FF',
        }}>
        <View style={{flex: 0.2, flexDirection: 'row',backgroundColor:'#2541B2',justifyContent:"flex-start"}}>
        <TouchableOpacity style={styles.img} onPress={() => this.props.navigation.navigate('DocMenu')}><Image source={require('../assets/menu.png')} style={{width:'89%',height:'89%',marginTop:10, resizeMode:'contain'}}/></TouchableOpacity>
        <Image source={require('../assets/avatar.png')} style={styles.img}/>
        <Text style={styles.patient}>{this.state.data.name}</Text></View>
        <Text style={styles.txt}>Scan your patient's QR Code</Text>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={styles.qr}
        />

        {scanned && (
          <Text style={styles.rescan} onPress={() => this.setState({ scanned: false })}>Tap to scan again</Text>
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`${data} has been scanned!`);
    this.props.navigation.navigate('Prescription',{patientId:this.state.data});
  };
}
const styles = StyleSheet.create({
    qr: {
      flex: 0.7,
      backgroundColor: '#EBF5FF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt:{
        fontFamily:'Open Sans',
        fontSize: 25,
        color:'#2541B2',
        textAlign: 'center',
        marginBottom:10,
        marginTop:50,
    },
    rescan:{
        fontFamily:'Open Sans',
        fontSize: 25,
        color:'#EBF5FF',
        textAlign: 'center',
        marginTop:10,
        padding:10,
        backgroundColor:'#2541B2',
        justifyContent:"flex-end"
    },
    patient:{
        fontFamily:'Open Sans',
        fontSize: 25,
        color:'#EBF5FF',
        textAlign: 'center',
        marginLeft: 10,
        marginTop: 40
    },
    img: {
        flex: 0.2,
        resizeMode: 'contain',
        alignContent: 'flex-start',
        width: '80%',
        height: '80%',
        marginLeft:20
      },

});