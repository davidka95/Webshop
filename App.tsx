import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {RootStack} from './src/navigation/rootStack'
import {AppProvider} from './src/context/appProvider'

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AppProvider>
  )
}

export default App
