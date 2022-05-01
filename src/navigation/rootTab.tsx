import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {CreateProductScreen} from '../screens/createProduct'
import {ProductScreen} from '../screens/product'
import {strings} from '../constants/localization'

type RootTabParamsList = {
  CREATE_PRODUCT: undefined
  PRODUCTS: undefined
}

const Tab = createBottomTabNavigator<RootTabParamsList>()

export const RootTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{title: strings.tabs.read}}
      name="PRODUCTS"
      component={ProductScreen}
    />
    <Tab.Screen
      name="CREATE_PRODUCT"
      options={{title: strings.tabs.create}}
      component={CreateProductScreen}
    />
  </Tab.Navigator>
)
