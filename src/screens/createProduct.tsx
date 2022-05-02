import React from 'react'
import {strings} from '../constants/localization/localization'
import {ProductForm} from '../components/forms/productForm'

export const CreateProductScreen = () => {
  const onSubmit = () => {}
  return (
    <ProductForm
      onSubmit={onSubmit}
      buttonText={strings.createProduct.create}
    />
  )
}
