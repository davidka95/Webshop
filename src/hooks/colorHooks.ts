import {useTheme} from '@react-navigation/native'
import {Colors, darkColors, lightColors} from '../constants/colors'

export const useColors = (): Colors => {
  const {dark} = useTheme()
  return dark ? darkColors : lightColors
}
