import React from 'react'
import {useState} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native'
import { SCREENS } from '../navigation/MyStack'



export const HomeScreen = props => {
  const navigation = props.navigation
    const [content, setContent] = useState('')
    const [txt, setAnotherText] = useState ('')

    const textChangeHandler = text => {
      setContent(text)
    }

    const buttonClickHandler = () => { 
         setAnotherText(content)
         setContent  ('')
    }

  return (
    <View style = {styles.container}>
      <View> 
        <Text style = {styles.text}> Hello, World! </Text> 
      </View>
        <View style = {styles.buttonInput}> 
         <TextInput style={styles.input}
            onChangeText = {textChangeHandler}
            value={content}
            placeholder = 'Add...'
        />
          <Button
            title="Set text value"
            color="#556B2F"
            onPress = {buttonClickHandler}
          />
          </View>
                <View>
                   <Text style = {styles.field}> {txt} </Text>
               </View>
        <TouchableOpacity>
          <Button 
            title="Go to another screen"
            color= '#006400'
            onPress = {() => {navigation.navigate(SCREENS.SECOND)}}
          />
        </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#FFEFD5',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: {
    color: '#006400', 
    fontWeight: 'bold', 
    fontSize: 45, 
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: {width: -1, height: 1}, 
    textShadowRadius: 10
  },
  input: { 
    width: 220,
    height: 50, 
    borderColor: '#006400', 
    borderWidth: 2,
    borderStyle: 'solid', 
    alignItems: 'center',
  },
    buttonInput: {
      flexDirection: 'row',
      justifyContent: 'space-around',
  },
  field: {
    alignSelf: 'center',
    width: 320,
  }
})
