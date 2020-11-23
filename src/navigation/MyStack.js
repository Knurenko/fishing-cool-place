import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {HomeScreen} from '../screens/HomeScreen'
import {SecondScreen} from '../screens/SecondScreen'

export const SCREENS = {
    HOME: 'Home',
    SECOND: 'Second'
}
const Stack = createStackNavigator();

export const MyStack = props => {
    return (
    <Stack.Navigator>
        <Stack.Screen
        name = {SCREENS.HOME}
        component={HomeScreen}
        />
        <Stack.Screen 
        name={SCREENS.SECOND} 
        component={SecondScreen} 
        />
    </Stack.Navigator>
    )  
}