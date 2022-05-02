import React from 'react'
import {ColorValue} from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'

interface TabBarIconProps {
  color: ColorValue
  name: string
  size: number
}

export const TabBarIcon = (props: TabBarIconProps) => {
  const {color, name, size} = props
  return <EntypoIcon name={name} color={color} size={size} />
}
