import React from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'
import {Colors} from '../constants/colors'
import {useColors} from '../hooks/colorHooks'

export const Loader = () => {
  const colors = useColors()
  const styles = createStyles(colors)
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <ActivityIndicator size={'large'} color={colors.loader.indicator} />
      </View>
    </View>
  )
}

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: colors.loader.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    center: {
      backgroundColor: colors.loader.center,
      borderRadius: 16,
      padding: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
