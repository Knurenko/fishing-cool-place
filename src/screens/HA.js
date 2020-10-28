import React from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'

  export default function App ({navigation}) {
     return (
        <View style = {styles.container}>
            <Text style = { { color: '#B22222', fontWeight: 'bold', fontSize: 45, textShadowColor: 'rgba(0, 0, 0, 0.75)', 
                textShadowOffset: {width: -1, height: 1},   textShadowRadius: 10 } }> Hola, Amigo! </Text>
                    <TouchableOpacity style={styles.button}>
                    <Button
                        title="Go back"
                         color="#800000"
                        onPress = {() => navigation.navigate('Hello, its my first screen')}
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
    }
 })
