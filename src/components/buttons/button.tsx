import React from 'react'
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Animated,
  Vibration,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native'
import {Colors} from '../../constants/colors'
import {fontSizes} from '../../constants/fonts'
import {spaces} from '../../constants/spaces'
import {useColors} from '../../hooks/colorHooks'

export interface ButtonProps {
  title: string
  containerStyle?: StyleProp<ViewStyle>
  animatedContainerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  onPress: () => void
}

export class ButtonComponent extends React.Component<ButtonProps> {
  private shakeAnimation = new Animated.Value(0)
  private animatedValue = new Animated.Value(1)

  private onPressIn = () => {
    Animated.spring(this.animatedValue, {
      toValue: 0.94,
      useNativeDriver: true,
    }).start()
  }

  private onPressOut = () => {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start()
  }

  render() {
    const {onPress, title, containerStyle, textStyle, animatedContainerStyle} =
      this.props

    const animatedStyle = {
      transform: [
        {
          scale: this.animatedValue,
        },
      ],
    }

    const marginLeft = this.shakeAnimation.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
      outputRange: [0, -10, 10, -10, 10, -10, 0],
    })

    return (
      <TouchableWithoutFeedback
        style={containerStyle}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onPress={onPress}>
        <Animated.View style={[animatedContainerStyle, animatedStyle]}>
          <Animated.Text style={[textStyle, {marginLeft}]}>
            {title}
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  animate = () => {
    this.shakeAnimation.setValue(0)
    Vibration.vibrate(50)
    Animated.timing(this.shakeAnimation, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start()
  }
}

export const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const colors = useColors()
  const styles = createStyles(colors)

  return (
    <ButtonComponent
      ref={ref}
      {...props}
      animatedContainerStyle={[
        styles.animatedContainer,
        props.animatedContainerStyle,
      ]}
      textStyle={[styles.text, props.textStyle]}
    />
  )
})

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    animatedContainer: {
      borderRadius: 5,
      height: 44,
      backgroundColor: colors.accent,
      paddingHorizontal: spaces.big,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    text: {
      fontSize: fontSizes.button,
      color: colors.textSecondary,
    },
  })
