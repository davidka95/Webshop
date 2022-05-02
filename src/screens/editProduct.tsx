import React, {useContext} from 'react'
import {strings} from '../constants/localization/localization'
import {ProductForm, ProductFormData} from '../components/forms/productForm'
import {ProductContext} from '../context/productProvider'
import {CreateProduct} from '../model/dto/createProduct'
import {Alert, View} from 'react-native'
import {Loader} from '../components/loader'
import {LoadStatus} from '../model/enum/loadStatus'
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import {ProductStackParamList} from '../navigation/productStack'
import {Product} from '../model/product'

export const EditProductScreen = () => {
  const route =
    useRoute<RouteProp<ProductStackParamList, 'EDIT_PRODUCT_SCREEN'>>()
  const navigation = useNavigation()
  const {updateProduct, updateLoadStatus} = useContext(ProductContext)

  const onSubmit = async (productData: ProductFormData) => {
    const product: Product = {
      id: route.params.id,
      description: productData.description,
      name: productData.name,
      quantity: Number(productData.quantity),
    }
    const isSuccess = await updateProduct(product)
    if (isSuccess) {
      navigation.goBack()
    } else {
      Alert.alert(strings.errors.attention, strings.editProduct.editError)
    }

    return isSuccess
  }

  return (
    <View style={{flex: 1}}>
      <ProductForm
        onSubmit={onSubmit}
        buttonText={strings.editProduct.edit}
        initialValue={{
          description: route.params.description,
          name: route.params.name,
          quantity: route.params.quantity.toString(),
        }}
      />
      {updateLoadStatus === LoadStatus.LOADING && <Loader />}
    </View>
  )
}
