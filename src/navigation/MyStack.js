import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {HomeScreen} from '../screens/HomeScreen'
import {SecondScreen} from '../screens/SecondScreen'

export const Enum = {
    HOME: 'Home',
    SECOND: 'Second'
}
const Stack = createStackNavigator();

export const MyStack = props => {
    return (
    <Stack.Navigator>
        <Stack.Screen
        name = {Enum.HOME}
        component={HomeScreen}
        />
        <Stack.Screen 
        name={Enum.SECOND} 
        component={SecondScreen} 
        />
    </Stack.Navigator>
    )  
}