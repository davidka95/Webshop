import React, {useContext, useEffect} from 'react'
import {
  FlatList,
  LayoutAnimation,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native'
import {ProductRow} from '../components/rows/productRow'
import {spaces} from '../constants/spaces'
import {ProductContext} from '../context/productProvider'
import {Product} from '../model/product'

export const ProductScreen = () => {
  const {getProducts, loadStatus, products, error} = useContext(ProductContext)

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }, [products])

  const renderItem = (row: ListRenderItemInfo<Product>) => {
    const {item} = row
    return <ProductRow product={item} />
  }

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
      data={products}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  flatListContent: {
    paddingHorizontal: spaces.contentHorizontal,
    paddingVertical: spaces.contentVertical,
  },
})
