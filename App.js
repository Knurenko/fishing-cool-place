import 'react-native-gesture-handler'
import React from 'react'
import {Container} from './src/navigation/Container'
import {store} from './src/store/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store = {store}>
      <Container/>
    </Provider>
  )
}

export default App;