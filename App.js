import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import HW from './src/screens/HW'
import HA from './src/screens/HA' 

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hello, its my first screen"
          component={HW}
        />
        <Stack.Screen 
          name="Hola, its my second screen" 
          component={HA} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}