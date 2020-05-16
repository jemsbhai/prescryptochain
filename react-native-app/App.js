import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';

//components
import Splash from './components/splash';
import Selection from './components/selection';

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
    </Stack.Navigator>
    );
  }  


export default function App() {
  let [fontsLoaded] = useFonts({
    'Open Sans': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  return (
    <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
}

