import React, {useContext} from 'react'
import {strings} from '../constants/localization/localization'
import {ProductForm, ProductFormData} from '../components/forms/productForm'
import {ProductContext} from '../context/productProvider'
import {CreateProduct} from '../model/dto/createProduct'
import {Alert, View} from 'react-native'
import {Loader} from '../components/loader'
import {LoadStatus} from '../model/enum/loadStatus'
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootTabParamsList} from '../navigation/rootTab'

export const CreateProductScreen = () => {
  const {addProduct, createLoadStatus} = useContext(ProductContext)
  const navigation =
    useNavigation<NativeStackNavigationProp<RootTabParamsList>>()

  const onSubmit = async (product: ProductFormData) => {
    const createProduct: CreateProduct = {
      description: product.description,
      name: product.name,
      quantity: Number(product.quantity),
    }
    const isSuccess = await addProduct(createProduct)
    if (isSuccess) {
      navigation.navigate('PRODUCTS_STACK')
    } else {
      Alert.alert(strings.errors.attention, strings.editProduct.editError)
    }

    return isSuccess
  }

  return (
    <View style={{flex: 1}}>
      <ProductForm
        onSubmit={onSubmit}
        buttonText={strings.createProduct.create}
      />
      {createLoadStatus === LoadStatus.LOADING && <Loader />}
    </View>
  )
}
