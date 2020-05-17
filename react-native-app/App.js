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
      name="Scan" 
      component={Scan}
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

