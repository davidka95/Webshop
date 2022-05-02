import React from 'react'
import {
  Animated,
  StyleProp,
  StyleSheet,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native'
import {Colors} from '../constants/colors'
import {spaces} from '../constants/spaces'
import {useColors} from '../hooks/colorHooks'

export interface CardProps {
  touchableStyle?: StyleProp<ViewStyle>
  containerSyle?: StyleProp<ViewStyle>
  children: React.ReactNode
  onPress?: () => void
}

export const Card = (props: CardProps) => {
  const colors = useColors()
  const styles = createStyles(colors)
  const animatedValue = new Animated.Value(1)

  const onPressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start()
  }

  const onPressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start()
  }

  const animatedStyle = {
    transform: [
      {
        scale: animatedValue,
      },
    ],
  }

  return (
    <TouchableWithoutFeedback
      onPress={props.onPress}
      style={props.touchableStyle}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View
        style={[styles.container, props.containerSyle, animatedStyle]}>
        {props.children}
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const createStyles = (colors: Colors) => {
  const styles = StyleSheet.create({
    container: {
      overflow: 'hidden',
      borderRadius: 10,
      backgroundColor: colors.card.background,
      shadowColor: colors.card.shadow,
      elevation: 4,
      shadowOpacity: 1,
      shadowRadius: 34,
      marginBottom: spaces.medium,
      padding: spaces.medium,
      shadowOffset: {
        height: 13,
        width: 3,
      },
    },
  })

  return styles
}
