import React, {useContext} from 'react'
import {strings} from '../constants/localization/localization'
import {ProductForm, ProductFormData} from '../components/forms/productForm'
import {ProductContext} from '../context/productProvider'
import {CreateProduct} from '../model/dto/createProduct'
import {View} from 'react-native'
import {Loader} from '../components/loader'
import {LoadStatus} from '../model/enum/loadStatus'

export const CreateProductScreen = () => {
  const {addProduct, createLoadStatus} = useContext(ProductContext)

  const onSubmit = async (product: ProductFormData) => {
    const createProduct: CreateProduct = {
      description: product.description,
      name: product.name,
      quantity: Number(product.quantity),
    }
    return addProduct(createProduct)
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
