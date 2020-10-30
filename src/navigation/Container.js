import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {MyStack} from './MyStack'


export const Container = props => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}