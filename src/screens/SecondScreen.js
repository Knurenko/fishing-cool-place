import React from 'react'
import {View, Text, StyleSheet, Button,} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

    
 export const SecondScreen = props => {
     const navigation = props.navigation
     const route = props.route

     const [inText, setInText] = React.useState ('')

     const textInputHandler = t => {
         setInText(t)
     }

     const callback = route.params?.callback

     return (
        <View style = {styles.container}>
            <Text style = { styles.text }> Hola, Amigo! </Text>
            <View style = { styles.inputBlock}>
                <TextInput style = {styles.inputTxt}
                     onChangeText = {textInputHandler}
                     value={inText}
                     placeholder='Add...'
                />
                <Button 
                    title = 'Send to Home'
                    color = "#006400"
                    onPress = {() => {navigation.goBack(callback (inText))}}
                />
            </View>
        </View>
     )
 }

 

 const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FFEFD5',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color: '#006400', 
        fontWeight: 'bold', 
        fontSize: 45, 
        textShadowColor: 'rgba(0, 0, 0, 0.75)',            
        textShadowOffset: {width: -1, height: 1},   
        textShadowRadius: 10 
    },
    inputTxt: {
        width: 200,
        height: 50, 
        borderColor: '#006400', 
        borderWidth: 2,
        borderStyle: 'solid', 
        alignItems: 'center',
    },
    inputBlock: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
 })

 
