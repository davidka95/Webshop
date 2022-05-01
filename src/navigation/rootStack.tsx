import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import {RootTab} from './rootTab'

export type RootStackParamList = {
  ROOT_TAB: undefined
}

const Root = createNativeStackNavigator<RootStackParamList>()

const rootStackOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

export const RootStack = () => (
  <Root.Navigator screenOptions={rootStackOptions}>
    <Root.Screen name="ROOT_TAB" component={RootTab} />
  </Root.Navigator>
)
