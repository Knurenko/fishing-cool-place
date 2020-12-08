import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SCREENS } from "../../navigation/MyStack"
import { clearText } from "../../redux/rootReduser"



export const HomeScreenComponent = props => {

  const navigation = props.navigation
 
 const dispatch = useDispatch()
 const textValue = useSelector (state=>state.text)
 const handleClearText = () => { dispatch(clearText()) }
 const buttonPressHandler = () => {navigation.navigate(SCREENS.SECOND)} 


  return (
    <View style={styles.container}>
      <View> 
        <Text style = {styles.text}> Hello, World! </Text> 
      </View>
      <View>
        <Text style = {styles.field}>{`Your message: ${textValue}`}</Text>
      </View>
      <View style = {styles.buttonInput}> 
        <Button
          title="Clear text"
          color='#006400'
          onPress={handleClearText}
        />
      </View>
      <Button 
        title="Go to another screen"
        color= '#006400'
        onPress = {buttonPressHandler}
      />
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
    buttonInput: {
      flexDirection: 'row',
      justifyContent: 'space-around',
  },
  field: {
    alignSelf: 'center',
    width: 320,
  }
})
