import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import {Enum} from '../navigation/MyStack'



export const HomeScreen = props => {
  const navigation = props.navigation
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}> Hello, World! </Text> 
        <TouchableOpacity style={styles.button}>
          <Button 
            title="Go to another screen"
            color="#800000"
            onPress = {() => {navigation.navigate(Enum.SECOND)}}
          />
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#FFDAB9',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    alignSelf: 'stretch',
  },
  text: {
    color: '#B22222', 
    fontWeight: 'bold', 
    fontSize: 45, 
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: {width: -1, height: 1}, 
    textShadowRadius: 10
  }
})
