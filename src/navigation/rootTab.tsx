import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {CreateProductScreen} from '../screens/createProduct'
import {ProductScreen} from '../screens/product'
import {strings} from '../constants/localization/localization'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {useColors} from '../hooks/colorHooks'
import {TabBarIcon} from '../components/tabBarIcon'

type RootTabParamsList = {
  CREATE_PRODUCT: undefined
  PRODUCTS: undefined
}

const Tab = createBottomTabNavigator<RootTabParamsList>()

export const RootTab = () => {
  const colors = useColors()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: colors.tabBar.inactive,
        tabBarActiveTintColor: colors.tabBar.active,
        headerStyle: {backgroundColor: colors.navBar.background},
        tabBarStyle: {backgroundColor: colors.tabBar.background},
      }}>
      <Tab.Screen
        options={{
          title: strings.tabs.read,
          tabBarIcon: props => <TabBarIcon {...props} name="shop" />,
        }}
        name="PRODUCTS"
        component={ProductScreen}
      />
      <Tab.Screen
        name="CREATE_PRODUCT"
        options={{
          title: strings.tabs.create,
          tabBarIcon: props => <TabBarIcon {...props} name="squared-plus" />,
        }}
        component={CreateProductScreen}
      />
    </Tab.Navigator>
  )
}
