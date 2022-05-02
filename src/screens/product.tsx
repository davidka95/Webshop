import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import React, {useCallback, useContext, useEffect, useMemo} from 'react'
import {
  FlatList,
  LayoutAnimation,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native'
import {Button} from '../components/buttons/button'
import {EmptyList} from '../components/emptyList'
import {ProductRow} from '../components/rows/productRow'
import {strings} from '../constants/localization/localization'
import {spaces} from '../constants/spaces'
import {ProductContext} from '../context/productProvider'
import {LoadStatus} from '../model/enum/loadStatus'
import {Product} from '../model/product'
import {RootTabParamsList} from '../navigation/rootTab'

export const ProductScreen = () => {
  const {getProducts, loadStatus, products, error, remove} =
    useContext(ProductContext)
  const tabNavigation =
    useNavigation<NativeStackNavigationProp<RootTabParamsList>>()

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }, [products])

  const renderItem = (row: ListRenderItemInfo<Product>) => {
    const {item} = row
    return (
      <ProductRow
        product={item}
        onDeletePress={() => {
          remove(item.id)
        }}
      />
    )
  }

  const renderExtraEmptyComponent = useMemo(
    () => (
      <Button
        title={strings.productsScreen.newProduct}
        onPress={() => {
          tabNavigation.navigate('CREATE_PRODUCT')
        }}
      />
    ),
    [],
  )

  const onRefresh = useCallback(() => {
    getProducts()
  }, [getProducts])

  return (
    <FlatList
      refreshing={loadStatus === LoadStatus.LOADING}
      onRefresh={onRefresh}
      ListEmptyComponent={
        <EmptyList
          error={error}
          loadStatus={loadStatus}
          emptyText={strings.productsScreen.emptyList}
          extraEmptyComponent={renderExtraEmptyComponent}
        />
      }
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
    flexGrow: 1,
  },
})
