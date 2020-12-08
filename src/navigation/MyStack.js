import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {SecondScreen} from '../screens/SecondScreenComponent'
import { HomeScreenComponent } from '../screens/HomeScreen/HomeScreenComponent'

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
        component={HomeScreenComponent}
        />
        <Stack.Screen 
        name={SCREENS.SECOND} 
        component={SecondScreen} 
        />
    </Stack.Navigator>
    )  
}