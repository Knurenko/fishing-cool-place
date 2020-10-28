import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'



export default function App ({navigation}) {
  return (
    <View style = {styles.container}>
      <Text style = { { color: '#B22222', fontWeight: 'bold', fontSize: 45, textShadowColor: 'rgba(0, 0, 0, 0.75)', 
      textShadowOffset: {width: -1, height: 1},  textShadowRadius: 10 } }> Hello, World! </Text> 
        <TouchableOpacity style={styles.button}>
          <Button 
            title="Go to another screen"
            color="#800000"
            onPress = {() => navigation.navigate('Hola, its my second screen')}
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
  
})