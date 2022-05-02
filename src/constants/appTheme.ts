import {
  DefaultTheme,
  DarkTheme as DefaultDarkTheme,
  Theme,
} from '@react-navigation/native'
import {lightColors, darkColors} from './colors'
export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: lightColors.background,
  },
}

export const darkTheme: Theme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    background: darkColors.background,
  },
}
