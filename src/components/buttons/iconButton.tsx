import React from 'react'
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import {IconProps} from 'react-native-vector-icons/Icon'
import {useColors} from '../../hooks/colorHooks'

export interface IconButtonProps {
  iconProps: IconProps
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

export const IconButton = (props: IconButtonProps) => {
  const colors = useColors()
  const {iconProps, style, onPress} = props
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <EntypoIcon size={24} color={colors.accent} {...iconProps} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
