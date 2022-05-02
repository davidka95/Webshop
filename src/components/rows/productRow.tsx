import React, {useCallback, useEffect, useState} from 'react'
import {LayoutAnimation, StyleSheet, Text, View} from 'react-native'
import {Product} from '../../model/product'
import {Card} from '../card'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import {IconButton} from '../buttons/iconButton'
import {margins} from '../../constants/margins'
import {useColors} from '../../hooks/colorHooks'
import {Colors} from '../../constants/colors'
import {fontSizes} from '../../constants/fonts'

export interface ProductRowProps {
  onEditPress?: (id: string) => void
  onDeletePress?: (id: string) => void
  product: Product
}

export const ProductRow = (props: ProductRowProps) => {
  const colors = useColors()
  const styles = createStyles(colors)
  const {product} = props

  const onEditPress = useCallback(() => {
    props.onEditPress?.(product.id)
  }, [product])

  const onDeletePress = useCallback(() => {
    props.onDeletePress?.(product.id)
  }, [product])

  return (
    <Card>
      <Text style={[styles.title, margins.mbNormal]}>{product.name}</Text>
      <Text style={[styles.description, margins.mbNormal]} numberOfLines={2}>
        {product.description}
      </Text>
      <View style={styles.quantityRow}>
        <IconButton
          style={[margins.mrSmall]}
          iconProps={{name: 'pencil'}}
          onPress={onEditPress}
        />
        <Text style={[styles.quantity, margins.mrSmall]}>
          {product.quantity.toString()}
        </Text>
        <IconButton iconProps={{name: 'trash'}} onPress={onDeletePress} />
      </View>
    </Card>
  )
}

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    quantityRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    title: {
      fontSize: fontSizes.medium,
      fontWeight: 'bold',
      color: colors.textPrimary,
    },
    description: {
      fontSize: fontSizes.small,
      color: colors.textPrimary,
    },
    quantity: {
      fontSize: fontSizes.normal,
      color: colors.textSecondary,
    },
  })
