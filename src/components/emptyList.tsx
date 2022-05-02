import React, {ReactNode} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Colors} from '../constants/colors'
import {fontSizes} from '../constants/fonts'
import {margins} from '../constants/margins'
import {useColors} from '../hooks/colorHooks'
import {LoadStatus} from '../model/enum/loadStatus'

interface EmptyListProps {
  loadStatus: LoadStatus
  emptyText: string
  extraEmptyComponent?: ReactNode
  error?: string
}

export const EmptyList = (props: EmptyListProps) => {
  const {loadStatus, emptyText, error, extraEmptyComponent} = props
  const colors = useColors()
  const styles = createStyles(colors)

  if (loadStatus === LoadStatus.LOADED && error) {
    return (
      <View style={styles.container}>
        <Text style={[styles.emptyText, margins.mbBig]}>{error}</Text>
      </View>
    )
  }

  if (loadStatus === LoadStatus.LOADED && emptyText) {
    return (
      <View style={styles.container}>
        <Text style={[styles.emptyText, margins.mbBig]}>{emptyText}</Text>
        {extraEmptyComponent}
      </View>
    )
  }

  return <View />
}

const createStyles = (colors: Colors) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    emptyText: {
      fontSize: fontSizes.big,
      color: colors.textPrimaryLight,
      textAlign: 'center',
    },
  })

  return styles
}
