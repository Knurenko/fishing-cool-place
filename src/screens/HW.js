import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

export default function App () {
  return (
    <View style = {styles.container}>
      <Text style = { { color: '#fff', fontWeight: 'bold', fontSize: 30 } }> Hello World! </Text> 
      <View style={styles.button}>
      <Button 
        title="Go to another screen"
        color="#800000"
        onPress = {() => Alert.alert('I cant do this right now, I dont know how :c')}
/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    alignSelf: 'stretch'
  }
})
