import React from 'react'
import {NavigationContainer, useTheme} from '@react-navigation/native'
import {RootStack} from './src/navigation/rootStack'
import {AppProvider} from './src/context/appProvider'
import {darkTheme, lightTheme} from './src/constants/appTheme'

const App = () => {
  const {dark} = useTheme()
  const appTheme = dark ? darkTheme : lightTheme
  return (
    <AppProvider>
      <NavigationContainer theme={appTheme}>
        <RootStack />
      </NavigationContainer>
    </AppProvider>
  )
}

export default App
