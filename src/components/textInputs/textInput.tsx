import React, {useEffect} from 'react'
import {
  LayoutAnimation,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import {Colors} from '../../constants/colors'
import {fontSizes} from '../../constants/fonts'
import {margins} from '../../constants/margins'
import {spaces} from '../../constants/spaces'
import {textStyle} from '../../constants/styles'
import {useColors} from '../../hooks/colorHooks'

interface LoginTextInputProps {
  textInputProps?: TextInputProps
  label: string
  labelStyle?: StyleProp<TextStyle>
  error?: string
  style?: StyleProp<ViewStyle>
}

export const SimpleTextInput = React.forwardRef(
  (props: LoginTextInputProps, ref: any) => {
    const colors = useColors()
    const styles = createStyles(colors)

    useEffect(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    }, [props.error])

    return (
      <View style={[margins.mbNormal, props.style]}>
        <Text
          style={[
            styles.label,
            props.labelStyle,
            props.error ? {color: colors.textInput.error} : {},
            margins.mlSmall,
          ]}>
          {props.label}
        </Text>
        <TextInput
          ref={ref}
          placeholderTextColor={colors.textInput.placeholder}
          {...props.textInputProps}
          style={[styles.textInput, props.textInputProps?.style]}
          underlineColorAndroid="transparent"
        />
        {!!props.error && (
          <Text style={[styles.errorText, margins.mlSmall]}>{props.error}</Text>
        )}
      </View>
    )
  },
)

const createStyles = (colors: Colors) => {
  const styles = StyleSheet.create({
    container: {
      // backgroundColor: colors.textInput.background,
      borderRadius: 5,
      // borderColor: colors.textInput.border,
      padding: 10,
      borderWidth: 1.5,
    },
    label: {
      fontSize: fontSizes.normal,
      color: colors.textPrimary,
      fontWeight: '500',
      marginBottom: spaces.small,
    },
    textInput: {
      color: colors.textInput.text,
      fontSize: fontSizes.textInput,
      padding: 10,
      borderRadius: 8,
      backgroundColor: colors.navBar.background,
    },
    errorText: {
      color: colors.textInput.error,
      fontSize: fontSizes.small,
    },
  })
  return styles
}
