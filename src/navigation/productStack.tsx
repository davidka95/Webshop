import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Product} from '../model/product'
import {EditProductScreen} from '../screens/editProduct'
import {ProductScreen} from '../screens/product'
import {useColors} from '../hooks/colorHooks'
import {strings} from '../constants/localization/localization'

export type ProductStackParamList = {
  PRODUCT_SCREEN: undefined
  EDIT_PRODUCT_SCREEN: Product
}

const Root = createNativeStackNavigator<ProductStackParamList>()

export const ProductStack = () => {
  const colors = useColors()

  return (
    <Root.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.navBar.background},
        headerBackTitle: '',
        headerTintColor: colors.textPrimary,
      }}>
      <Root.Screen
        name="PRODUCT_SCREEN"
        options={{
          title: strings.tabs.read,
        }}
        component={ProductScreen}
      />
      <Root.Screen
        name="EDIT_PRODUCT_SCREEN"
        options={{
          title: strings.editProduct.edit,
        }}
        component={EditProductScreen}
      />
    </Root.Navigator>
  )
}
