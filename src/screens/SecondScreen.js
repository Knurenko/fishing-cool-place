import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

 export const SecondScreen = () => {
     return (
        <View style = {styles.container}>
            <Text style = { styles.text }> Hola, Amigo! </Text>
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
    text: {
        color: '#B22222', 
        fontWeight: 'bold', 
        fontSize: 45, 
        textShadowColor: 'rgba(0, 0, 0, 0.75)',            
        textShadowOffset: {width: -1, height: 1},   
        textShadowRadius: 10 
    }
 })

 
