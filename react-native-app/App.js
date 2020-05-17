import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

//components
import Splash from './components/splash';
import Selection from './components/selection';
import DocQr from './components/docqr';
import Scan from './components/scan';
import Prescription from './components/prescription';
import Menu from './components/menu';
import Login from './components/login';
import ViewRx from './components/viewrx';
import RxList from './components/rxlist';
import PatQR from './assets/patqr';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    initialRouteName="Splash"
    component={Splash}
    >
    <Stack.Screen 
      name="Selection" 
      component={Selection}
      options={{ headerShown: false}}
    />
    <Stack.Screen 
      name="DocQr" 
      component={DocQr}
      options={{ headerShown: false}}
    />
    <Stack.Screen 
      name="PatQr" 
      component={PatQR}
      options={{ headerShown: false}}
    />
    <Stack.Screen 
      name="Scan" 
      component={Scan}
      options={{ headerShown: false}}
    />
    <Stack.Screen 
      name="Prescription" 
      component={Prescription}
      options={{ headerShown: false}}
    />
    <Stack.Screen 
      name="Menu" 
      component={Menu}
      options={{ headerShown: false}}
    />
    <Stack.Screen 
      name="Login" 
      component={Login}
      options={{ headerShown: false}}
    />
    <Stack.Screen 
      name="ViewRx" 
      component={ViewRx}
      options={{ headerShown: false}}
    />
    <Stack.Screen 
      name="RxList" 
      component={RxList}
      options={{ headerShown: false}}
    />
    </Stack.Navigator>
    );
  }  


export default function App() {
  let [fontsLoaded] = useFonts({
    'Open Sans': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
  }
}

