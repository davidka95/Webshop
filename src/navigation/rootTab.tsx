import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {CreateProductScreen} from '../screens/createProduct'
import {ProductScreen} from '../screens/product'

type RootTabParamsList = {
  CREATE_PRODUCT: undefined
  PRODUCTS: undefined
}

const Tab = createBottomTabNavigator<RootTabParamsList>()

export const RootTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{title: 'Termékek'}}
      name="PRODUCTS"
      component={ProductScreen}
    />
    <Tab.Screen
      name="CREATE_PRODUCT"
      options={{title: 'Új Termék'}}
      component={CreateProductScreen}
    />
  </Tab.Navigator>
)
